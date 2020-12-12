import axios from 'axios';

const evaluateMen = async (name: string): Promise<number> => {
  try {
    let total = 0;
    const { data } = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}?sexo=M`);
    data[0].res.forEach((results: any) => {
      total = total + results.frequencia;
    });
    return total;
  } catch (error) {
    return 0;
  }
};

const evaluateWomen = async (name: string): Promise<number> => {
  try {
    let total = 0;
    const { data } = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}?sexo=F`);
    data[0].res.forEach((results: any) => {
      total = total + results.frequencia;
    });
    return total;
  } catch (error) {
    return 0;
  }
};

export { evaluateMen, evaluateWomen };