class Node {
  val: number
  left: Node | null
  right: Node | null
  parent: Node | null
  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    parent?: Node | null
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.parent = parent === undefined ? null : parent
  }
}
export function lowestCommonAncestor(
  p: Node | null,
  q: Node | null
): Node | null {
  let a = p,
    b = q
  while (a !== b) {
    a = a?.parent || p
    b = b?.parent || q
  }
  return a
}
