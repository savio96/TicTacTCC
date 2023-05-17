import React, { useContext, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./gameunity.module.scss";
import classnames from "classnames";
import { UserContext } from "../UserInfo/UserInfo";
import { PopUPClaim } from "../PopUPClaim/PopUPClaim";

function ConvertStrArr(linha: string) {
  let aux = linha.split(";");
  console.log("aux:Split", aux);
  let vet: number[] = [];
  aux.forEach((element) => {
    vet.push(parseInt(element));
  });
  vet.pop();
  return vet;
}
function GameUnity() {
  let { wallet, changeWallet } = useContext(UserContext);

  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    addEventListener,
    removeEventListener,
    sendMessage,
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
      console.log("Fim");
      let carteiraCriador = criador.slice(criador.indexOf("-") + 1);
      let carteiraConvidado = convidado.slice(convidado.indexOf("-") + 1);
      console.log(carteiraCriador, "Criador");
      console.log(carteiraConvidado, "Convidado");
      let chamada =
        carteiraCriador === wallet ? carteiraCriador : carteiraConvidado;
      console.log(chamada, "Chamada");
      let numJogo = wallet === carteiraCriador ? 0 : 1;
      console.log(numJogo);
      let solArr = ConvertStrArr(solucoesStr);
      console.log(solArr);
      console.log(boardStr);
    },
    []
  );

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
      <Unity
        className={classnames(styles["unity"])}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export { GameUnity };
