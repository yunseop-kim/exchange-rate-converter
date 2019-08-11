export class Money {
  protected amount: number;
  protected _currency: String;

  constructor(amount: number, currency: String) {
    this.amount = amount;
    this._currency = currency;
  }

  public equals(object: Money): boolean {
    const money: Money = object;
    return (
      this.amount === money.amount &&
      this.currency() === money.currency()
    );
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Franc {
    return new Franc(amount, 'CHF');
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
}
export class Dollar extends Money {
  constructor(amount: number, currency: String) {
    super(amount, currency);
  }
}
export class Franc extends Money {
  constructor(amount: number, currency: String) {
    super(amount, currency);
  }
}
