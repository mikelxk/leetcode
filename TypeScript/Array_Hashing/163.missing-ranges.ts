function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number
): string[] {
  let res: string[] = []
  let prev = lower - 1
  for (let i = 0; i <= nums.length; ++i) {
    let curr = i < nums.length ? nums[i] : upper + 1
    if (prev + 1 <= curr - 1) {
      res.push(fmt(prev + 1, curr - 1))
    }
    prev = curr
  }
  return res
  function fmt(l: number, r: number) {
    if (l === r) {
      return `${l}`
    }
    return `${l}->${r}`
  }
}
