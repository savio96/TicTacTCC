import React from "react";
import styles from "./ResgateSeuNFT.module.scss";
import classnames from "classnames";
import { BtnClaimCoin } from "../../Components/btnDapp/btnDapp";

const ResgateToken = () => {
  return (
    <div className="resgate-container">
      <div className="resgate-token-container">
        <h3>Resgatar Token Tcc</h3>
        <BtnClaimCoin></BtnClaimCoin>
      </div>
      <div className="resgate-waves-container">
        <h3>Resgate Waves</h3>
        <p>
          Para resgatar a waves, você precisa entrar no site da&nbsp;
          <a href="https://wavesexplorer.com/faucet?network=testnet">
            Waves Explorer
          </a>
          &nbsp; e colocar o endereço da carteira no formulário
        </p>
      </div>
    </div>
  );
};
export { ResgateToken };
