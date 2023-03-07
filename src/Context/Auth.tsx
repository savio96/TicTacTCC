import React, { useState, useEffect, createContext, useReducer } from "react";
import { UserInfo } from "../Components/UserInfo/UserInfo";
import { Reducer } from "../Context/Reducer";

let usuario = new UserInfo();

const Gravar = ({ wallet }: UserInfo) => {
  const [state, dispatch] = useReducer(Reducer, usuario);
  return (
    <AuthWalletContext.Provider
      value={[state, dispatch] as unknown as UserInfo}
    >
      {wallet}
    </AuthWalletContext.Provider>
  );
};
export const AuthWalletContext = createContext(usuario);
export default Gravar;
