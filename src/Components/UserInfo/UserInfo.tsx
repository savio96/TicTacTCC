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
  balanceTCC: number;
  changeBalanceTCC: Function;
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
  balanceTCC: 0,
  changeBalanceTCC: () => {},
};

const UserContext = React.createContext<IUserProps>(defaultState);
const UserProvider = (props: UserProviderProps) => {
  const [wallet, setWallet] = React.useState(defaultState.wallet);
  const [publicKey, setPublic] = React.useState(defaultState.publicKey);
  const [status, setStatus] = React.useState(defaultState.status);
  const [balance, setBalance] = React.useState(defaultState.balance);
  const [balanceTCC, setBalanceTCC] = React.useState(defaultState.balanceTCC);

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
  const changeBalanceTCC = (val: number) => {
    if (val !== 0) {
      setBalanceTCC(val);
    }
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
        balanceTCC,
        changeBalanceTCC,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
