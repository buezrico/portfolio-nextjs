import Head from "next/head";
import React, { useEffect, useState } from "react";
import { gsap, TimelineLite } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Navbar from "../components/Navbar";
import TechSlideComp from "../components/TechSlideComp";
import { Anchor } from "antd";
import dynamic from "next/dynamic";
// import Particles from "react-particles-js";

const CrispWithNoSSR = dynamic(() => import("../components/Crisp"), {
  ssr: false,
});

gsap.registerPlugin(TextPlugin);

export default function Home() {
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  const [dark, setDark] = useState(false);
  const { Link } = Anchor;

  const darkMode = () => {
    // setView(!view),
    setDark(!dark);
  };
  useEffect(() => {
    const tl = new TimelineLite();

    tl.from(
      ".name-title",
      {
        duration: 2,
        ease: "elastic.out",
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
        ease: "elastic.out",
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

    tl.from(
      ".images",
      {
        duration: 3,
        ease: "elastic.out",
        y: 150,
        opacity: 0,
      },
      ""
    );

    gsap.to(".about-title", {
      duration: 3,
      text: "And I might be the developer you're looking for &#128521;",
      ease: "none",
      delimiter: "",
      delay: 3,
    });
    gsap.to(".mode-title", {
      duration: 3,
      text: "Select a Mode to preview.",
      ease: "none",
      delimiter: "",
    });
  }, []);
  return (
    <div className="overall">
      <div
        className={`${dark ? "dark-mode" : ""} 
        portfolio`}
      >
        {/* ${view ? "" : "d-none" }  */}

        <Head>
          <title>Chibueze's Portfolio</title>
          <meta name="description" content="Chibueze Rico's Portfolio" />
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

        <div className="top-info " id="home">
          <CrispWithNoSSR />
          <div className="contact-details">
            <div className="phone contact-info">
              <i className="bx bx-phone-call bx-tada-hover"></i>
              <p>08109169579</p>
            </div>
            <div className="email contact-info ">
              <i className="bx bx-mail-send bx-tada-hover"></i>
              <p>ricobuez@gmail.com</p>
            </div>
          </div>
          <div className="social">
            <a href="https://github.com/buezrico">
              <i className="bx bxl-github bx-tada-hover bg-dark"></i>
            </a>
            <a href="https://wa.link/londw4">
              <i className="bx bxl-whatsapp bx-tada-hover"></i>
            </a>
            <a href="https://wa.link/londw4">
              <i className="bx bxl-linkedin bx-tada-hover bg-secondary"></i>
            </a>
            <a href="https://twitter.com/buez_rico">
              <i className="bx bxl-twitter bx-tada-hover bg-success"></i>
            </a>
            <a href="https://www.instagram.com/buez_rico">
              <i className="bx bxl-instagram bx-tada-hover bg-primary"></i>
            </a>
          </div>
        </div>
        <Navbar />
        <header>
          <div className="content container">
            <i
              className={`bx toggler ${dark ? "bxs-sun" : "bxs-moon"}`}
              onClick={() => setDark(!dark)}
            ></i>
            <div className="text">
              <h2 className="hi">
                Hi
                <p className="mb-2 bx-tada text-center">👋</p>
              </h2>
              <h1 className="mb-2 name-title">
                I'm <span className="styled-title">Buez</span>.
              </h1>
              <h4 className="mb-3 about-title"></h4>
              <div className="btn-contact">
                <button className="btn rounded-0 p-2 px-4">
                  <i className="bx bx-mail-send"></i>
                  <p>
                    <Anchor affix={false} showInkInFixed={false}>
                      <Link href="#contact" title="Get In Touch" />
                    </Anchor>
                  </p>
                </button>
              </div>
              <div className="arrow-down bx-fade-down">
                <i className="bx bxs-chevrons-down"></i>
                <span>
                  <Anchor affix={false} showInkInFixed={false}>
                    <Link href="#about" title="Get To Know Me" />
                  </Anchor>
                </span>
              </div>
            </div>
            <div className="picture">
              <img src={`/images/new.webp`} className="img-fluid" alt="" />
            </div>
          </div>
        </header>

        <section className="about" id="about">
          <div className="wrapper">
            <div className="container inner">
              <div className="about-section">
                <h1 className="mb-3 mt-5">Get To Know Me</h1>

                <div className="about-content-wrapper">
                  <div className="about-content">
                    <div className="about-content-desc">
                      <div className="desc-slide"></div>
                      <h4>About Me</h4>
                      <p>
                        Web Developer | Frontend Enthusiast | Creative Coder.{" "}
                        <br /> Welcome to my portfolio website, where I bring
                        ideas to life through captivating web experiences. I'm a
                        passionate web developer with a love for clean code and
                        intuitive user interfaces. With a background in
                        Front-End Development, I am on a mission to craft
                        exceptional digital solutions that leave a lasting
                        impression.
                      </p>
                      <div className="hire-btn">
                        <button className="btn rounded-0 px-4">
                          <Anchor affix={false} showInkInFixed={false}>
                            <Link href="#contact" title="Hire Me" />
                          </Anchor>
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

                  <div className="services mt-5" id="services">
                    <h1 className="mb-3 mt-5">What I offer</h1>
                    <div className="mb-5 service">
                      <i className="bx bx-code-alt"></i>
                      <h4>Frontend Web Development</h4>
                      <p>
                        Crafting captivating user interfaces with interactive
                        experiences. Expert in responsive design, intuitive UX,
                        and performance optimization. Let's elevate your online
                        presence together! 🌐💡
                      </p>
                    </div>
                  </div>

                  <div className="techs mt-5 mb-3">
                    <h1 className="mb-3">Technologies I'm familiar with</h1>
                    <div className="techs-slide">
                      <TechSlideComp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="works mb-5 pt-3" id="works">
          <div className="container inner">
            <h1 className="mb-5 mt-5">My Recent Works</h1>
            <div className="works-section">
              <div className="work">
                <img src="/images/codeafrica.png" alt="" />
                <div className="caption">
                  <p className="title">Code Africa </p>
                  <a
                    target="_blank"
                    href="https://codeafricang.com"
                    className="link"
                  >
                    click to view live
                  </a>
                </div>
              </div>

              <div className="work">
                <img src="/images/tourafrica.png" alt="" />
                <div className="caption">
                  <p className="title">Tour Africa </p>
                  <a
                    target="_blank"
                    href="https://tourafricang.com"
                    className="link"
                  >
                    click to view live
                  </a>
                </div>
              </div>
              <div className="work">
                <img src="/images/valucares.png" alt="" />
                <div className="caption">
                  <p className="title">Valucares </p>
                  <a
                    target="_blank"
                    href="https://valucares.com"
                    className="link"
                  >
                    click to view live
                  </a>
                </div>
              </div>
              <div className="work">
                <img src="/images/afc.png" alt="" />
                <div className="caption">
                  <p className="title">Awelga Female Connect </p>
                  <a
                    target="_blank"
                    href="https://awelgafemaleconnect.netlify.app"
                    className="link"
                  >
                    click to view live
                  </a>
                </div>
              </div>
              <div className="work">
                <img src="/images/dominionharvest.png" alt="" />
                <div className="caption">
                  <p className="title">Dominion Harvest </p>
                  <a
                    target="_blank"
                    href="https://dominionharvest.org"
                    className="link"
                  >
                    click to view live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact mt-5" id="contact">
          <div className="container inner">
            <h1 className="mb-3 mt-5">Get In Touch</h1>
            <div className="contact-section">
              <div className="question">
                <p>
                  I'm excited to collaborate on meaningful projects and
                  contribute to innovative solutions. Whether you're an
                  employer, fellow developer, or just someone passionate about
                  the web, let's connect and explore the possibilities together!
                </p>
                {/* <i className="bx bx-question-mark"></i> */}
              </div>
              <form>
                <div className="form">
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      className={`form-control ${dark ? "dark" : ""}`}
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className={`form-control ${dark ? "dark" : ""}`}
                      placeholder="example@example.com"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className={`form-control ${dark ? "dark" : ""}`}
                      placeholder="+123 456 789 1023"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      rows="5"
                      className={`form-control ${dark ? "dark" : ""}`}
                      placeholder="type your message here"
                    ></textarea>
                  </div>

                  <div className="send-btn">
                    <button className="btn rounded px-5 py-2">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container inner">
            <div className="footer-info">
              <div className="footer-img">
                <img src="/images/pp.png" alt="" />
              </div>

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
                  <a href="https://github.com/buezrico">
                    <i className="bx bxl-github bx-tada-hover"></i>
                  </a>
                  <a href="https://www.instagram.com/buez_rico">
                    <i className="bx bxl-instagram bx-tada-hover"></i>
                  </a>
                  <a href="https://twitter.com/buez_rico">
                    <i className="bx bxl-twitter bx-tada-hover"></i>
                  </a>
                  <a href="https://wa.link/londw4">
                    <i className="bx bxl-whatsapp bx-tada-hover"></i>
                  </a>
                </div>
              </div>
            </div>

            <p className="copyright">Copyright @ 2021 Okoronkwo Chibueze</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
