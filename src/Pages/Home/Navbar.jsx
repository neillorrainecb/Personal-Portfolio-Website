import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        //eslint-disable-next-line no-unused-expressions
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
        //eslint-disable-next-line no-unused-expressions
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar--logo">
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutMe"
              className="navbar--content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="experience"
              className="navbar--content"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="portfolio"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to=""
              className="navbar--content"
            >
              Certificate
            </Link>
          </li>
        </ul>
      </div>

      <div className="hero--section--socials">
        <a className="hero--section--socials-link" href="https://www.linkedin.com/in/neillorrainecb/">
          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a className="hero--section--socials-link" href="https://github.com/neillorrainecb">              
          <i class="fa-brands fa-square-github"></i>
        </a>

        <a className="hero--section--socials-link" href="https://www.behance.net/neillorrainecb">
          <i class="fa-brands fa-square-behance"></i>
        </a>  

        <a className="hero--section--socials-link" href='mailto:neillorrainecb@gmail.com'>
          <i class="fa-solid fa-square-envelope"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;