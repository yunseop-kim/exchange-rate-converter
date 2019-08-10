import { Dollar } from '../src/main';

describe('Dollar', () => {
  it('manipulation', () => {
    const five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
    five.times(3);
    expect(five.amount).toBe(15);
  });
});
