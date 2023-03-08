import React, { Component, useState, createContext } from "react";

import { Teste } from "../../Pages/Teste/Teste";

interface IUserProps {
  wallet: string;
  changeWallet: Function;
}

type UserProviderProps = {
  children: React.ReactNode;
};

const defaultState = {
  wallet: "Conectar",
  changeWallet: () => {},
};

const UserContext = React.createContext<IUserProps>(defaultState);
const UserProvider = (props: UserProviderProps) => {
  const [wallet, setWallet] = React.useState(defaultState.wallet);
  const changeWallet = (cart: string) => {
    setWallet(cart);
  };

  return (
    <UserContext.Provider
      value={{
        wallet,
        changeWallet,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
