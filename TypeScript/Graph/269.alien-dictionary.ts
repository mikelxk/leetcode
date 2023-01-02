function alienOrder(words: string[]): string {
  let adj: { [key: string]: Set<string> } = {}
  for (let word of words) {
    for (let c of word) {
      adj[c] = new Set()
    }
  }
  for (let i = 0; i < words.length - 1; ++i) {
    let w1 = words[i],
      w2 = words[i + 1]
    let len1 = w1.length,
      len2 = w2.length
    let minLen = Math.min(len1, len2)
    if (len1 > len2 && w1.slice(0, minLen) === w2.slice(0, minLen)) {
      return ""
    }
    for (let j = 0; j < minLen; ++j) {
      if (w1[j] !== w2[j]) {
        adj[w1[j]].add(w2[j])
        break
      }
    }
  }
  let visited: { [key: string]: boolean } = {}
  let res: string[] = []
  function dfs(c: string) {
    if (c in visited) {
      return visited[c]
    }
    visited[c] = true
    for (let nei of adj[c]) {
      if (dfs(nei)) {
        return true
      }
    }
    visited[c] = false
    res.push(c)
  }
  for (let c in adj) {
    if (dfs(c)) {
      return ""
    }
  }
  return res.reverse().join("")
}
console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]))
