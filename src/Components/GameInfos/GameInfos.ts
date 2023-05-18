interface JSONInteger {
  type: string;
  value: number;
}

interface JSONList {
  type: string;
  value: JSONInteger[];
}

function ConvertJson(vet: any): JSONList {
  const saida: JSONList = { type: "list", value: [] };

  for (const elemento of vet) {
    const objetoJSON: JSONInteger = { type: "integer", value: elemento };
    saida.value.push(objetoJSON);
    console.log(JSON.stringify(saida));
  }
  return saida;
}

export default ConvertJson;
