export abstract class Money {
  protected amount: number;
  protected _currency: String;
  
  constructor(amount: number, currency: String) {
    this.amount = amount;
    this._currency = currency
  }

  public equals(object: Object): boolean {
    const money: Money = object as Money;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Franc {
    return new Franc(amount, 'CHF');
  }

  abstract times(multiplier: number): Money;
  currency(): String {
    return this._currency;
  }
}
export class Dollar extends Money {
  constructor(amount: number, currency: String) {
    super(amount, currency);
  }
  public times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}
export class Franc extends Money {
  constructor(amount: number, currency: String) {
    super(amount, currency);
  }
  public times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
