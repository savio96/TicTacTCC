import React from "react";
import classnames from "classnames";

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
      <button
        onClick={HandleOnClick}
        className={classnames("btn", "btn-primary")}
      >
        Resgatar moeda!
      </button>
    </>
  );
};

const BtnDepositCoin = () => {
  const HandleOnClick = () => {
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
                  value: 2,
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
