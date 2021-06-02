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

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
      </Head>

      <header>
        <div className="top-info">
          <div className="phone d-flex bg-danger">
            <i className="bx bx-phone-call bx-tada-hover"></i>
            <p>+234 810 916 9579</p>
          </div>
        </div>
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
