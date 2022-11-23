function generateTrees(n: number): Array<TreeNode | null> {
  if (n == 0) {
    return []
  }
  return generateHelper(1, n)
  function generateHelper(start: number, end: number) {
    let res: Array<TreeNode | null> = []
    if (start > end) {
      res.push(null)
      return res
    }
    for (let i = start; i <= end; ++i) {
      let leftTree = generateHelper(start, i - 1)
      let rightTree = generateHelper(i + 1, end)
      for (let l of leftTree) {
        for (let r of rightTree) {
          let curr = new TreeNode(i)
          curr.left = l
          curr.right = r
          res.push(curr)
        }
      }
    }
    return res
  }
}
