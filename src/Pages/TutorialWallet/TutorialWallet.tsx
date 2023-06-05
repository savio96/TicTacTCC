import React from "react";
import { CarouselTutorial } from "../../Components/CarouselTutorial/CarouselTutorial";
import styles from "./tutorialwallet.module.scss";
const TutorialWallet = () => {
  return (
    <div className={styles["carousel-container"]}>
      <CarouselTutorial></CarouselTutorial>
    </div>
  );
};

export { TutorialWallet };
