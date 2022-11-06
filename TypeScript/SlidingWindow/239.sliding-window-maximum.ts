function maxSlidingWindow(nums: number[], k: number): number[] {
  let q : number[] = []
  let res: number[] = []
  let [l, r] = [0, 0]
  while (r < nums.length) {
    while (q.length != 0 && nums[q.at(-1)] < nums[r]) {
      q.pop()
    }
    q.push(r)
    if (l > q[0]) {
      q.shift()
    }
    if (r + 1 >= k) {
      res.push(nums[q[0]])
      ++l
    }
    ++r
  }
  return res
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
