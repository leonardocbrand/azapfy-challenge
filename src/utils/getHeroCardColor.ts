function getColorForNumber(number: number): string {
  const cardColors = {
    '0-249': '#343434',
    '250-349': '#15371F',
    '350-499': '#311849',
    '500-599': '#573C1A',
    '600-': '#5B1B1B',
  };

  const color = Object.entries(cardColors).find(([key]) => {
    const [min, max] = key.split('-').map((e) => Number(e));
    return number >= min && number <= max;
  });

  return color ? color[1] : '#343434';
}

export default getColorForNumber;
