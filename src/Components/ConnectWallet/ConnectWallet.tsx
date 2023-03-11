import React, { useState, useEffect, createContext, useContext } from "react";
import styles from "./connectwallet.module.scss";
import classnames from "classnames";
import { UserProvider, UserContext } from "../UserInfo/UserInfo";
import { Signer } from "@waves/signer";
import { ProviderKeeper, isKeeperInstalled } from "@waves/provider-keeper";
import { consoleLoggerLevel } from "vtex/lib/api/logger";

const ConnectWallet = () => {
  const { wallet, changeWallet, privateKey, changePrivateKey } =
    useContext(UserContext);

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const authData = { data: "Auth on my site" };
    KeeperWallet.auth(authData)
      .then((auth) => {
        console.log(auth); //displaying the result on the console
        /*...processing data */
      })
      .catch((error) => {
        console.error(error); // displaying the result on the console
        /*...processing errors */
      }); /*
    const isInstalled = await isKeeperInstalled();
    const signer = new Signer({
      // Specify URL of the node on Testnet
      NODE_URL: "https://nodes-testnet.wavesnodes.com",
    });
    const keeper = new ProviderKeeper();
    signer.setProvider(keeper);
    const user = await signer.login();
    console.log(user["address"]);
    if (isInstalled) {
      console.log("Connected");
    }
    
    let balance =
      await `https://nodes-testnet.wavesnodes.com/addresses/balance/${wallet}`;*/
    let valor = wallet == wallet ? "Conectar" : wallet;
    let valorPriveteKey = privateKey == "111" ? "" : "111";
    changePrivateKey(valorPriveteKey);
    changeWallet(valor);
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
