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
  // const [view, setView] = useState(false);
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
      {/* <Particles
        id="particles"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          config_demo: {
            hide_card: false,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
          },
        }}
      /> */}

      {/* <div className={`${view ? "d-none" : ""} mode container`}>
        <img src="/images/pp.png" alt="" />
        <h2 className="mode-title"></h2>
        <div className="images">
          <div className="mode-img">
            <h5>Light Mode</h5>
            <img
              className="mode-img"
              src="/images/light-mode.png"
              alt=""
              onClick={() => setView(!view)}
            />
          </div>
          <div className="mode-img">
            <h5>Dark Mode</h5>
            <img
              className="mode-img"
              src="/images/dark-mode.png"
              alt=""
              onClick={darkMode}
            />
          </div>
        </div>
      </div> */}
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

          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>

          <script
            src="https://cdn.jsdelivr.net/npm/tsparticles@1.9.2/dist/tsparticles.min.js"
            integrity="sha256-5kED68Spy7K2CEbfu4CjV92DmZR5ZQFUoIR5qmPzZWg="
            crossorigin="anonymous"
          ></script>
        </Head>

        <div className="top-info " id="home">
          <CrispWithNoSSR />
          {/* <div className="phone contact-info">
            <i className="bx bx-phone-call bx-tada-hover"></i>
            <p>08109169579</p>
          </div>
          <div className="email contact-info ">
            <i className="bx bx-mail-send bx-tada-hover"></i>
            <p>ricobuez@gmail.com</p>
          </div> */}
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
            <div className="text ">
              <h2 className="mb-2 bx-tada text-center">👋</h2>
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
              <img
                src={`/images/new.webp`}
                className="img-fluid profile-pic"
                alt=""
              />
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
                        Hey!, My name is Chibueze, and I'm a web developer with
                        a passion for front end development.
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
                        Bring your Ideas to reality. I make cool and awesome
                        websites.
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
                <img src="/images/simdi.png" alt="" />
                <div className="caption">
                  <p className="title">Simdi's Portfolio</p>
                  <a href="https://simdi.netlify.app" className="link">
                    click to view live
                  </a>
                </div>
              </div>
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

        <section className="contact mt-5" id="contact">
          <div className="container inner">
            <h1 className="mb-3 mt-5">Get In Touch</h1>
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
