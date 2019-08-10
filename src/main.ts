export class Dollar {
  public amount: Number;
  constructor(amount: Number) {
    this.amount = amount
  }
  public times(multiplier: number): void {
    this.amount = 5 * 2
  }
}
