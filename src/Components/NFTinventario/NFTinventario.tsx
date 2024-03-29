import React, { useContext, useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./NFTinventario.module.scss";
import { UserContext } from "../UserInfo/UserInfo";

import { /*ProviderKeeper,*/ isKeeperInstalled } from "@waves/provider-keeper";
import onft from "../NFTinventario/assets/images/o_nft.png";
import xnft from "../NFTinventario/assets/images/x_nft.png";

import HTMLReactParser from "html-react-parser";
import { ListFormat } from "typescript";
import ListaDeStrings from "./listanft";

interface IResponse {
  assetId: string;
  decimals: number;
  description: string;
  issueHeight: number;
  issueTimestamp: number;
  issuer: string;
  issuerPublicKey: string;
  minSponsoredAssetFee: string;
  name: string;
  originTransactionId: string;
  quantity: number;
  reissuable: boolean;
  scripted: boolean;
  sequenceInBlock: number;
}

interface INFTCarteira {
  key: string;
  type: string;
  value: string;
}

const NFTinventario: React.FC = () => {
  const [valueNft, setvalueNft] = useState<[]>([]);

  let {
    status,
    changeStatus,
    wallet,
    changeWallet,
    publicKey,
    changePublicKey,
    balance,
    changeBalance,
  } = useContext(UserContext);

  const url = `https://nodes-testnet.wavesnodes.com/assets/nft/${wallet}/limit/10`;
  const url2 = `https://nodes-testnet.wavesnodes.com/addresses/data/3N1Qtfgygwf49ZA37QSYgttS65GrhwP2G1K`;

  async function getAllNfts() {
    const responseList = await fetch(url);
    const responseListData = await responseList.json();

    const emissaoNFT = await fetch(url2);
    const emissaoNFTData = await emissaoNFT.json();

    //console.log(emissaoNFTData);

    const values = responseListData.map((item: IResponse) => {
      const nftCarteira = emissaoNFTData.find(
        (nft: INFTCarteira) => nft.key.replace("_ipfs", "") === item.assetId
      );
      const nftCarteiraName = item.name;
      //console.log(nftCarteira);
      const NFT = {
        nome: nftCarteiraName,
        valor: nftCarteira.value,
      };
      //console.log(NFT);
      return NFT;
    });

    //console.log(values);
    setvalueNft(values);
  }
  useEffect(() => {
    getAllNfts();
  }, []);

  const listaDeStrings: any = [];

  for (let i = 0; i < valueNft.length; i++) {
    console.log(valueNft);
    const valor = valueNft[i]["valor"];
    const image =
      valor === "bolinha-jogo-da-velha-nft-prêmio-7912380" ? onft : xnft;
    const nome = valueNft[i]["nome"];
    listaDeStrings.push({
      nome: nome,
      img: image,
    });
  }

  if (status == "Conectado") {
    return (
      <div>
        <div className={styles["lista-nft-container"]}>
          <h1 className={styles["lista-nft-titulo"]}>Sua lista de NFT's:</h1>
          <ListaDeStrings listaDeStrings={listaDeStrings} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles["nao-conectado"]}>
          Você não conectou sua carteira!
        </div>
      </div>
    );
  }
};
export { NFTinventario };
