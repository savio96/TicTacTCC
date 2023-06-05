import React from "react";
import styles from "./resgatetoken.module.scss";
import classnames from "classnames";
import { BtnClaimCoin } from "../../Components/btnDapp/btnDapp";

const ResgateToken = () => {
  return (
    <div className={styles["resgate-container"]}>
      <div className={styles["resgate-token-container"]}>
        <h3>Resgatar Token Tcc</h3>
        <BtnClaimCoin></BtnClaimCoin>
      </div>
      <div className={styles["resgate-waves-container"]}>
        <h3>Resgatar Waves</h3>
        <p>
          Para resgatar as Waves, você precisa entrar no site da&nbsp;
          <a
            href="https://wavesexplorer.com/faucet?network=testnet"
            target="_blank"
          >
            Waves Explorer
          </a>
          &nbsp; e colocar o endereço da carteira no formulário.
        </p>
      </div>
    </div>
  );
};
export { ResgateToken };
