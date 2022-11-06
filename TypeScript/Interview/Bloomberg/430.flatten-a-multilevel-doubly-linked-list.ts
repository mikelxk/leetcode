class Node {
  val: number
  prev: Node | null
  next: Node | null
  child: Node | null
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = val === undefined ? 0 : val
    this.prev = prev === undefined ? null : prev
    this.next = next === undefined ? null : next
    this.child = child === undefined ? null : child
  }
}
function flatten(head: Node | null): Node | null {
  if (!head) {
    return head
  }
  let dummy = new Node(0, null, head, null)
  dfs(dummy, head)
  dummy.next.prev = null
  return dummy.next
  function dfs(prev: Node, curr: Node) {
    if (!curr) return prev
    curr.prev = prev
    prev.next = curr
    let next = curr.next
    let tail = dfs(curr, curr.child)
    curr.child = null
    return dfs(tail, next)
  }
}
function flattenPreorder(head: Node | null): Node | null {
  if (!head) {
    return head
  }
  let dummy = new Node(0, null, head, null)
};
