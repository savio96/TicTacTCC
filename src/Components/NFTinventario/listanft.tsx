import React from 'react';

interface ListaItem {
    nome: string;
    img: string;
}

interface Props {
  listaDeStrings: ListaItem[];
}

const ListaDeStrings: React.FC<Props> = ({ listaDeStrings }) => {
  return (
    <ul>
      {listaDeStrings.map((string, index) => (
        <li key={index}>
           {/* <span>{string.nome}</span> */}
           <img src={string.img} alt={string.nome} width={200}/> 
        </li>
      ))}
    </ul>
  );
};

export default ListaDeStrings;