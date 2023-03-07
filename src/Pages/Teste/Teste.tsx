import React, { Component, useState } from "react";
import { ConnectWallet } from "../../Components/ConnectWallet/ConnectWallet";
import { AuthWalletContext, Gravar } from "../../Context/Auth";
import { Home } from "../Home/Home";

const Teste = () => {
  return (
    <>
      <Gravar>
        <Home></Home>
      </Gravar>
    </>
  );
};

export { Teste };
