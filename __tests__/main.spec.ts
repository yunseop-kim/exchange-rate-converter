import { Dollar } from '../src/main';

describe('Dollar', () => {
  it('manipulation', () => {
    const five: Dollar = new Dollar(5);
    let product: Dollar = five.times(2);
    five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  it('equality', () => {
    expect(new Dollar(5).equals(new Dollar(5)));
  });
});
