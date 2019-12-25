export const paymentStatus = [
  { name: 'pending', color: '#EBC315' },
  { name: 'reconcilled', color: '#27AE60' },
  { name: 'un-reconcilled', color: '#C4C4C4' },
  { name: 'settled', color: '#1875F0' },
  { name: 'unsettled', color: '	#ED1C24' },
];

const itemNames = [
  'Apple Mac Book 15" 250 SSD 12GB',
  'HP Elitebook X360 1030 G2 13.3" 250 SSD 12GB',
  'Dell Xps 9360 G2 13.3" 250 SSD 19GB',
];

const generatePaymentData = () => {
  const dataset = [];

  for (let i = 0; i < 50; i++) {
    dataset.push({
      itemName: itemNames[Math.floor(Math.random() * (2 - 0 + 1) + 0)],
      price: 73430,
      txnNo: 1234567890,
      time: '12:30',
      status: paymentStatus[Math.floor(Math.random() * (4 - 0 + 1) + 0)].name,
    });
  }

  return dataset;
};

export const paymentData = generatePaymentData();
