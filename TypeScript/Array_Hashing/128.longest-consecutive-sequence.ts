function longestConsecutive(nums: number[]): number {
  let numSet = new Set(nums)
  let longest = 0
  for (let n of nums) {
    if (!numSet.has(n - 1)) {
      let length: number
      for (length = 1; numSet.has(n + length); ++length);
      longest = Math.max(length, longest)
    }
  }
  return longest
}
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
