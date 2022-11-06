/**
 * Complete the 'getTheGroups' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY queryType
 *  3. INTEGER_ARRAY students1
 *  4. INTEGER_ARRAY students2
 */
function getTheGroups(
  n: number,
  queryType: string[],
  students1: number[],
  students2: number[]
): number[] {
  let res: number[] = []
  let id = Array.from({ length: n + 1 }, (_, i) => i)
  for (let i = 0; i < queryType.length; ++i) {
    let a = students1[i]
    let b = students2[i]
    if (queryType[i] == "Friend") {
      let tmp = id[b]
      for (let j = 0; j < id.length; ++j) {
        if (id[j] === tmp) {
          id[j] = id[a]
        }
      }
    } else if (queryType[i] == "Total") {
      let aSize = 0
      let bSize = 0
      for (let i of id) {
        if (i === id[a]) {
          ++aSize
        }
        if (i === id[b]) {
          ++bSize
        }
      }
      if (id[a] === id[b]) {
        res.push(aSize)
        continue
      }
      res.push(aSize + bSize)
    }
  }
  return res
}
console.log(
  getTheGroups(
    10,
    [
      "Friend",
      "Total",
      "Friend",
      "Total",
      "Friend",
      "Total",
      "Friend",
      "Total",
      "Friend",
      "Total",
    ],
    [2, 4, 9, 1, 4, 10, 7, 10, 8, 1],
    [6, 1, 7, 8, 9, 9, 4, 7, 2, 6]
  )
)
