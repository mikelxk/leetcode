function findKthLargest(nums: number[], k: number): number {
  let n = nums.length
  k = n - k
  return quickSelect(0, n - 1)
  function quickSelect(l: number, r: number) {
    let [pivot, p] = [nums[r], l]
    for (let i = l; i < r; ++i) {
      if (nums[i] <= pivot) {
        ;[nums[p], nums[i]] = [nums[i], nums[p]]
        ++p
      }
    }
    ;[nums[p], nums[r]] = [nums[r], nums[p]]
    if (p > k) return quickSelect(l, p - 1)
    else if (p < k) return quickSelect(p + 1, r)
    else return nums[p]
  }
}

function findKthLargest1(nums: number[], k: number): number {
  let n = nums.length
  let [low, high, pivotIndex] = [0, n - 1, n]
  while (pivotIndex !== k - 1) {
    pivotIndex = partition(low, high)
    if (pivotIndex < k - 1) {
      low = pivotIndex + 1
    } else {
      high = pivotIndex - 1
    }
  }
  return nums[k - 1]
  function partition(low: number, hight: number) {
    let pivot = nums[low]
    let [i, j] = [low + 1, hight]
    while (i <= j) {
      if (nums[i] < pivot && pivot < nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
        ++i
        --j
      }
      if (nums[i] >= pivot) {
        ++i
      }
      if (pivot >= nums[j]) {
        --j
      }
    }
    ;[nums[low], nums[j]] = [nums[j], nums[low]]
    return j
  }
}
console.log(findKthLargest([-1, -1], 2))
