import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


type Props = {
  label: string;
};

const Navbar = () => {
  const { t } = useTranslation("common");

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>{t("navbar.home")}</a>
          </Link>{" "}
        </li>
        <li>
          <Link href="/about">
            <a>{t("navbar.about")}</a>
          </Link>{" "}
        </li>
        <li>
          <Link href="/users">
            <a>{t("navbar.users")}</a>
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

// export async function getStaticProps({ locale  }:any) {

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//       // Will be passed to the page component as props
//     },
//   };
// }


export default Navbar;
