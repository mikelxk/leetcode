/**
 * Given array of number, find pairs with the same sum,
 * there will only be 1 combination of the pair with same sum
 * Find sum of its efficiency : [a, b] = a * b
 * @param skills
 * @returns sum of effiency
 */
function getEfficiency(skills: number[]) {
  let effi = skills[0] + skills.at(-1)
  let n = skills.length
  let sum = 0
  for (let l = 0; l < n; ++l) {
    let r = n - l - 1
    if (l >= r) {
      break
    }
    if (skills[l] + skills[r] !== effi) {
      return -1
    }
    sum += skills[l] * skills[r]
  }
  return sum
}

console.log(getEfficiency([5, 4, 2, 1]))
