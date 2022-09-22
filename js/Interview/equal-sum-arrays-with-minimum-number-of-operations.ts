function minOperations(nums1: number[], nums2: number[]): number {
  let s1 = nums1.reduce((a, b) => a + b, 0)
  let s2 = nums2.reduce((a, b) => a + b, 0)
  if (s1 > s2) {
    ;[nums1, nums2] = [nums2, nums1]
    ;[s1, s2] = [s2, s1]
  }
  let diff = s2 - s1
  if (diff == 0) {
    return 0
  }
  let arr = []
  for (let i of nums1) {
    arr.push(6 - i)
  }
  for (let i of nums2) {
    arr.push(i - 1)
  }
  arr.sort((a, b) => a - b)
  let ans = 0
  for (let n of arr) {
    ++ans
    diff -= n
    if (diff <= 0) {
      return ans
    }
  }
  return -1
}
console.log(minOperations([1, 2], [2, 3]))
