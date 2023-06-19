import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./carouselgame.module.scss";
import classnames from "classnames";
import { Carousel, Container } from "react-bootstrap";

import passo1 from "../CarouselTutorialGame/assets/images/passo1.png";
import passo2 from "../CarouselTutorialGame/assets/images/passo2.png";
import passo3 from "../CarouselTutorialGame/assets/images/passo3.png";
import passo4 from "../CarouselTutorialGame/assets/images/passo4.png";
import passo5 from "../CarouselTutorialGame/assets/images/passo5.png";
import passo6 from "../CarouselTutorialGame/assets/images/passo6.png";

export default class CarouselGame extends Component {
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
        <h2> Tutorial de Como Jogar</h2>
        <Slider {...settings}>
          <div className={styles["slides"]}>
            <img src={passo1} alt="Passo 1" />
            <div className={styles["slides-text"]}>
              <h3>Passo 1</h3>
              <p>
                Depois da carteira criada e conectada, para jogar, resgate seu
                token em: Resgates -&gt; Resgate seu Token.
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo2} alt="Passo 2" />
            <div className={styles["slides-text"]}>
              <h3>Passo 2</h3>
              <p>
                Você precisará resgatar uma pequena quantidade de WAVES para dar
                início. Para isso, clique no link em azul da WAVES EXPLORER e
                irá abrir uma nova aba.
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo3} alt="Passo 3" />
            <div className={styles["slides-text"]}>
              <h3>Passo 3</h3>
              <p>
                Copie e cole seu endereço da carteira e clique em "Request
                WAVES". Espere alguns segundos até as moedas caírem na carteira
                e pode fechar a aba.
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo4} alt="Passo 4" />
            <div className={styles["slides-text"]}>
              <h3>Passo 4</h3>
              <p>
                Na mesma página do resgate da WAVES, clique agora em "Resgatar"
                para resgatar seu TOKEN para jogar o jogo da velha.
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo5} alt="Passo 5" />
            <div className={styles["slides-text"]}>
              <h3>Passo 5</h3>
              <p>
                O Keeper irá abrir, coloque sua senha se precisar e clique em
                aprovar para receber seu TCC TOKEN em troca de certa quantidade
                de WAVES, depois, feche o Keeper e espere um pouco para o TCC
                TOKEN ser adicionado na carteira.
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo6} alt="Passo 6" />
            <div className={styles["slides-text"]}>
              <h3>Passo 6</h3>
              <p>
                Com o TCC TOKEN já na carteira, você já está pronto para jogar,
                pode ir para o jogo e depositar seu TCC TOKEN e começar a jogar.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
