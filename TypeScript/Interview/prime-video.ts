function minGroup2(movies: number[], diff: number) {
  movies.sort((a, b) => a - b)
  let ret: number[][] = []
  let ans = 0
  let l = 0
  for (let i = 0; i < movies.length; ++i) {
    if (movies[i] - movies[l] > diff) {
      ret.push(movies.slice(l, i))
      ++ans
      l = i
    }
  }
  ret.push(movies.slice(l))
  return ret
}
function minGroup3(movies: number[], diff: number) {
  movies.sort((a, b) => a - b)
  let ans = 1
  let l = 0
  for (let i = 0; i < movies.length; ++i) {
    if (movies[i] - movies[l] > diff) {
      ++ans
      l = i
    }
  }
  return ans
}
console.log(minGroup2([1, 5, 4, 6, 8, 9, 2], 3))
//1 2 4 5 6 8 9
console.log(minGroup2([1, 2, 8, 9, 10, 12], 1))
