let a = [9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11]
function quickSort(arr: number[]): number[] {
  if (arr.length === 0) {
    return []
  }
  let left = new Array<number>()
  let right = new Array<number>()
  let pivot = arr[0]
  for (let i = 1; i < arr.length; ++i) {
    let n = arr[i]
    if (n < pivot) left.push(n)
    else right.push(n)
  }
//   for (let n of arr.slice(1)) {
//     if (n < pivot) left.push(n)
//     else right.push(n)
//   }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(a))
