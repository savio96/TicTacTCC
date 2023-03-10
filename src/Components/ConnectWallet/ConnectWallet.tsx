import React, { useState, useEffect, createContext, useContext } from "react";
import styles from "./connectwallet.module.scss";
import classnames from "classnames";
import { UserProvider, UserContext } from "../UserInfo/UserInfo";

const ConnectWallet = () => {
  const { wallet, changeWallet, privateKey, changePrivateKey } =
    useContext(UserContext);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicou");
    let valor = wallet == "3PP" ? "Conectar" : "3PP";
    let valorPriveteKey = privateKey == "111" ? "" : "111";
    changePrivateKey(valorPriveteKey);
    changeWallet(valor);
    console.log(wallet);
  };
  return (
    <>
      <button
        className={classnames(styles["btn-wallet"], "btn", "btn-primary")}
        onClick={handleOnClick}
      >
        {wallet}
      </button>
      <div>{privateKey}</div>
    </>
  );
};

export { ConnectWallet };
