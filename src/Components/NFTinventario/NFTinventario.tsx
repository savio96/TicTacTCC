import React, { useContext, useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from "./NFTinventario.module.scss";
import { UserContext } from "../UserInfo/UserInfo";
import { /*ProviderKeeper,*/ isKeeperInstalled } from "@waves/provider-keeper";
import onft from "../NFTinventario/assets/images/o_nft.png";
import xnft from "../NFTinventario/assets/images/x_nft.png";
import parse from 'html-react-parser';
import HTMLReactParser from 'html-react-parser';
import { ListFormat } from 'typescript';
import ListaDeStrings from './listanft';


interface IResponse {
    assetId: string
    decimals: number
    description: string
    issueHeight: number
    issueTimestamp: number
    issuer: string
    issuerPublicKey: string
    minSponsoredAssetFee: string
    name: string
    originTransactionId: string
    quantity: number
    reissuable: boolean
    scripted: boolean
    sequenceInBlock: number
};

interface INFTCarteira {
    key: string
    type: string
    value: string
};



const NFTinventario: React.FC = () => { 

    const [valueNft, setvalueNft] = useState<string[]> ([])

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
        const responseListData =  await responseList.json();

        const emissaoNFT = await fetch(url2);
        const emissaoNFTData = await emissaoNFT.json();

        console.log(emissaoNFTData);


        const values = responseListData.map((item: IResponse) => {
            
            const nftCarteira = emissaoNFTData.find((nft: INFTCarteira) => nft.key.replace('_ipfs', '') === item.assetId);
            
            console.log(nftCarteira);

            return nftCarteira.value;
        });

        console.log(values);
        setvalueNft(values);
        
    };
    useEffect(() => {getAllNfts()}, [])




    

    const listaDeStrings: any = [];

    for (let i = 0; i < valueNft.length; i++) {

        const valor = valueNft[i];
        const image = valor === 'bolinha-jogo-da-velha-nft-prêmio-7912380' ? onft : xnft;
        listaDeStrings.push({ nome: valueNft[i], img: image });
    };

   
    if(status == 'Conectado'){
        return(
            <div>
                <div>
                <h1>Sua lista de NFT's:</h1>
                <ListaDeStrings listaDeStrings={listaDeStrings} />
                </div>
            </div>
        )

    }else{
        return(
            <div>
                <div>Você não conectou sua carteira!</div>
            </div>
        )
    }
    
};
export {NFTinventario};




    // return (
    //     <div>
    //        <div className={classnames(styles["wallet"])}>{wallet}</div>
    //        <img className="d-block w-100" src={onft}/>
    //        <img className="d-block w-100" src={xnft}/>
    //     </div>
    // );

