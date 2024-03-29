import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav>
      <div className="wrapper">
        <div className="container inner">
          <i
            className={`${
              nav ? "bx bx-x" : "bx bx-menu"
            }  'bx-sm d-md-none menu-btn`}
            onClick={() => setNav(!nav)}
          ></i>
          <a className="navbar-brand text-secondary d-flex align-items-center">
            <Image
              src="/images/nav-pic.ico"
              height={40}
              width={40}
              className="img-fluid bx-tada-hover"
            />
            {/* Buez */}
          </a>

          <div className="mobile-nav" style={{ left: nav ? "0%" : "" }}>
            <ul className="nav ">
              <Link href="#home" onClick={() => setNav(!nav)}>
                <li className="nav-item home-link">
                  <i className="bx bx-home"></i>
                  <a className="nav-link bx-tada-hover">Home</a>
                </li>
              </Link>
              <Link href="#about" onClick={() => setNav(!nav)}>
                <li className="nav-item about-link">
                  <i className="bx bx-user"></i>
                  <a className="nav-link bx-tada-hover">About Me</a>
                </li>
              </Link>

              <Link href="#services" onClick={() => setNav(!nav)}>
                <li className="nav-item services-link">
                  <i className="bx bx-briefcase-alt-2"></i>
                  <a className="nav-link bx-tada-hover">Services</a>
                </li>
              </Link>
              <Link href="#works" onClick={() => setNav(!nav)}>
                <li className="nav-item works-link">
                  <i className="bx bx-git-branch"></i>
                  <a className="nav-link bx-tada-hover">Recent Works</a>
                </li>
              </Link>
              <Link href="#contact" onClick={() => setNav(!nav)}>
                <li className="nav-item contact-link">
                  <i className="bx bx-mail-send"></i>
                  <a className="nav-link bx-tada-hover">Get In Touch</a>
                </li>
              </Link>
              <li className="nav-item close-link">
                <i
                  className="bx bx-x menu-btn"
                  onClick={() => setNav(!nav)}
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
