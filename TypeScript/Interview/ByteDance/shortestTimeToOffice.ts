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
  dist.set(startNode,0)

  for (let [u, v, w] of paths) {
    init(u)
    init(v)
    let d = Number(w)
    dist.set(v, Math.min(dist.get(v), dist.get(u) + d))
  }
  console.log(dist)
}
get_shortest_time("S0","S4",[["S0","S11","16"],["S0","S12","22"]])