import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="container inner">
        <a className="navbar-brand text-secondary d-flex align-items-center">
          <Image
            src="/images/logo.ico"
            height={20}
            width={20}
            className="img-fluid bx-tada-hover"
          />
          Buez
        </a>

        <i className="bx bx-menu bx-tada-hover bx-sm d-md-none"></i>

        <div className="d-none d-md-flex">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link bx-tada-hover">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bx-tada-hover">About Me</a>
            </li>

            <li className="nav-item">
              <a className="nav-link bx-tada-hover">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bx-tada-hover">Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bx-tada-hover">Get In Touch</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
