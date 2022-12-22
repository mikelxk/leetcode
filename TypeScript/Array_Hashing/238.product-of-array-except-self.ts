function productExceptSelf(nums: number[]): number[] {
  let n = nums.length
  let res = new Array<number>(n).fill(1)
  let prefix = 1
  for (let i = 0; i < nums.length; ++i) {
    res[i] *= prefix
    prefix = prefix * nums[i]
  }
  let postfix = 1
  for (let i = n - 1; i >= 0; --i) {
    res[i] *= postfix
    postfix = postfix * nums[i]
  }
  return res
}
console.log(productExceptSelf([1, 2, 3, 4]))
