function distinctPrimeFactors(nums: number[]): number {
  let primes = [2]
  for (let i = 3; i < 1000; ++i) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }
  let s = new Set<number>()
  nums.sort((a, b) => a - b)
  for (let n of nums) {
    calc(n)
  }
  function calc(n: number) {
    for (let p of primes) {
      if (p > n) {
        break
      }
      if (n % p == 0) {
        s.add(p)
        if (p !== n) {
          calc(n / p)
        }
      }
    }
  }
  return s.size
}

function isPrime(num: number) {
  // returns boolean
  if (num <= 1) return false // negatives
  if (num % 2 == 0 && num > 2) return false // even numbers
  const s = Math.sqrt(num) // store the square to loop faster
  for (let i = 3; i <= s; i += 2) {
    // start from 3, stop at the square, increment in twos
    if (num % i === 0) return false // modulo shows a divisor was found
  }
  return true
}
console.log(distinctPrimeFactors([2, 4, 8, 16]))
