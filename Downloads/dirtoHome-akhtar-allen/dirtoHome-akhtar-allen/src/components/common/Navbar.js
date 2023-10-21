import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import sectiondata from "../../store/menu";

const headermenu = [
  { path: "/", title: "Home",},
  { path: "/about-us", title: "About Us",
    dropdown: [
      {

        path: "/contact-us",
        title: "Our Services",
      },
    ],
  },
  { path: "/acupunctures", title: "Acupuncture",},
  { path: "/formulas", title: "Formulas",},
  { path: "/materiamedica", title: "Materia Medica",},
  { path: "/forum", title: "Forum",},
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    function showResNavMenu() {
      this.classList.toggle("active");
    }

    function handleClick(e) {
      for (
        let target = e.target;
        target && target !== document;
        target = target.parentNode
      ) {
        if (target.matches(".side-menu-ul li")) {
          showResNavMenu.call(target, e);
          break;
        }
      }
    }

    document.addEventListener("click", handleClick, false);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="main-menu-content">
        <nav>
          <ul>
            {headermenu.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    {item.title} {item.dropdown ? <FiChevronDown /> : ""}
                  </Link>
                  {item.dropdown ? (
                    <ul className="dropdown-menu-item">
                      {item.dropdown.map((ditem, index2) => {
                        return (
                          <li key={index2}>
                            <Link to={ditem.path}>{ditem.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
      </div>
      <div
        className={navOpen ? "side-nav-container active" : "side-nav-container"}
      >
        <div className="humburger-menu">
          <div
            className="humburger-menu-lines side-menu-close"
            onClick={() => setNavOpen(!navOpen)}
          ></div>
        </div>
        <div className="side-menu-wrap">
          <ul className="side-menu-ul">
            {sectiondata.headermenu.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.path}>{item.title}</Link>{" "}
                  {item.dropdown ? (
                    <span className="la-angle-down">
                      <FiChevronDown />
                    </span>
                  ) : (
                    ""
                  )}
                  {item.dropdown ? (
                    <ul className="dropdown-menu-item">
                      {item.dropdown.map((ditem, di) => {
                        return (
                          <li key={di}>
                            <Link to={ditem.path}>{ditem.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
          <div className="side-nav-button">
            <Link to="/login" className="theme-btn">
              login
            </Link>
            <Link to="/signup" className="theme-btn">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
