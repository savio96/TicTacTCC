import React from 'react'
import styles from "./ResgateSeuNFT.module.scss";
import classnames from "classnames";
import imgblock from "./assets/images/imagembc.jpg"
import {DAppCriaNFT} from "../../Components/dAppCriaNFT/dAppCriaNFT"


const ResgateSeuNFT = () => {
  return (
      <div>
    
          <img src= {imgblock} alt="imagembackground"/>
        
          <DAppCriaNFT></DAppCriaNFT>
          
      </div>
          

  );
};
 export { ResgateSeuNFT };