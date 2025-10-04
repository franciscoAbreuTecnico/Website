"use client";
import MyNavbar from "../components/layout/Navbar";
import MyFooter from "../components/layout/Footer";
import Head from "next/head";
import { withBasePath } from "../utils/basePath";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Head>
        <title>TLMOTO</title>
        <meta name="TLMoto Website" content="Created by Software Department" />
        <link rel="icon" href={withBasePath("/favicon.ico")} />
      </Head>
      <div className="flex flex-col min-h-screen relative z-20">
        <MyNavbar />
        <main className="flex-grow">{children}</main>
        <MyFooter />
      </div>
    </div>
  );
}
