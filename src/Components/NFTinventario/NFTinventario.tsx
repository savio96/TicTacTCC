import React, { useContext } from 'react';
import classnames from 'classnames';
import styles from "./NFTinventario.module.scss";
import { UserContext } from "../UserInfo/UserInfo";
import { /*ProviderKeeper,*/ isKeeperInstalled } from "@waves/provider-keeper";
import onft from "../NFTinventario/assets/images/o_nft.png";
import xnft from "../NFTinventario/assets/images/x_nft.png";




const NFTinventario = () => { 

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












    if(status == 'Conectado'){
    return (
        <div>
           <div className={classnames(styles["wallet"])}>{wallet}</div>
           <img className="d-block w-100" src={onft}/>
        </div>
        );
    } else {
        return(
            <div>
                <div>Nao conectado!</div>
                <img className="d-block w-100" src={xnft}/>
            </div>
        );
    }

    // return (
    //     <div>
    //        <div className={classnames(styles["wallet"])}>{wallet}</div>
    //        <img className="d-block w-100" src={onft}/>
    //        <img className="d-block w-100" src={xnft}/>
    //     </div>
    // );

};
export {NFTinventario};

