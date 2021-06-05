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
      <header>
        <div className="content container">
          <div className="text">
            <h2 className="mb-2 bx-tada text-center">👋</h2>
            <h1 className="mb-2 ">
              I am <span className="styled-title">Chibueze</span>.
            </h1>
            <h4 className="mb-3">And I'm a Frontend Web Developer</h4>
            <div className="btn-contact">
              <button className="btn rounded-0 p-2 px-4">
                <i className="bx bx-mail-send"></i>
                <p>Get In Touch</p>
              </button>
            </div>
            <div className="arrow-down bx-fade-down">
              <i className="bx bxs-chevrons-down"></i>
              <span>Get to know Me</span>
            </div>
          </div>
          <div className="picture">
            <img src="/images/header-pic3.png" className="img-fluid" alt="" />
          </div>
        </div>
      </header>

      <section className="about">
        <div className="wrapper">
          <div className="container inner">
            <div className="about-section">
              <h1 className="mb-5">Get To Know Me</h1>

              <div className="about-content-wrapper">
                <div className="about-content">
                  <div className="about-content-desc">
                    <h4>About Me</h4>
                    <p>
                      I'm a Web Developer, I make cool and awesome websites. I
                      enjoy building Frontend applications mostly.
                    </p>
                    <div className="hire-btn">
                      <button className="btn btn-outline-primary rounded-0 px-4">
                        Hire Me
                      </button>
                    </div>
                  </div>
                  <div className="about-content-contact">
                    <h4>Contact</h4>
                    <div className="name about-contact">
                      <i className="bx bx-user"></i>
                      <p>Okoronkwo Chibueze</p>
                    </div>
                    <div className="phone about-contact">
                      <i className="bx bx-phone-call"></i>
                      <p>+234 810 916 9579</p>
                    </div>
                    <div className="email about-contact">
                      <i className="bx bx-mail-send"></i>
                      <p>ricobuez@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="techs mt-5">
                  <h1>Technologies I'm familiar with</h1>
                  <div className="techs-slide"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="about-section"></div>
        </div>
      </section>
    </div>
  );
}
