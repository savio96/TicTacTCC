import React, { useEffect, useState, SetStateAction } from "react";
import classnames from "classnames";
import { Navigate, useNavigate, Link, redirect } from "react-router-dom";
import ConvertJson from "../GameInfos/GameInfos";

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
      <Link
        onClick={HandleOnClick}
        className="nav-link nav-link-teste"
        to="/jogo"
      >
        Resgatar
      </Link>
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

const BtnFinalizar = (
  { BtnToPop }: any,
  { numJog }: any,
  { oponente }: any,
  { solucoes }: any,
  { tabuleiro }: any
) => {
  const [respostaApi, setRespostaApi] = useState(true);
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
  const HandleFinish = () => {
    let jsSolucoes = ConvertJson(ConvertStrArr(solucoes));
    let jsnumJog = { type: "integer", value: { numJog } };
    let jsOponente = { type: "string", value: { oponente } };
    let jsTabuleiro = { type: "string", value: { tabuleiro } };
    let txData: any = {
      type: 16,
      data: {
        dApp: "3NC3ZeZYDpDR72ngL6CoC19ygSD9uGBW3fX",
        call: {
          function: "verificarVencedor",
          args: [{ jsSolucoes }, { jsnumJog }, { jsOponente }, { jsTabuleiro }],
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
