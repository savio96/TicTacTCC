import React from "react";
import styles from "./home.module.scss";
import { ConnectWallet } from "../../Components/ConnectWallet/ConnectWallet";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <h3>Projeto Final sobre Blockchain e NFT</h3>
      <p>
        Esse é um projeto de graduação da Universidade Federal Fluminense feito
        por Leonardo Moreira Fernandes e Savio Carvalho Moraes sobre jogo da
        velha utilizando tokens e salvando as informações na blockchain e a
        criação de NFT na rede da Waves.
      </p>
    </div>
  );
};

export { Home };
