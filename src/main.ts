export class Money implements Expression {
  protected _amount: number;
  protected _currency: String;

  constructor(amount: number, currency: String) {
    this._amount = amount;
    this._currency = currency;
  }

  public equals(object: Money): boolean {
    const money: Money = object;
    return (
      this._amount === money.amount && this.currency() === money.currency()
    );
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
    return this._amount + ' ' + this._currency;
  }

  public times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  public plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  get amount(): number {
    return this._amount;
  }

  reduce(to: String): Money {
    return this;
  }
}

export interface Expression {
  reduce(to: String): Money;
}

export class Bank {
  reduce(source: Expression, to: String): Money {
    return source.reduce(to);
  }
}

export class Sum implements Expression {
  augend: Money;
  addend: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }
  reduce(to: String): Money {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
