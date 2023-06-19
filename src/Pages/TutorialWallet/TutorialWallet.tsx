import React from "react";

import styles from "./tutorialwallet.module.scss";
import CarouselWallet from "../../Components/CarouselTutorialWallet/CarouselWallet";
const TutorialWallet = () => {
  return (
    <div className={styles["carousel-container"]}>
      <CarouselWallet></CarouselWallet>
    </div>
  );
};

export { TutorialWallet };
