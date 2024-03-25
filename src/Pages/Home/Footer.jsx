import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content"> © 2024. Created by Neil Lorraine Bundoc</p>
        <div className="footer--social--icon">
          <a className="footer--section--socials-link" href="https://www.linkedin.com/in/neillorrainecb/">
            <i class="fa-brands fa-linkedin"></i>
          </a>

          <a className="footer--section--socials-link" href="https://github.com/neillorrainecb">              
            <i class="fa-brands fa-square-github"></i>
          </a>

          <a className="footer--section--socials-link" href="https://www.behance.net/neillorrainecb">
            <i class="fa-brands fa-square-behance"></i>
          </a>  

          <a className="footer--section--socials-link" href='mailto:neillorrainecb@gmail.com'>
            <i class="fa-solid fa-square-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;