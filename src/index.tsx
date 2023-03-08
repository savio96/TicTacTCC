import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/main.scss";
import { UserProvider } from "./Components/UserInfo/UserInfo";
import { RoutesUrl } from "./Components/Router/Router";
import { Header } from "../src/Components/Header/Header";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <RoutesUrl></RoutesUrl>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
