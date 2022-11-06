function removeDuplicates(s: string, k: number): string {
  let count: [number, string][] = []
  for (let c of s) {
    let top = count.at(-1)
    if (count.length === 0 || c !== top[1]) {
      count.push([1, c])
    } else if (++top[0] === k) {
      count.pop()
    }
  }
  return count.map(([cnt, char]) => char.repeat(cnt)).join("")
}
console.log(removeDuplicates("abcd", 2))
