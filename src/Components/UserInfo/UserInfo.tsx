import React, { Component, useState, createContext } from "react";

import { Teste } from "../../Pages/Teste/Teste";

interface IUserProps {
  wallet: string;
  changeWallet: Function;
  publicKey: string;
  changePublicKey: Function;
}

type UserProviderProps = {
  children: React.ReactNode;
};

const defaultState = {
  wallet: "Conectar",
  changeWallet: () => {},
  publicKey: "",
  changePublicKey: () => {},
};

const UserContext = React.createContext<IUserProps>(defaultState);
const UserProvider = (props: UserProviderProps) => {
  const [wallet, setWallet] = React.useState(defaultState.wallet);
  const [publicKey, setPublic] = React.useState(defaultState.publicKey);
  const changePublicKey = (key: string) => {
    setPublic(key);
  };
  const changeWallet = (cart: string) => {
    setWallet(cart);
  };

  return (
    <UserContext.Provider
      value={{
        wallet,
        changeWallet,
        publicKey,
        changePublicKey,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
