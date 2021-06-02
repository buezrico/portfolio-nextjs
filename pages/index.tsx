import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
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
        <div className="top">
          <div className="top-info ">
            <div className="phone contact-info">
              <i className="bx bx-phone-call bx-tada-hover"></i>
              <p>+234 810 916 9579</p>
            </div>
            <div className="email contact-info ">
              <i className="bx bx-mail-send bx-tada-hover"></i>
              <p>ricobuez@gmail.com</p>
            </div>
            <div className="social">
              <i className="bx bxl-github bx-tada-hover"></i>
              <i className="bx bxl-instagram bx-tada-hover"></i>
              <i className="bx bxl-twitter bx-tada-hover"></i>
              <i className="bx bxl-whatsapp bx-tada-hover"></i>
            </div>
          </div>
          <Navbar />
        </div>

        <div className="content">
          <div className="center-content">
            {/* <Image
              src="/images/profile-pic.png"
              height={350}
              width={400}
              className="img-fluid"
              // layout="responsive"
            /> */}
          </div>
          <div className="bottom-content"></div>
        </div>
      </header>
    </div>
  );
}
