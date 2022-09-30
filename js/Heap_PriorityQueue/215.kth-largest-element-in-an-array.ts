function findKthLargest(nums: number[], k: number): number {
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
