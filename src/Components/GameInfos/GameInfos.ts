interface JSONInteger {
  type: string;
  value: number;
}

interface JSONList {
  type: string;
  value: JSONInteger[];
}

function ConvertJson(): JSONList {
  const vetor: number[] = [1, 3, 1, -4];

  const saida: JSONList = { type: "list", value: [] };

  for (const elemento of vetor) {
    const objetoJSON: JSONInteger = { type: "integer", value: elemento };
    saida.value.push(objetoJSON);
    console.log(JSON.stringify(saida));
  }
  return saida;
}

export default ConvertJson;
