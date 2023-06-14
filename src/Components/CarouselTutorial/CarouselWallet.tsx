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
        <h2> Tutorial da Criação da Carteira</h2>
        <Slider {...settings}>
          <div className={styles["slides"]}>
            <img src={titulo} alt="Titulo Slide" />
          </div>
          <div className={styles["slides"]}>
            <img src={passo1} alt="Passo 1" />
            <div className={styles["slides-text"]}>
              <h3>Passo 1</h3>
              <p>Abra seu google chrome e pesquise por "Chrome Web Store".</p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo2} alt="Passo 2" />
            <div className={styles["slides-text"]}>
              <h3>Passo 2</h3>
              <p>No Chrome Web Store, pesquise por "Keeper Wallet".</p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo3} alt="Passo 3" />
            <div className={styles["slides-text"]}>
              <h3>Passo 3</h3>
              <p>Abra a extensão Kepper Wallet.</p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo4} alt="Passo 4" />
            <div className={styles["slides-text"]}>
              <h3>Passo 4</h3>
              <p>Clique em "Usar no Chrome".</p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo5} alt="Passo 5" />
            <div className={styles["slides-text"]}>
              <h3>Passo 5</h3>
              <p>
                Clique em "Adicionar extensão" e ela irá ser adicionada ao seu
                Chrome.
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo6} alt="Passo 6" />
            <div className={styles["slides-text"]}>
              <h3>Passo 6</h3>
              <p>
                Vá no seu gerenciamento de extensões e clique em "Keeper
                Wallet".
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo7} alt="Passo 7" />
            <div className={styles["slides-text"]}>
              <h3>Passo 7</h3>
              <p>Irá abrir uma nova aba e clique em "iniciar"</p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo8} alt="Passo 8" />
            <div className={styles["slides-text"]}>
              <h3>Passo 8</h3>
              <p>
                Crie uma senha que será armazenada localmente, aceite os termos
                e clique em "Continuar".
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo9} alt="Passo 9" />
            <div className={styles["slides-text"]}>
              <h3>Passo 9</h3>
              <p>
                Antes de clicar em "Criar uma conta nova", selecione a rede
                "Testnet" no lugar de "Mainnet" no canto esquerdo inferior e
                logo em seguida escolha um avatar e clique em "Continuar".
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo10} alt="Passo 10" />
            <div className={styles["slides-text"]}>
              <h3>Passo 10</h3>
              <p>
                Salve de uma forma segura sua cadeia de palavras aleatórias,
                clique em "Continuar". Na próxima tela, selecione sua senha na
                ordem correta e clique em "Confirmar".
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo11} alt="Passo 11" />
            <div className={styles["slides-text"]}>
              <h3>Passo 11</h3>
              <p>
                Crie um nome da conta, clique em "Continuar" e finalize o
                processo.
              </p>
            </div>
          </div>
          <div className={styles["slides"]}>
            <img src={passo12} alt="Passo 12" />
            <div className={styles["slides-text"]}>
              <h3>Passo 12</h3>
              <p>Agora pela extensão, você já tem acesso a sua carteira.</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
