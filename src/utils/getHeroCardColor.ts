function getColorForNumber(number: number): string[] {
  const cardColors = {
    '0-249': ['#343434', 'rgba(217,212,212,0.75)'],
    '250-349': ['#15371F', 'rgba(33,199,70,0.75)'],
    '350-499': ['#311849', 'rgba(174,38,186,0.75)'],
    '500-599': ['#573C1A', 'rgba(255,215,0,0.75)'],
    '600-999': ['#5B1B1B', 'rgba(255,0,0,0.75)'],
  };

  const color = Object.entries(cardColors).find(([key]) => {
    const [min, max] = key.split('-').map((e) => Number(e));
    return number >= min && number <= max;
  });

  return color ? color[1] : ['#343434', 'rgba(217,212,212,0.75)'];
}

export default getColorForNumber;
