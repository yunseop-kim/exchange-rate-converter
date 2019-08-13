export class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
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

  currency(): string {
    return this._currency;
  }

  toString(): string {
    return this._amount + ' ' + this._currency;
  }

  public times(multiplier: number): Expression {
    return new Money(this._amount * multiplier, this._currency);
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  get amount(): number {
    return this._amount;
  }

  reduce(bank: Bank, to: string): Money {
    const rate: number = bank.rate(this._currency, to);
    return new Money(this.amount / rate, to);
  }
}

export interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(addend: Expression): Expression;
}

export class Bank {
  private _rates: Object = new Object();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    const rate: number = this._rates[`${from}-${to}`];
    console.log('rate', rate)
    return rate;
  }

  addRate(from: string, to: string, rate: number): void {
    this._rates[`${from}-${to}`] = rate;
  }
}

export class Sum implements Expression {
  augend: Expression;
  addend: Expression;
  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }
  reduce(bank: Bank, to: string): Money {
    const amount: number = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
  plus(addend: Expression): Expression {
    throw new Error("Method not implemented.");
  }
}
