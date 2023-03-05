import React, { Component } from "react";

interface IUserProps {
  wallet: string;
  publicKey?: string;
  conectado: string;
}

class UserInfo implements IUserProps {
  wallet = "";
  publicKey = "";
  conectado = "Conectar";
  getWallet() {
    return this.wallet;
  }
  setWallet(newWallet: string) {
    this.wallet = newWallet;
  }
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
  }
}

export { UserInfo };
