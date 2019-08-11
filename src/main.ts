export abstract class Money {
  protected amount: number;
  protected _currency: String;
  public equals(object: Object): boolean {
    const money: Money = object as Money;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }

  abstract times(multiplier: number): Money;
  currency(): String {
    return this._currency;
  }
}
export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
    this._currency = "USD"
  }
  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
    this._currency = "CHF"
  }
  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
