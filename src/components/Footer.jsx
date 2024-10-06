import logo from "../assets/logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer main-grid">
      <div className="footer-main">
        <img className="footer-logo" src={logo} alt="Jake and Elwood" />
        <p className="footer-text">
          etus et malesuada fames ac. Sed cras ornare arcu dui vivamus.
          Elementum integer enim neque volutpat ac tincidunt vitae semper.
        </p>
        <p className="footer-fineprint">©Starman 2024</p>
      </div>
      <ul className="social-links">
        <li className="social-item">
          <a href="#" className="social-link">
            <FaFacebook size="2em" title="Facebook Link" />
          </a>
        </li>
        <li className="social-item">
          <a href="#" className="social-link">
            <FaXTwitter size="2em" title="X Link" />
          </a>
        </li>
        <li className="social-item">
          <a href="#" className="social-link">
            <FaInstagram size="2em" title="Instagram Link" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
