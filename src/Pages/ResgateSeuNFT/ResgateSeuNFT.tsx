import React from "react";
import styles from "./ResgateSeuNFT.module.scss";
import classnames from "classnames";

import { DAppCriaNFT } from "../../Components/dAppCriaNFT/dAppCriaNFT";

const ResgateSeuNFT = () => {
  return (
    <div className={styles["resgate-nft-container"]}>
      <h3>Resgatar NFT</h3>
      <p>Tem 50% de chance de conseguir um NFT X ou O por 0.1 WAVES.</p>
      <DAppCriaNFT></DAppCriaNFT>
    </div>
  );
};
export { ResgateSeuNFT };
