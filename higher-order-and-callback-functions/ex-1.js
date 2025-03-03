const thaiAmounts = [1000, 2000, 5000, 10000, 20000];

const conversionCallback = (amount) => {
  return amount / 35;
};

const processingCallback = (fee) => {
  return parseFloat((fee * 0.95).toFixed(2));
  //Use parseFloat to change String to Number after toFixed work
};

const currencyConverter = (amounts) => {
  let result = [];
  let conversionAmount = 0;
  let totalAmount = 0;

  for (let amount of amounts) {
    conversionAmount = conversionCallback(amount);
    totalAmount = processingCallback(conversionAmount);
    result.push(totalAmount);
  }
  return result;
};

let usaAmounts = currencyConverter(thaiAmounts);
console.log(usaAmounts);
