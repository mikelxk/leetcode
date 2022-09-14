function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [[]]
  }
  let res: number[][] = []
  let queue = [root]
  let level = 1
  while (queue[0]) {
    let size = queue.length
    let arr: number[] = []
    while (size--) {
      let node = queue.shift()
      level % 2 ? arr.push(node!.val) : arr.unshift(node!.val)
      if (node?.left) {
        queue.push(node.left)
      }
      if (node?.right) {
        queue.push(node.right)
      }
      res.push(arr)
      ++level
    }
  }
  return res
}
// Time O(N)
function zigzagLevelOrderRe(root: TreeNode | null) {
  let res: number[][] = []
  dfs(root, 0)
  return res
  function dfs(node: TreeNode | null, level: number) {
    if (!node) {
      return
    }
    if (!res[level]) {
      res[level] = []
    }
    if (level % 2 == 0) res[level].push(node.val)
    else res[level].unshift(node.val)

    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}
