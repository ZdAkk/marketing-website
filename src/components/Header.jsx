import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [navButtonVisible, setNavButtonVisible] = useState(
    window.innerWidth <= 550
  );
  const [navButtonToggled, setNavButtonToggled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 550 && !navButtonVisible) {
        setNavButtonVisible(true);
      } else if (window.innerWidth >= 550 && navButtonVisible) {
        setNavButtonVisible(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navButtonVisible]);

  function toggleNavMenu() {
    setNavButtonToggled((oldState) => !oldState);
  }

  return (
    <header
      className={`header ${
        location.pathname === "/" ? "header-main" : ""
      } main-grid`}
    >
      <div className="header-content">
        <Link className="nav-logo-link" to="/">
          <img className="nav-logo" src={logo} alt="Jake and Elwood"></img>
        </Link>
        {navButtonVisible && (
          <button className="nav-button-open" onClick={toggleNavMenu}>
            {"\u2261"}
          </button>
        )}
        <nav
          className={`header-nav ${navButtonToggled ? "header-nav-open" : ""}`}
        >
          {navButtonVisible && (
            <button className="nav-button-close" onClick={toggleNavMenu}>
              {"\u00D7"}
            </button>
          )}
          <NavLink
            to="."
            end
            onClick={() => setNavButtonToggled(false)}
            className={({ isActive }) => {
              return isActive ? "active-link nav-item" : "nav-item";
            }}
          >
            home
          </NavLink>
          <NavLink
            to="about"
            onClick={() => setNavButtonToggled(false)}
            className={({ isActive }) => {
              return isActive ? "active-link nav-item" : "nav-item";
            }}
          >
            about us
          </NavLink>
          <NavLink
            to="contact"
            onClick={() => setNavButtonToggled(false)}
            className={({ isActive }) => {
              return isActive ? "active-link nav-item" : "nav-item";
            }}
          >
            contact us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
