// Backtracking
// Time: Theta(log(n)^(target/min)) O(n^(target/min))
// Space: Theta(log(n)*(target/min)^2) O(n*(target/min)^2)
function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const combos: number[][] = []
  const combo: number[] = []
  const set = new Set(candidates)
  buildCombo(target)
  return combos
  function buildCombo(target: number, start = 0) {
    if (set.has(target)) {
      combo.push(target)
      combos.push([...combo])
      combo.pop()
    }
    const mid = Math.floor(target / 2)
    for (let i = start; i < candidates.length && candidates[i] <= mid; ++i) {
      const candidate = candidates[i]
      combo.push(candidate)
      buildCombo(target - candidate, i)
      combo.pop()
    }
  }
}
function combinationSum2(candidates: number[], target: number): number[][] {
  let res: number[][] = []
  dfs(0, [], 0)
  return res
  function dfs(i: number, cur: number[], total: number) {
    if (total === target) {
      res.push([...cur])
      return
    }
    if (i >= candidates.length || total > target) {
      return
    }
    cur.push(candidates[i])
    dfs(i, cur, total + candidates[i])
    cur.pop()
    dfs(i + 1, cur, total)
  }
}
