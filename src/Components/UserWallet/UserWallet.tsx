import React, { Component } from "react";

interface IUserProps {
  wallet: string;
  publicKey: string;
}

class UserWallet implements IUserProps {
  wallet = "";
  publicKey = "";
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
}

export { UserWallet };
