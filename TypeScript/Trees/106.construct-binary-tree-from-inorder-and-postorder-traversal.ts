function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length && !postorder.length) return null
  let root = new TreeNode(postorder.at(-1))
  let mid = inorder.indexOf(root.val)
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, -1))
  return root
}
