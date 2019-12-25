const generateDataset = () => {
  return [
    { date: '02/01/2019', value: Math.random() * 5 },
    { date: '03/01/2019', value: Math.random() * 5 },
    { date: '04/01/2019', value: Math.random() * 5 },
    { date: '05/01/2019', value: Math.random() * 5 },
    { date: '06/01/2019', value: Math.random() * 5 },
    { date: '07/01/2019', value: Math.random() * 5 },
    { date: '08/01/2019', value: Math.random() * 5 },
  ];
};

export const transactionData = [
  {
    title: 'Daily Transaction Volume',
    value: 2342,
    dataset: generateDataset(),
  },
  {
    title: 'Daily Transaction Value',
    value: 4000000,
    dataset: generateDataset(),
  },
  {
    title: 'Total Transaction Volume',
    value: 452000,
    dataset: generateDataset(),
  },
  {
    title: 'Total Transaction Value',
    value: 4000000,
    dataset: generateDataset(),
  },
];
