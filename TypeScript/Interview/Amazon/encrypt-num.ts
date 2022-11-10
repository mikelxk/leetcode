function encryptNum(nums: number[]) {
  const n = nums.length
  if (n === 1) {
    return `0${nums[0]}`
  }
  if (n === 2) {
    return `${nums[0]}${nums[1]}`
  }
  let next = new Array<number>(n - 1)
  for (let i = 0; i < n - 1; ++i) {
    next[i] = (nums[i] + nums[i + 1]) % 10
  }
  return encryptNum(next)
}
console.log(encryptNum([4, 5, 6, 7]))
