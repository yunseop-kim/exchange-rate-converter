import { Dollar } from '../src/main';

describe('Dollar', () => {
  it('manipulation', () => {
    const five: Dollar = new Dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  });

  it('equality', () => {
    expect(new Dollar(5).equals(new Dollar(5)));
  });
});
