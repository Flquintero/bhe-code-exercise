import { getNthPrime } from '../src/nth-prime/index';

describe('NthPrime', () => {
  test('valid results', () => {
    expect(getNthPrime(0)).toBe(2);
    expect(getNthPrime(19)).toBe(71);
    expect(getNthPrime(99)).toBe(541);
    expect(getNthPrime(500)).toBe(3581);
    expect(getNthPrime(986)).toBe(7793);
    expect(getNthPrime(2000)).toBe(17393);
    expect(getNthPrime(1000000)).toBe(15485867);
    expect(getNthPrime(5000000)).toBe(86028157);
    expect(getNthPrime(10000000)).toBe(179424691);
    expect(getNthPrime(50000000)).toBe(982451707);
    expect(() => {
      getNthPrime(50000001);
    }).toThrow();
  });
});
