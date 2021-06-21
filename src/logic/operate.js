import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let total;

  if (operation === '+') {
    total = numOne.plus(numTwo);
  }

  if (operation === '-') {
    total = numOne.minus(numTwo);
  }

  if (operation === 'x') {
    total = numOne.times(numTwo);
  }

  if (operation === '/') {
    total = numOne.div(numTwo);
  }

  return total;
};

export default Operate;
