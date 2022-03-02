import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withTranslation } from "next-i18next";
import { ReactElement } from "react";

type Props = {
  items: User[];
  t: Function;
};



const WithStaticProps = ({ items, t }: Props) => {
  return (
      <div>
        <p>
          <h1> {("list.title")}</h1>
        </p>
        <p>You are currently on: /users</p>
        <List items={items} />
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const items: User[] = sampleUserData;

  return {
    props: {
      items,
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
// export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: User[] = sampleUserData;
//   return {
//     props: {
//       items,
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// };

WithStaticProps.getLayout = function getLayout(page: ReactElement){
  return(
      <Layout >
          {page}
      </Layout>
  )

}

export default WithStaticProps;
