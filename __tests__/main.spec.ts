import { Dollar } from '../src/main';

describe('Dollar', () => {
  it('manipulation', () => {
    const five: Dollar = new Dollar(5);
    let product: Dollar = five.times(2);
    five.times(2);
    expect(new Dollar(10)).toEqual(product);
    product = five.times(3);
    expect(new Dollar(15)).toEqual(product);
  });

  it('equality', () => {
    expect(new Dollar(5).equals(new Dollar(5)));
  });
});
