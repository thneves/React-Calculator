/* eslint-disable no-unused-expressions */
import Operate from './operate';

const Calculate = (data, button) => {
  let { total, next, operation } = data;

  switch (button) {
    case '+': case '-': case 'x': case '/':
      if (total != null) {
        operation = button;
      }
      break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
      if (operation === null) {
        total === null ? total = button : total += button;
      } else if (operation !== null) {
        next === null ? next = button : next += button;
      }
      break;
    case '.':
      if (operation !== null) {
        if (next === null) {
          next = `0${button}`;
        } else if (!next.includes(button)) {
          next += button;
        }
      } else if (operation === null) {
        if (total === null) {
          total = `0${button}`;
        } else if (!total.includes(button)) {
          total += button;
        }
      }
      break;
    case '+/-':
      total *= -1;
      total.toString();
      if (next) {
        const result = next * -1;
        next = result.toString();
      }
      break;
    default:
      if (next && total) {
        total = (Operate(total, next, operation));
        operation = null;
        next = null;
      }
  }
  const final = { total, next, operation };
  return final;
};

export default Calculate;