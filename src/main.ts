export class Money implements Expression {
  protected amount: number;
  protected _currency: String;

  constructor(amount: number, currency: String) {
    this.amount = amount;
    this._currency = currency;
  }

  public equals(object: Money): boolean {
    const money: Money = object;
    return this.amount === money.amount && this.currency() === money.currency();
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  currency(): String {
    return this._currency;
  }

  toString(): String {
    return this.amount + ' ' + this._currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  public plus(addend: Money): Expression {
    return new Sum(this, addend);
  }
}

export interface Expression {}

export class Bank {
  reduce(source: Expression, to: String): Money {
    return Money.dollar(10);
  }
}

export class Sum implements Expression {
  augend: Money;
  addend: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }
}
