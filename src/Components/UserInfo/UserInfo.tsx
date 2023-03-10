import React, { Component, useState, createContext } from "react";

import { Teste } from "../../Pages/Teste/Teste";

interface IUserProps {
  wallet: string;
  changeWallet: Function;
  privateKey: string;
  changePrivateKey: Function;
}

type UserProviderProps = {
  children: React.ReactNode;
};

const defaultState = {
  wallet: "Conectar",
  changeWallet: () => {},
  privateKey: "",
  changePrivateKey: () => {},
};

const UserContext = React.createContext<IUserProps>(defaultState);
const UserProvider = (props: UserProviderProps) => {
  const [wallet, setWallet] = React.useState(defaultState.wallet);
  const [privateKey, setPrivateKey] = React.useState(defaultState.privateKey);
  const changePrivateKey = (key: string) => {
    setPrivateKey(key);
  };
  const changeWallet = (cart: string) => {
    setWallet(cart);
  };

  return (
    <UserContext.Provider
      value={{
        wallet,
        changeWallet,
        privateKey,
        changePrivateKey,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
