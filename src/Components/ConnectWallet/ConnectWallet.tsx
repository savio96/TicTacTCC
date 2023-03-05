import React, { useState, useEffect } from "react";
import styles from "./connectwallet.module.scss";
import classnames from "classnames";
import { UserInfo } from "../UserInfo/UserInfo";

const ConnectWallet = () => {
  const usuario = new UserInfo();
  const [login, setLogin] = useState(usuario);
  const HandleEventConnect = () => {
    /*
    setLogin((previousState) => {
      usuario=set
      return{...previousState,usuario.setWallet("3Pxxx")}
    });*/
    usuario.setConectado("Conectado");
    //console.log(usuario.conectado);
    //setLogin(usuario);
    useEffect(() => {
      setLogin(() => usuario);
    }, [usuario]);
  };
  return (
    <>
      <button
        className={classnames(styles["btn-wallet"])}
        onClick={HandleEventConnect}
      >
        {login.conectado}
      </button>
    </>
  );
};

export { ConnectWallet };
