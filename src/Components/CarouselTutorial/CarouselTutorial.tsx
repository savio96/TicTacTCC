import React from "react";

import styles from "../CarouselTutorial/carouselTutorial.module.scss";
import classnames from "classnames";
import { Carousel } from "react-bootstrap";
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

const CarouselTutorial = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item className="">
          <img className="d-block w-100" src={titulo} alt="Title slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo1} alt="First slide" />
          <Carousel.Caption>
            <h3>Passo 1</h3>
            <p>Abra seu google chrome e pesquise por "Chrome Web Store"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Passo 2</h3>
            <p>No Chrome Web Store, pesquise por "Kepper Wallet"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Passo 3</h3>
            <p>Abra a extensão Kepper Wallet</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo4} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Passo 4</h3>
            <p>Clique em "Usar no Chrome"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo5} alt="Fifth slide" />
          <Carousel.Caption>
            <h3>Passo 5</h3>
            <p>
              Clique em "Adicionar extensão" e ela irá ser adicionada ao seu
              Chrome
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo6} alt="Sixth slide" />
          <Carousel.Caption>
            <h3>Passo 6</h3>
            <p>
              Vá no seu gerenciamento de extensões e clique em "Kepper Wallet"
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo7} alt="Seventh slide" />
          <Carousel.Caption>
            <h3>Passo 7</h3>
            <p>Irá abrir uma nova aba e clique em "iniciar"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo8} alt="Eighth slide" />
          <Carousel.Caption>
            <h3>Passo 8</h3>
            <p>
              Crie uma senha que será armazenada localmente, aceite os termos e
              clique em "Continuar"
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo9} alt="Ninth slide" />
          <Carousel.Caption>
            <h3>Passo 9</h3>
            <p>
              Clique em "Criar uma conta nova", escolha um avatar e clique em
              "Continuar"
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo10} alt="tenth slide" />
          <Carousel.Caption>
            <h3>Passo 10</h3>
            <p>
              Salve de uma forma segura sua cadeia de palavras aleatórias,
              clique em "Continuar". Na próxima tela, selecione sua senha na
              ordem correta e clique em "Confirmar"
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo11} alt="Eleventh slide" />
          <Carousel.Caption>
            <h3>Passo 11</h3>
            <p>
              Crie um nome da conta, clique em "Continuar" e finalize o
              processo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img className="d-block w-100" src={passo12} alt="Twelfth slide" />
          <Carousel.Caption>
            <h3>Passo 12</h3>
            <p>Agora pela extensão, você já tem acesso a sua carteira</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export { CarouselTutorial };
