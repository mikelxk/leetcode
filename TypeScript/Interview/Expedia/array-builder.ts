function arrayBuilder(arr: number[], l: number, r: number): number[] {
  let n = arr.length
  let brr = new Array<number>(n)
  let lastDiff = l - arr[0]
  brr[0] = l
  for (let i = 1; i < n; ++i) {
    let currDiff = l - arr[i]
    if (currDiff <= lastDiff) {
      l += lastDiff - currDiff + 1
    }
    lastDiff = currDiff
    if (l > r) {
      return [-1]
    }
    brr[i] = l
  }
  return brr
}
console.log(arrayBuilder([1, 2, 1, 3], 1, 10))
