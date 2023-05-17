import React, { useEffect, useState, SetStateAction } from "react";
import classnames from "classnames";
import { Navigate, useNavigate, Link, redirect } from "react-router-dom";
import { triggerAsyncId } from "async_hooks";

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

const BtnFinalizar = () => {
  const HandleOnClick = () => {
    let txData: any = {
      type: 16,
      data: {
        dApp: "3NC3ZeZYDpDR72ngL6CoC19ygSD9uGBW3fX",
        call: {
          function: "verificarVencedor",
          args: [
            {
              type: "list",
              value: [
                {
                  type: "integer",
                  value: 1,
                },
                {
                  type: "integer",
                  value: 3,
                },
                {
                  type: "integer",
                  value: 1,
                },
                {
                  type: "integer",
                  value: -4,
                },
              ],
            },
            {
              type: "integer",
              value: 0,
            },
          ],
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
