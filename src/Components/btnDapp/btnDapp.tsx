import React, { useEffect, useState, SetStateAction, useContext } from "react";
import classnames from "classnames";
import { Navigate, useNavigate, Link, redirect } from "react-router-dom";
import ConvertJson from "../GameInfos/GameInfos";
import { MatchContext } from "../MatchInfo/MatchInfo";
import { Button } from "react-bootstrap";

const BtnClaimCoin = () => {
  const HandleOnClick = () => {
    let txData: any = {
      type: 16,
      data: {
        dApp: "3NC3ZeZYDpDR72ngL6CoC19ygSD9uGBW3fX",
        call: {
          function: "claimToken",
        },
      },
    };

    KeeperWallet.signAndPublishTransaction(txData)
      .then((data) => {
        //data - a line ready for sending to Waves network's node (server)
      })
      .catch((error) => {
        //processing errors
      });
  };
  return (
    <>
      <Button onClick={HandleOnClick}>Resgatar</Button>
    </>
  );
};

const BtnDepositCoin = ({ BtnToPop }: any) => {
  const [respostaApi, setRespostaApi] = useState(true);

  const HandleDeposit = () => {
    let txData: any = {
      type: 16,
      data: {
        dApp: "3NC3ZeZYDpDR72ngL6CoC19ygSD9uGBW3fX",
        call: {
          function: "depositToken",
        },
        payment: [
          {
            assetId: "BTPiCeAEd4EKkCyyRTjDNw3fymD7Pvor6PQAyVPN32ZS",
            tokens: 1,
          },
        ],
      },
    };

    KeeperWallet.signAndPublishTransaction(txData)
      .then((data) => {
        setRespostaApi(false);
        BtnToPop(respostaApi);

        console.log(respostaApi);
      })

      .catch((error) => {
        //processing errors
      });
  };
  const HandleOnClick = () => {
    HandleDeposit();
  };

  return (
    <>
      <button
        onClick={HandleOnClick}
        className={classnames("btn", "btn-primary")}
      >
        Depositar moeda!
      </button>
    </>
  );
};

const BtnFinalizar = ({ BtnToPop }: any) => {
  let {
    numJog,
    changeNumJog,
    oponente,
    changeOponente,
    solucoes,
    changeSolucoes,
    tabuleiro,
    changeTabuleiro,
  } = useContext(MatchContext);
  const [respostaApi, setRespostaApi] = useState(true);
  function ConvertStrArr(linha: string) {
    let aux = linha.split(";");

    let vet: number[] = [];
    aux.forEach((element) => {
      vet.push(parseInt(element));
    });
    vet.pop();
    return vet;
  }
  const HandleFinish = () => {
    let sol = ConvertStrArr(solucoes);
    let jsSolucoes = ConvertJson(sol);
    let jsnumJog = { type: "integer", value: numJog };
    let jsOponente = { type: "string", value: oponente };
    let jsTabuleiro = { type: "string", value: tabuleiro };
    console.log("cheguei no handlefinish");
    console.log(jsSolucoes);
    console.log(jsnumJog);
    console.log(jsOponente);
    console.log(jsTabuleiro);
    let txData: any = {
      type: 16,
      data: {
        dApp: "3NC3ZeZYDpDR72ngL6CoC19ygSD9uGBW3fX",
        call: {
          function: "verificarVencedor",
          args: [jsSolucoes, jsnumJog, jsOponente, jsTabuleiro],
        },
      },
    };
    KeeperWallet.signAndPublishTransaction(txData)
      .then((data) => {
        setRespostaApi(false);
        BtnToPop(respostaApi);

        console.log(respostaApi);
      })
      .catch((error) => {
        //processing errors
      });
  };

  const HandleOnClick = () => {
    HandleFinish();
  };

  return (
    <>
      <button
        onClick={HandleOnClick}
        className={classnames("btn", "btn-primary")}
      >
        Finalizar
      </button>
    </>
  );
};

export { BtnClaimCoin, BtnDepositCoin, BtnFinalizar };
