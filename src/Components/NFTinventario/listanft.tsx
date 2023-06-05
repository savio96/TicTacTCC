import React from "react";
import styles from "./listanft.module.scss";
interface ListaItem {
  nome: string;
  img: string;
}

interface Props {
  listaDeStrings: ListaItem[];
}

const ListaDeStrings: React.FC<Props> = ({ listaDeStrings }) => {
  return (
    <ul className={styles["nft-cards"]}>
      {listaDeStrings.map((string, index) => (
        <li key={index} className={styles["nft-card"]}>
          <img
            src={string.img}
            alt={string.nome}
            className={styles["nft-card-image"]}
          />
          <p className={styles["nft-card-name"]}>{string.nome}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeStrings;
