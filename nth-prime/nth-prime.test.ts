const NthPrime = require('./nth-prime');

describe('NthPrime', () => {
  test('valid results', () => {
    expect(NthPrime.getNthPrime(0)).toBe(2);
    expect(NthPrime.getNthPrime(19)).toBe(71);
    expect(NthPrime.getNthPrime(99)).toBe(541);
    expect(NthPrime.getNthPrime(500)).toBe(3581);
    expect(NthPrime.getNthPrime(986)).toBe(7793);
    expect(NthPrime.getNthPrime(2000)).toBe(17393);
    expect(NthPrime.getNthPrime(1000000)).toBe(15485867);
  });
});
