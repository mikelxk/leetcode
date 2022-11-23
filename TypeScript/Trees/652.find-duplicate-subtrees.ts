function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  let res: TreeNode[] = []
  let cnt = new Map<string, number>()
  postOrder(root)
  return res
  function postOrder(node: TreeNode | null) {
    if (!node) {
      return "#"
    }
    let left = postOrder(node.left)
    let right = postOrder(node.right)
    let serial = `${node.val}#${left}#${right}`
    cnt.set(serial, (cnt.get(serial) || 0) + 1)
    if (cnt.get(serial) == 2) {
      res.push(node)
    }
    return serial
  }
}
