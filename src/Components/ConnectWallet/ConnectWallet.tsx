import React, { useContext, useEffect } from "react";
import styles from "./connectwallet.module.scss";
import classnames from "classnames";
import { UserContext } from "../UserInfo/UserInfo";
//import { Signer } from "@waves/signer";
import { /*ProviderKeeper,*/ isKeeperInstalled } from "@waves/provider-keeper";
import { GetBalanceTCC } from "../UserInfo/getBalanceTCC";

const ConnectWallet = () => {
  let {
    status,
    changeStatus,
    wallet,
    changeWallet,
    publicKey,
    changePublicKey,
    balance,
    changeBalance,
    balanceTCC,
  } = useContext(UserContext);

  const HandleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isInstalled = await isKeeperInstalled();
    /*
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
    */
    const authData = { data: "Auth on my site" };
    KeeperWallet.auth(authData).then(async (auth) => {
      console.log(auth);
      changeStatus("Conectado");
      changeWallet(auth["address"]);
      changePublicKey(auth["publicKey"]);
      fetch(
        `https://nodes-testnet.wavesnodes.com/addresses/balance/${auth["address"]}`
      )
        .then((res) => res.json())
        .then((res2) => changeBalance(res2["balance"] / 100000000));
    });

    if (isInstalled) {
      console.log("Connected");
    }
  };

  return (
    <>
      <div className={classnames(styles["wrapper-connect"])}>
        <button
          className={classnames(styles["btn-wallet"], "btn", "btn-primary")}
          onClick={HandleOnClick}
        >
          {status}
        </button>
        <div className={classnames(styles["wallet"])}>{wallet}</div>
        <div className={classnames(styles["balance"])}>Waves : {balance}</div>
      </div>
      {wallet !== "" && <GetBalanceTCC></GetBalanceTCC>}
    </>
  );
};

export { ConnectWallet };
/*
<div className={classnames(styles["balanceTCC"])}>
          TCC: {balanceTCC}
        </div>*/
