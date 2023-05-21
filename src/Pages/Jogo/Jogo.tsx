import React from "react";
import { GameUnity } from "../../Components/GameUnity/GameUnity";
import { MatchProvider } from "../../Components/MatchInfo/MatchInfo";
const Jogo = () => {
  return (
    <div>
      <MatchProvider>
        <GameUnity></GameUnity>
      </MatchProvider>
    </div>
  );
};

export { Jogo };
