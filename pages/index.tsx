import Head from "next/head";
import React, { useEffect } from "react";
import { gsap, TimelineLite, Bounce } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Navbar from "../components/Navbar";
import TechSlideComp from "../components/TechSlideComp";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  useEffect(() => {
    const tl = new TimelineLite();
    tl.from(
      ".name-title",
      {
        duration: 2,
        ease: Bounce.easeOut,
        y: -100,
        opacity: 0,
        delay: 1,
      },
      ""
    );
    tl.from(
      ".profile-pic",
      {
        duration: 2,
        ease: Bounce.easeOut,
        y: -100,
        opacity: 0,
        delay: 1,
      },
      ""
    );
    tl.from(
      ".btn-contact",
      {
        duration: 3,
        ease: "elastic.out",
        x: -100,
        opacity: 0,
        delay: 2,
      },
      ""
    );

    gsap.to(".about-title", {
      duration: 3,
      text: "And I'm a Frontend Web Developer",
      ease: "none",
      delimiter: "",
      delay: 3,
    });
  }, []);
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
            <h1 className="mb-2 name-title">
              I am <span className="styled-title">Chibueze</span>.
            </h1>
            <h4 className="mb-3 about-title"></h4>
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
            <img
              src="/images/header-pic3.png"
              className="img-fluid profile-pic"
              alt=""
            />
          </div>
        </div>
      </header>

      <section className="about">
        <div className="wrapper">
          <div className="container inner">
            <div className="about-section">
              <h1 className="mb-3">Get To Know Me</h1>

              <div className="about-content-wrapper">
                <div className="about-content">
                  <div className="about-content-desc">
                    <div className="desc-slide"></div>
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
                    <div className="contact-slide"></div>
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
                  <h1 className="mb-3">Technologies I'm familiar with</h1>
                  <div className="techs-slide">
                    <TechSlideComp />
                  </div>
                </div>

                <div className="services mt-5 mb-3">
                  <h1 className="mb-3">What I offer</h1>
                  <div className="mb-5 service">
                    <i className="bx bx-code-alt"></i>
                    <h4>Frontend Web Development</h4>
                    <p>
                      Bring your Ideas to reality. I make cool and awesome
                      websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="works mb-5 pt-3">
        <div className="container inner">
          <h1 className="mb-5">My Recent Works</h1>
          <div className="works-section">
            <div className="work">
              <img src="/images/portfolio.PNG" alt="" />
              <div className="caption">
                <p className="title">My Portfolio using HTML and CSS</p>
                <a href="https://ricobuez.netlify.app" className="link">
                  click to view live
                </a>
              </div>
            </div>
            <div className="work">
              <img src="/images/ticketty.png" alt="" />
              <div className="caption">
                <p className="title">Ticketty Web App</p>
                {/* <a href="https://www.ricobuez.netlify.app" className="link">
                  click to view live
                </a> */}
              </div>
            </div>
            <div className="work">
              <img src="/images/techcreek.PNG" alt="" />
              <div className="caption">
                <p className="title">Techcreek E-Gaminator </p>
                {/* <a href="https://www.ricobuez.netlify.app" className="link">
                  click to view live
                </a> */}
              </div>
            </div>
            <div className="work">
              <img src="/images/mindspire.png" alt="" />
              <div className="caption">
                <p className="title">Mindspire</p>
                <a href="https://mindspire.netlify.app" className="link">
                  click to view live
                </a>
              </div>
            </div>
            <div className="work">
              <img src="/images/iamjane.png" alt="" />
              <div className="caption">
                <p className="title">I am Jane Model Portfolio</p>
                {/* <a href="https://www.ricobuez.netlify.app" className="link">
                  click to view live
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact mt-5">
        <div className="container inner">
          <h1 className="mb-3">Get In Touch</h1>
          <div className="contact-section">
            <div className="question">
              <h2>Do you have a project in mind</h2>
              <i className="bx bx-question-mark"></i>
            </div>
            <form>
              <div className="form">
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+123 456 789 1023"
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    rows={Number(5)}
                    className="form-control"
                    placeholder="type your message here"
                  ></textarea>
                </div>

                <div className="send-btn">
                  <button className="btn btn-dark rounded">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container inner">
          <div className="footer-info">
            <img src="/images/pp.png" alt="" />

            <div className="footer-contact">
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
          </div>

          <p className="copyright">Copyright @ 2021 Okoronkwo Chibueze</p>
        </div>
      </footer>
    </div>
  );
}
