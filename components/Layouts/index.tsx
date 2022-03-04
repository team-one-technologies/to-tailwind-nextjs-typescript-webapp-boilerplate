import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Navbar from "../Sidenav";
import Header from "../Header";
import { useTranslation } from "next-i18next";
import { Footer } from "../Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "Some Information" }: Props) => {
  const [isCollapse, changeCollapse] = useState(true);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full">
        <Header
          currentCollapse={isCollapse}
          changeCollapse={changeCollapse}
          title={title}
        />
      </div>
      {isCollapse ? (
        <div className={"min-h-screen w-full flex flex-row"}>
          <div  className="p-2 h-screen basis-1/5">
            <Navbar />
          </div>
          <main className="flex-1 overflow-y-auto p-5">{children}</main>
        </div>
      ) : (
        <div className={"min-h-screen flex flex-row"}>
          <div hidden={isCollapse} className="p-2 h-screen basis-1/5">
            <Navbar />
          </div>
          <div className={"min-h-screen basis-4/5"}>
            <div className="flex flex-col h-screen">
              <main className="flex-1 overflow-y-auto p-5">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
