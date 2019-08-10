export class Dollar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: Object): boolean {
    const dollar: Dollar = object as Dollar
    return this.amount === dollar.amount
  }
}
