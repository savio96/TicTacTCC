import React, { Component, useState } from "react";

const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_WALLET":
      return { ...state, wallet: action.payload };
    default:
      return state;
  }
};

export { Reducer };
