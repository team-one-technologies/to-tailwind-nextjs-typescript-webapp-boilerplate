import Layout from "../../components/Layouts";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type DashBoardProps = {
  t: Function;
};
const DashBorad = ({ t }: DashBoardProps) => {
  return (
    <Layout title="Dashboard">
      <p>Dashboard</p>
    </Layout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default withTranslation()(DashBorad);
