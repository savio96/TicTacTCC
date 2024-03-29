import React, { createContext } from "react";

interface IMatchProps {
  numJog: number;
  changeNumJog: Function;
  oponente: string;
  changeOponente: Function;
  solucoes: string;
  changeSolucoes: Function;
  tabuleiro: string;
  changeTabuleiro: Function;
  empate: number;
  changeEmpate: Function;
}

type UserProviderProps = {
  children: React.ReactNode;
};

const defaultState = {
  numJog: -1,
  changeNumJog: () => {},
  oponente: "",
  changeOponente: () => {},
  solucoes: "",
  changeSolucoes: () => {},
  tabuleiro: "",
  changeTabuleiro: () => {},
  empate: 0,
  changeEmpate: () => {},
};

const MatchContext = React.createContext<IMatchProps>(defaultState);

const MatchProvider = (props: UserProviderProps) => {
  const [numJog, setNumJogador] = React.useState(defaultState.numJog);
  const [oponente, setOponente] = React.useState(defaultState.oponente);
  const [solucoes, setSolutions] = React.useState(defaultState.solucoes);
  const [tabuleiro, setTabuleiro] = React.useState(defaultState.tabuleiro);
  const [empate, setEmpate] = React.useState(defaultState.empate);

  const changeNumJog = (key: number) => {
    setNumJogador(key);
  };
  const changeOponente = (op: string) => {
    setOponente(op);
  };
  const changeSolucoes = (sol: string) => {
    setSolutions(sol);
  };
  const changeTabuleiro = (val: string) => {
    setTabuleiro(val);
  };
  const changeEmpate = (key: number) => {
    setEmpate(key);
  };
  return (
    <MatchContext.Provider
      value={{
        numJog,
        changeNumJog,
        oponente,
        changeOponente,
        solucoes,
        changeSolucoes,
        tabuleiro,
        changeTabuleiro,
        empate,
        changeEmpate,
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export { MatchProvider, MatchContext };
