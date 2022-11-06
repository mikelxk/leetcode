class Solution {
  indices = new Map<number, number[]>()
  constructor(nums: number[]) {
    let n = nums.length
    for (let i = 0; i < n; ++i) {
      if (!this.indices.has(nums[i])) {
        this.indices.set(nums[i], [])
      }
      this.indices.get(nums[i]).push(i)
    }
  }
  pick(target: number): number {
    let targetArr = this.indices.get(target)
    return targetArr.at(Math.random() * targetArr.length)
  }
}
class SolutionResvoir {
  nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }
  pick(target: number): number {
    let idx = 0
    let cnt = 0
    for (let i = 0; i < this.nums.length; ++i) {
      if (this.nums[i] === target) {
        ++cnt
        if (Math.random() < 1 / cnt) {
          idx = i
        }
      }
    }
    return idx
  }
}
let s = new SolutionResvoir([1, 2, 3, 3, 3])
console.log(s.pick(3))
