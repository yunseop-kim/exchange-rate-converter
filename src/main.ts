
export class Money {
  protected amount: number;
  
  public equals(object: Object): boolean {
    const money: Money = object as Dollar
    return this.amount === money.amount
  }
}
export class Dollar extends Money {
  constructor(amount: number) {
    super()
    this.amount = amount;
  }
  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
export class Franc extends Money {
  constructor(amount: number) {
    super()
    this.amount = amount;
  }
  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
