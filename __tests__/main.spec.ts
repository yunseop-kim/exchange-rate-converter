import { Dollar, Franc } from '../src/main';

describe('Dollar', () => {
  it('manipulation', () => {
    const five: Dollar = new Dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  });

  it('equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  });
});

describe('Franc', () => {
  it('manipulation', () => {
    const five: Franc = new Franc(5);
    expect(new Franc(10)).toEqual(five.times(2));
    expect(new Franc(15)).toEqual(five.times(3));
  });

});
