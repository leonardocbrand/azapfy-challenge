import { Heroes } from '@/app/types';

const getHeroes = async (): Promise<Heroes[]> => {
  const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
  const data = response.json();

  return data;
};

export default getHeroes;
