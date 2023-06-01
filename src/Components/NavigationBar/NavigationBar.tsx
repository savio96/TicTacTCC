import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./navigationbar.module.scss";
import classnames from "classnames";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import { PopUPDeposit } from "../PopUPDeposit/PopUPDeposit";

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
                <PopUPDeposit></PopUPDeposit>
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
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Como Jogar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resgates
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="nav-link" to="/resgateNFT">
                      Resgate seu NFT
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link className="nav-link" to="/resgateToken">
                      Resgate seu Token
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/inventario">
                  Inventário
                </Link>
              </li>
            </ul>
            <ConnectWallet></ConnectWallet>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export { NavigationBar };
