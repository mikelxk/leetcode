/**
 * Given array of number, find pairs with the same sum,
 * there will only be 1 combination of the pair with same sum
 * Find sum of its efficiency : [a, b] = a * b 
 * @param skills 
 * @returns sum of effiency
 */
function getEfficiency(skills: number[]) {
  let m = new Map<number, [number, number][]>()
  let n = skills.length
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      let [a, b] = [skills[i], skills[j]]
      let sum = a + b
      if (m.has(sum)) {
        m.get(sum).push([a, b])
      } else {
        m.set(sum, [[a, b]])
      }
    }
  }
  for (let v of m.values()) {
    if (v.length >= n / 2) {
      const set = new Set(v.flat())
      if (set.size == v.length * 2) {
        let sum = 0
        for (const [a, b] of v) {
          sum += a * b
        }
        return sum
      }
    }
  }
  return -1
}

console.log(getEfficiency([5, 4, 2, 1]))
