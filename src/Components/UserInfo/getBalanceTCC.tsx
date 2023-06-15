import React, { useContext } from "react";
import { UserContext } from "./UserInfo";
import styles from "./getbalance.module.scss";
import classnames from "classnames";
const GetBalanceTCC = () => {
  let { wallet, changeWallet, balanceTCC, changeBalanceTCC } =
    useContext(UserContext);
  fetch(
    `https://nodes-testnet.wavesnodes.com/assets/balance/${wallet}/BTPiCeAEd4EKkCyyRTjDNw3fymD7Pvor6PQAyVPN32ZS
    `
  )
    .then((res) => res.json())
    .then((res2) => changeBalanceTCC(res2["balance"] / 100));
  //console.log(balanceTCC + "tentando");
  return (
    <>
      <div className={classnames(styles["balanceTCC"])}>TCC: {balanceTCC}</div>
    </>
  );
};

/*
const ShowBalanceTCC = () => {
  GetBalanceTCC();
  return (
    <>
      <div>oi</div>
    </>
  );
};*/

export { GetBalanceTCC };
