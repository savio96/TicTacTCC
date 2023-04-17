import React from 'react'
import classnames from 'classnames'
import styles from "./dAppCriaNFT.module.scss";
import seedrandom from 'seedrandom';


const DAppCriaNFT = () => {  
  
  const DappResgate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    function getRandom(min: 0, max: 99): number {
      const timeSeed = new Date().getTime();
      const rng = seedrandom(timeSeed.toString());

      return Math.floor(rng() * (max - min + 1) + min);
    }
    
    const randomNumber = getRandom(0, 99);
    console.log(randomNumber);

    const isEven = randomNumber % 2 === 0;

    const message = `${isEven ? 'Seu NFT é a Bolinha!' : 'Seu NFT é o Xis!'}`;
    console.log(message);

    const dappAddress = '3N1Qtfgygwf49ZA37QSYgttS65GrhwP2G1K';

    let txData: any = {
      type: 16,
      data: {
        dApp: dappAddress,
        call: {
          function: "mintNFT",
          args:[{"type": "string", "value": `${isEven ? 'bolinha-jogo-da-velha-nft-prêmio-7912380' : 'xis-jogo-da-velha-nft-prêmio-7912426'}`}]
        },
        payment: [
          {
            assetId: "WAVES",
            tokens: 0.1,
          }

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
    <div>
      <button className={classnames(styles["btn-nft"], "btn", "btn-primary")} onClick={DappResgate}>Resgatar!</button>

      <span><br />{}</span>
    </div>
  );
};
export {DAppCriaNFT};
