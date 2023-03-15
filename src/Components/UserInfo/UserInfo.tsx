import React, { createContext } from "react";

interface IUserProps {
  status: string;
  changeStatus: Function;
  wallet: string;
  changeWallet: Function;
  publicKey: string;
  changePublicKey: Function;
  balance: number;
  changeBalance: Function;
}

type UserProviderProps = {
  children: React.ReactNode;
};

const defaultState = {
  status: "Conectar",
  changeStatus: () => {},
  wallet: "",
  changeWallet: () => {},
  publicKey: "",
  changePublicKey: () => {},
  balance: 0,
  changeBalance: () => {},
};

const UserContext = React.createContext<IUserProps>(defaultState);
const UserProvider = (props: UserProviderProps) => {
  const [wallet, setWallet] = React.useState(defaultState.wallet);
  const [publicKey, setPublic] = React.useState(defaultState.publicKey);
  const [status, setStatus] = React.useState(defaultState.status);
  const [balance, setBalance] = React.useState(defaultState.balance);

  const changePublicKey = (key: string) => {
    setPublic(key);
  };
  const changeWallet = (cart: string) => {
    setWallet(cart);
  };
  const changeStatus = (conec: string) => {
    setStatus(conec);
  };
  const changeBalance = (val: number) => {
    setBalance(val);
  };

  return (
    <UserContext.Provider
      value={{
        wallet,
        changeWallet,
        publicKey,
        changePublicKey,
        status,
        changeStatus,
        balance,
        changeBalance,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
