//to do not over
function checkPossibility(nums: number[]): boolean {
  let decreaseCnt = 0
  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] > nums[i + 1]) {
      ++decreaseCnt
      if (decreaseCnt >= 2) {
        return false
      }
    }
  }
  return true
}
