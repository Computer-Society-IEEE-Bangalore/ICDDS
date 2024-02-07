import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
        <a class="navbar-brand" href="/">ICDDS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                  <a className="nav-link" href="/" style={{ color: "white" }}>
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    Committee
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Technical Program Committee
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/organizing_committee">
                        Organizing Committee
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    Call For Papers
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="foundational_research">
                        Foundational Research
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="systems_research">
                        Systems Research
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="applications">
                        Applications
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="author_guidelines">
                        Author's Guidelines
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Schedule
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    Workshops
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Girl Geeks Hack 2024
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Smart City Workshop
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CS Student Congress
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Speakers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Venue
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    Archives
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        2023
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        2022
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="registrations" style={{ color: "white" }}>
                    Registration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
