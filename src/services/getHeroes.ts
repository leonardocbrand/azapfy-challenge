const getHeroes = async () => {
  const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
  const data = await response.json();
  return data;
};

export default getHeroes;
