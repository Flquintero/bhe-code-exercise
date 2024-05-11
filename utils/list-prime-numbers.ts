const listPrimeNumbers = (): number[] => {
  const limit = 100000000;
  const sieve: boolean[] = new Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false; // 0 and 1 are not prime numbers

  // Start from the first prime number, which is 2
  for (let number = 2; number * number <= limit; number++) {
    if (sieve[number]) {
      // Check if the number is still marked as a prime
      // Mark all multiples of this number as non-prime
      for (
        let multiple = number * number;
        multiple <= limit;
        multiple += number
      ) {
        sieve[multiple] = false;
      }
    }
  }

  // Extract the prime numbers
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
};

module.exports = listPrimeNumbers;
