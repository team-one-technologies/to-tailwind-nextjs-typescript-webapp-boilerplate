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
    <Layout title="Users">
      <div className="flex flex-col items-start p-3 mx-auto">
        <div>
        <h1 className="text-xl font-semibold"> All Users</h1>
        </div>
         
        <List items={items} />
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </div>
      </Layout>
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


export default withTranslation()(WithStaticProps);
