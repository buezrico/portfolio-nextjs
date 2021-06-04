import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="portfolio">
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
        {/* <div className="top-info ">
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
        </div> */}
        <Navbar />

        <div className="content container">
          <div className="text">
            <h1 className="mb-2 bx-tada text-center">👋</h1>
            <h1 className="mb-2 ">
              I am <span className="styled-title">Chibueze</span>.
            </h1>
            <h4 className="mb-3">And I'm a Frontend Web Developer</h4>
            <div className="btn-contact">
              <button className="btn btn-secondary rounded p-2 px-4">
                <i className="bx bx-mail-send"></i>
                <p>Get In Touch</p>
              </button>
            </div>
            <div className="arrow-down bx-fade-down text-primary">
              <i className="bx bxs-chevrons-down"></i>
              <span>About Me</span>
            </div>
          </div>
          <div className="picture">
            <img src="/images/header-pic2.png" className="img-fluid" alt="" />
          </div>
        </div>
      </header>

      <main className="about">
        <div className="container">
          <div className="about-section"></div>
        </div>
      </main>
      <main className="about">
        <div className="container">
          <div className="about-section"></div>
        </div>
      </main>
    </div>
  );
}
