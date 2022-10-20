const rates: [string, string, number][] = [
  ["USD", "JPY", 110],
  ["USD", "AUD", 1.45],
  ["JPY", "GBP", 0.007],
]
const SRC = "GBP"
const DEST = "AUD"
function main() {
  let graph = new Map<string, Map<string, number>>()
  //construct map
  function insertM(x: string, y: string, n: number) {
    if (!graph.has(x)) {
      graph.set(x, new Map())
    }
    graph.get(x).set(y, n)
  }
  for (let [from, to, curr] of rates) {
    insertM(from, to, curr)
    insertM(to, from, 1 / curr)
  }
  let res = [-1]
  getWeight(SRC, DEST, new Set<string>())
  console.log(res)
  function getWeight(
    start: string,
    end: string,
    visited: Set<string>,
    rate = 1
  ) {
    if (visited.has(start) || !graph.has(start)) {
      return
    }
    if (graph.get(start).has(end)) {
      res.push(graph.get(start).get(end) * rate)
    }
    visited.add(start)
    for (let [k, v] of graph.get(start).entries()) {
      getWeight(k, end, visited, v * rate)
    }
  }
}
main()
