import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buez Rico</title>
        <meta name="description" content="My Portfolio Website" />
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <header>
        <Navbar />

        <div className="content">
          <Image
            src="/images/profile-pic.png"
            height={400}
            width={400}
            className="img-fluid"
            // layout="responsive"
          />
        </div>
      </header>
    </div>
  );
}
