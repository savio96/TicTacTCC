import React, { Component, useState, createContext } from "react";

import { Teste } from "../../Pages/Teste/Teste";

interface IUserProps {
  wallet: string;
} /*
interface IUserProps {
  wallet: string;
  publicKey?: string;
  conectado: string;
}
*/
class UserInfo implements IUserProps {
  wallet = "";
  //publicKey = "";
  //conectado = "Conectar";
  getWallet() {
    return this.wallet;
  }
  setWallet(newWallet: string) {
    this.wallet = newWallet;
  }
  /*
  getPublicKey() {
    return this.publicKey;
  }
  setPublicKey(newPublicKey: string) {
    this.publicKey = newPublicKey;
  }
  getConectado() {
    return this.conectado;
  }
  setConectado(newConectado: string) {
    this.conectado = newConectado;
  }*/
}

export { UserInfo };
