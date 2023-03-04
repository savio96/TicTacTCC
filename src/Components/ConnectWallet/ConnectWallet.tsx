import React from "react";
import styles from "./connectwallet.module.scss";
import classnames from "classnames";
const ConnectWallet = () => {
  return (
    <>
      <button className={classnames(styles["btn-wallet"])}>Conectar</button>
    </>
  );
};

export { ConnectWallet };
