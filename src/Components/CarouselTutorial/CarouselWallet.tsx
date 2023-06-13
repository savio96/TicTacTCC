import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./carouselwallet.module.scss";
import classnames from "classnames";
import { Carousel, Container } from "react-bootstrap";
import titulo from "../CarouselTutorial/assets/images/Titulo.jpg";
import passo1 from "../CarouselTutorial/assets/images/passo1.jpg";
import passo2 from "../CarouselTutorial/assets/images/passo2.jpg";
import passo3 from "../CarouselTutorial/assets/images/passo3.jpg";
import passo4 from "../CarouselTutorial/assets/images/passo4.jpg";
import passo5 from "../CarouselTutorial/assets/images/passo5.jpg";
import passo6 from "../CarouselTutorial/assets/images/passo6.jpg";
import passo7 from "../CarouselTutorial/assets/images/passo7.jpg";
import passo8 from "../CarouselTutorial/assets/images/passo8.jpg";
import passo9 from "../CarouselTutorial/assets/images/passo9.jpg";
import passo10 from "../CarouselTutorial/assets/images/passo10.jpg";
import passo11 from "../CarouselTutorial/assets/images/passo11.jpg";
import passo12 from "../CarouselTutorial/assets/images/passo12.jpg";

export default class CarouselWallet extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={styles["container"]}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className={styles["slides"]}>
            <img src={titulo} alt="Titulo Slide" />
          </div>
          <div className={styles["slides"]}>
            <img src={passo1} alt="Passo 1" />
            <div className={styles["slides-text"]}>
              <h3>Passo 1</h3>
              <p>Abra seu google chrome e pesquise por "Chrome Web Store"</p>
            </div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
