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

    signer.login().then((data) => {
      changeWallet(data["address"]);
      changePublicKey(data["publicKey"]);
      fetch(
        `https://nodes-testnet.wavesnodes.com/addresses/balance/${data["address"]}`
      )
        .then((res) => res.json())
        .then((res2) => console.log(res2));
    });

    if (isInstalled) {
      console.log("Connected");
    }
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
