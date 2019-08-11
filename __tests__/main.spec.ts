import { Money, Bank, Expression } from '../src/main';

describe('Dollar', () => {
  it('manipulation', () => {
    const five: Money = Money.dollar(5);
    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
  });
});

describe('Franc', () => {
  it('manipulation', () => {
    const five: Money = Money.franc(5);
    expect(Money.franc(10)).toEqual(five.times(2));
    expect(Money.franc(15)).toEqual(five.times(3));
  });
});

describe('Money', () => {
  it('equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  it('currency', () => {
    expect('USD').toEqual(Money.dollar(1).currency());
    expect('CHF').toEqual(Money.franc(1).currency());
  });

  it('simple addition', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toEqual(reduced);
  })
});
