import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./navigationbar.module.scss";
import classnames from "classnames";
const NavigationBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link
            className={classnames("nav-link", styles["nav-link-home"])}
            to="/"
          >
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

              <li className="nav-item">
                <Link className="nav-link nav-link-teste" to="/teste">
                  Teste
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/jogo">
                  Jogo
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tutorial
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className={classnames(
                        "dropdown-item",
                        styles["nav-link-tutorialWallet"]
                      )}
                      to="/tutorial-carteira"
                    >
                      Como criar carteira
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/resgate">
                  Resgate seu NFT
                </Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export { NavigationBar };
