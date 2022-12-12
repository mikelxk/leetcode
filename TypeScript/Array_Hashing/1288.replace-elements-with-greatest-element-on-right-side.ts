function replaceElements(arr: number[]): number[] {
  let n = arr.length
  let maxR = arr.at(-1)
  for (let i = n - 1; i >= 0; --i) {
    let tmp = arr[i]
    arr[i] = maxR
    maxR = Math.max(tmp, maxR)
  }
  arr[n - 1] = -1
  return arr
}
console.log(replaceElements([17, 18, 5, 4, 6, 1]))
