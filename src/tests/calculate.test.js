import Calculate from '../logic/calculate';

describe('Calculate function', () => {
  it('it test the addition of numbers', () => {
    const total = Calculate({ total: '12', next: '5', operation: '+' }, '=');
    expect(total).toEqual({ total: '17', next: null, operation: null });
  });

  it('it test the substract of numbers', () => {
    const total = Calculate({ total: '10', next: '3', operation: '-' }, '=');
    expect(total).toEqual({ total: '7', next: null, operation: null });
  });

  it('it test the divide of numbers', () => {
    const total = Calculate({ total: '10', next: '2', operation: '/' }, '=');
    expect(total).toEqual({ total: '5', next: null, operation: null });
  });

  it('it test multiply the numbers', () => {
    const total = Calculate({ total: '2', next: '5', operation: 'x' }, '=');
    expect(total).toEqual({ total: '10', next: null, operation: null });
  });

  it('it converts to a negative number', () => {
    const total = Calculate({ total: null, next: '11', operation: null }, '+/-');
    expect(total).toEqual({ total: -0, next: '-11', operation: null });
  });

  it('it converts to a positive number', () => {
    const total = Calculate({ total: null, next: '-22', operation: null }, '+/-');
    expect(total).toEqual({ total: -0, next: '22', operation: null });
  });

  it('ir clear all the display', () => {
    const total = Calculate({ total: '1333', next: '1330', operation: '+' }, 'AC');
    expect(total).toEqual({ total: null, next: null, operation: null });
  });

  it('it convert the number into a percent number', () => {
    const total = Calculate({ total: '45', next: null, operation: null }, '%');
    expect(total).toEqual({ total: 0.45, next: null, operation: null });
  });
});
