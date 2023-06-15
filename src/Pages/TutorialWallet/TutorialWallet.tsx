import React from "react";

import styles from "./tutorialwallet.module.scss";
import CarouselWallet from "../../Components/CarouselTutorial/CarouselWallet";
const TutorialWallet = () => {
  return (
    <div className={styles["carousel-container"]}>
      <CarouselWallet></CarouselWallet>
    </div>
  );
};

export { TutorialWallet };
