function get_shortest_time(
  startNode: string,
  endNode: string,
  paths: [string, string, string][]
) {
  let dist = new Map<string, number>()
  function init(x: string) {
    if (!dist.has(x)) {
      dist.set(x, Infinity)
    }
  }
  for (let [u, v] of paths) {
    init(u)
    init(v)
  }
  dist.set(startNode, 0)
  for (let i = 1; i < dist.size; ++i) {
    for (let [u, v, w] of paths) {
      let d = Number(w)
      dist.set(v, Math.min(dist.get(v), dist.get(u) + d))
    }
  }
  return dist.get(endNode)
}
console.log(
  get_shortest_time("S0", "S4", [
    ["S0", "S11", "16"],
    ["S0", "S12", "22"],
    ["S12", "S4", "5"],
    ["S11", "S4", "15"],
  ])
)
