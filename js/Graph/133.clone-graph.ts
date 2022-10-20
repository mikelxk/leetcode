class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}
function cloneGraph(node: Node | null): Node | null {
  let visited = {}
  function dfs(node: Node | null) {
    if (!node) {
      return node
    }
    if (visited[node.val]) {
      return visited[node.val]
    }
    const copy = new Node(node.val)
    visited[node.val] = copy
    node.neighbors.forEach(n => {
      copy.neighbors.push(dfs(n))
    })
    return copy
  }
  return dfs(node)
}
