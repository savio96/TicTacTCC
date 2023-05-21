import React, { useContext, useEffect, useCallback, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./gameunity.module.scss";
import classnames from "classnames";
import { UserContext } from "../UserInfo/UserInfo";
import { PopUPClaim } from "../PopUPClaim/PopUPClaim";

function handleFinish(numJog: any, oponente: any, solArr: any, tabela: any) {
  console.log("Cheguei no handlefinish");
}
function GameUnity() {
  let { wallet, changeWallet } = useContext(UserContext);
  let [terminou, setTerminou] = useState(false);
  let [numJogador, setNumJogador] = useState(-1);
  let [oponente, setOponente] = useState("");
  let [solutions, setSolutions] = useState("");
  let [tabuleiro, setTabuleiro] = useState("");
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    addEventListener,
    removeEventListener,
    sendMessage,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "/assets/jogo/Build/jogohtml.loader.js",
    dataUrl: "/assets/jogo/Build/jogohtml.data",
    frameworkUrl: "/assets/jogo/Build/jogohtml.framework.js",
    codeUrl: "/assets/jogo/Build/jogohtml.wasm",
  });

  const handleEndMatch = useCallback(
    (criador: any, convidado: any, solucoesStr: any, boardStr: any) => {
      //console.log(criador);
      //console.log(convidado);
      //console.log(solucoesArr);
      //console.log(boardArr);
      //console.log("Fim");
      let carteiraCriador = criador.slice(criador.indexOf("-") + 1);
      let carteiraConvidado = convidado.slice(convidado.indexOf("-") + 1);
      //console.log(carteiraCriador, "Criador");
      console.log(carteiraConvidado, "Convidado");
      let chamada =
        carteiraCriador === wallet ? carteiraCriador : carteiraConvidado;
      //console.log(chamada, "Chamada");
      let adversario = chamada === wallet ? carteiraConvidado : carteiraCriador;
      let numJoga = wallet === carteiraCriador ? 0 : 1;
      //console.log(numJoga);
      //let solArr = ConvertStrArr(solucoesStr);
      //console.log(solArr);
      //console.log(boardStr);
      setNumJogador(numJoga);
      setOponente(adversario);
      setSolutions(solucoesStr);
      setTabuleiro(boardStr);
      setTerminou(true);
    },
    []
  );
  useEffect(() => {
    return () => {
      detachAndUnloadImmediate();
    };
  }, [detachAndUnloadImmediate]);

  useEffect(() => {
    addEventListener("endMatch", handleEndMatch);
    return () => {
      removeEventListener("endMatch", handleEndMatch);
    };
  }, [addEventListener, removeEventListener, handleEndMatch]);

  function enviaCarteira() {
    sendMessage("SalaDeEntrada", "getWallet", wallet);
  }
  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);
  enviaCarteira();
  return (
    <div className={classnames(styles["container"])}>
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      {terminou === true &&
        oponente !== "" &&
        (console.log(numJogador),
        console.log(oponente),
        console.log(solutions),
        console.log(tabuleiro),
        (
          <PopUPClaim
            numJog={() => numJogador}
            oponente={() => oponente}
            solucoes={() => solutions}
            tabuleiro={() => tabuleiro}
          ></PopUPClaim>
        ))}
      <Unity
        className={classnames(styles["unity"])}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export { GameUnity };
