import React from 'react'
import classnames from 'classnames'
import styles from "./dAppCriaNFT.module.scss";



const DAppCriaNFT = () => {  
  
  
  const resgate = (e: React.MouseEvent<HTMLButtonElement>) => {
  };







  return (
    <div>
      <button type="submit" className={classnames(styles["btn-nft"], "btn", "btn-primary")} onClick = {resgate}>Resgatar!</button>
    
    </div>
  );
};
export {DAppCriaNFT};
