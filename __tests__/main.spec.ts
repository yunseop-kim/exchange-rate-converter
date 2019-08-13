import { Money, Bank, Expression, Sum } from '../src/main';

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
  });

  it('plus returns sum', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum: Sum = result as Sum;
    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
  });

  it('reduce sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expect(Money.dollar(7)).toEqual(result);
  });

  it('reduce money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(Money.dollar(1)).toEqual(result);
  });

  it('identify rate', () => {
    expect(1).toEqual(new Bank().rate('USD', 'USD'));
  });

  it('reduce money different currency', () => {
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(Money.franc(2), 'USD');
    expect(Money.dollar(1)).toEqual(result);
  });
});
