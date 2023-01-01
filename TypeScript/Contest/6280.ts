function closestPrimes(left: number, right: number): number[] {
  let primes = getPrimes(left, right)
  if (primes.length < 2) {
    return [-1, -1]
  }
  let diff = primes[1] - primes[0]
  let res = [primes[0], primes[1]]
  for (let i = 2; i !== primes.length; ++i) {
    if (primes[i] - primes[i - 1] < diff) {
      res = [primes[i - 1], primes[i]]
      diff = primes[i] - primes[i - 1]
    }
    if (diff == 1 || diff == 2) {
      break
    }
  }
  return res
}
function getPrimes(min: number, max: number) {
  let sieve: boolean[] = [],
    primes: number[] = []
  for (let i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      if (i >= min) {
        primes.push(i)
      }
      for (let j = i << 1; j <= max; j += i) {
        sieve[j] = true
      }
    }
  }
  return primes
}
console.log(closestPrimes(4, 6))
