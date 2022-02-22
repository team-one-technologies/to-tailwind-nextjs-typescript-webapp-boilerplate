import Head from "next/head";
import Layout from "../components/Layout";
// import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import i18n from "./i18n";
import { withTranslation } from "react-i18next";
// import i18next from "i18next";

function Home({ t, i18n }: any) {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(res => console.log(res));
  };
  // const changeLanguage = (lng: string) =>  console.log("Reached",lng);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={"Home"}>
        <h1> {t("app.title")}</h1>
        <button onClick={() => changeLanguage("np")}>np</button> <hr />
        <button onClick={() => changeLanguage("en")}>en</button>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

// export default Home;
export default withTranslation()(Home);
