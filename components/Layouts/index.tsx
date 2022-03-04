import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../Sidenav";
import Header from "../Header";
import { useTranslation } from "next-i18next";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "Some Information" }: Props) => {
  return (
    <div>
      <Head >
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen flex flex-row overflow-y-hidden font-Oxygen">
        <div className=" h-screen basis-1/5">
          <Navbar />
        </div>
        <div className="h-screen basis-4/5 bg-white">
          <div className="flex flex-col h-screen justify-between">
            <div className='basis-1/5'>
              <Header title={title} />
            </div>
            <div>
              <main className="mb-auto p-4 min-h-screen bg-gray-200 basis-3/5">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
