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
      total = numOne.div(numTwo);
      break;
    case '%':
      if (numTwo !== null) {
        total = numOne.plus(numTwo.div(100));
      } else {
        total = numOne.mod(numTwo);
      }
      break;
    default:
      total = null;
  }

  const result = total.toString();
  return result;
};

export default Operate;
