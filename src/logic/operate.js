import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let total;

  switch (operation) {
    case '+':
      total = numOne.plus(numTwo);
      break;
    case '-':
      total = numOne.minus(numTwo);
      break;
    case 'x':
      total = numOne.times(numTwo);
      break;
    case '/':
      total = numOne.times(numTwo);
      break;
    default:
      total = null;
  }

  const result = total.toString();
  return result;
};

export default Operate;
