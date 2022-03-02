import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import { useTranslation } from "next-i18next";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen flex flex-row">
        <div className="p-2 h-screen basis-1/5">
          <Navbar />
        </div>
        <div className="h-screen basis-4/5">
          <div className="flex flex-col h-screen justify-between">
            <div className='basis-1/5'>
              <Header title={title} />
            </div>
            <div>
              <main className="mb-auto p-3 min-h-screen bg-gray-200 basis-3/5">
                {children}
              </main>
            </div>
            <div>
              <footer className="h-10 p-2 bg-blue-500 basis-1/5">
                <span>{"footer.title"}</span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
