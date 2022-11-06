function subarraysDivByK(nums: number[], k: number): number {
  let freq = new Array(k).fill(0)
  freq[0] = 1
  let [sum, count] = [0, 0]
  for (let n of nums) {
    sum += n
    let remainder = sum % k
    if (remainder < 0) {
      remainder += k
    }
    count += freq[remainder]
    ++freq[remainder]
  }
  return count
}
