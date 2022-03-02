

import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layouts";
import '../styles/index.css'
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default appWithTranslation(MyApp);

