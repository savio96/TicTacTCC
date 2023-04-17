import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import { Teste } from "../../Pages/Teste/Teste";
import { TutorialWallet } from "../../Pages/TutorialWallet/TutorialWallet";
import { Jogo } from "../../Pages/Jogo/Jogo";
import { ResgateSeuNFT } from "../../Pages/ResgateSeuNFT/ResgateSeuNFT";
import { Inventario } from "../../Pages/Inventario/Inventario";

const RoutesUrl = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/teste" element={<Teste />}></Route>
      <Route path="/tutorial-carteira" element={<TutorialWallet />}></Route>
      <Route path="/jogo" element={<Jogo />}></Route>
      <Route path="/resgate" element={<ResgateSeuNFT />}></Route>
      <Route path="/inventario" element={<Inventario />}></Route>
    </Routes>
  );
};

export { RoutesUrl };
