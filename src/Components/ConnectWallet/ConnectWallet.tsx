import React, { useState, useEffect, createContext, useContext } from "react";
import styles from "./connectwallet.module.scss";
import classnames from "classnames";
import { UserProvider, UserContext } from "../UserInfo/UserInfo";
import { Signer } from "@waves/signer";
import { ProviderKeeper, isKeeperInstalled } from "@waves/provider-keeper";

const ConnectWallet = () => {
  let { wallet, changeWallet, publicKey, changePublicKey } =
    useContext(UserContext);

  const HandleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isInstalled = await isKeeperInstalled();
    const signer = new Signer({
      // Specify URL of the node on Testnet
      NODE_URL: "https://nodes-testnet.wavesnodes.com",
    });
    const keeper = new ProviderKeeper();
    signer.setProvider(keeper);
    const user = await signer.login();
    console.log(user["address"]);
    console.log(user["publicKey"]);
    if (isInstalled) {
      console.log("Connected");
    }
    let getBalance = "";
    let balance = `https://nodes-testnet.wavesnodes.com/addresses/balance/${wallet}`;

    let valor = wallet == user["address"] ? "Conectar" : user["address"];
    let valorPublicKey =
      publicKey == user["publicKey"] ? "" : user["publicKey"];
    changeWallet(valor);
    changePublicKey(valorPublicKey);
  };
  return (
    <>
      <button
        className={classnames(styles["btn-wallet"], "btn", "btn-primary")}
        onClick={HandleOnClick}
      >
        {wallet}
      </button>
      <div>{publicKey}</div>
    </>
  );
};

export { ConnectWallet };
