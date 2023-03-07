import React, { useState, useEffect, createContext } from "react";
import styles from "./connectwallet.module.scss";
import classnames from "classnames";
import { UserInfo } from "../UserInfo/UserInfo";
import { AuthWalletContext } from "../../Context/Auth";

const ConnectWallet = () => {
  const SetWallet = (props) => {
    const [state, dispatch] = useState(AuthWalletContext);
    const currentWal = "3PP";
    useEffect(() => {
      if (currentWal) {
        dispatch({ type: "UPDATE_WALLET", currentWal });
      }
    });
  };

  const HandleEventConnect = () => {
    //login.setConectado("Conectado");
    //console.log(login.conectado);
    //setLogin();
  };
  return (
    <>
      <button
        className={classnames(styles["btn-wallet"])}
        onClick={HandleEventConnect}
      >
        {login.conectado}
      </button>
    </>
  );
};

export { ConnectWallet };
