class TreeNode {
  children?: TreeNode[]
  val: any
  constructor(val: any, children?: TreeNode[]) {
    this.val = val
    this.children = children
  }
}
function prune(root: TreeNode, set: Set<any>) {
  return pruneHelper(root)

  function pruneHelper(node?: TreeNode) {
    if (!node) {
      return
    }
    //rule 1: remove node not in set. Can be done during O(n) using dfs
    const rule1 = (n: TreeNode) => set.has(n.val)
    const noChild = (n: TreeNode) =>
      !n.children || n.children.filter(c => c != undefined).length === 0
    //rule 2: have descendants use filter to get count here
    const rule2 = (n: TreeNode) => !noChild(n)
    //rule 3: whether a node has only single chile
    const onlyOneSibling = (n: TreeNode) =>
      !noChild(n) && n.children.filter(c => c != undefined).length === 1

    if (!rule2(node)) {
      if (!rule1(node)) {
        return
      }
    }
    //multiples child
    else {
      if (onlyOneSibling(node)) {
        node.children = node.children?.filter(i => i)
        let onlyChild = node.children[0]
        if (noChild(onlyChild)) {
          if (!rule1(onlyChild)) {
            node.children[0] = undefined
            return undefined
          }
        }
        onlyChild = pruneHelper(onlyChild)
      }
      for (let i = 0; i < node.children!.length; ++i) {
        let child = node.children![i]
        child = pruneHelper(child)!
      }
    }

    return node
  }
}
//use recursive dfs to print tree
function printTree(root: TreeNode) {
  if (!root) {
    return
  }
  let res: string[][] = []
  printTreeHelper(root, 0)
  for (const s of res) {
    console.log(s)
  }

  function printTreeHelper(root: TreeNode, depth: number) {
    if (!root) {
      return
    }
    if (res.length == depth) {
      res.push([])
    }
    res[depth].push(root.val)
    if (root.children) {
      for (let child of root.children) {
        printTreeHelper(child, depth + 1)
      }
    }
  }
}
function testPrint() {
  let b = new TreeNode("B")
  let c = new TreeNode("C")
  let a = new TreeNode("A", [b, c])
  printTree(a)
}
function testRule1() {
  let b = new TreeNode("B")
  let c = new TreeNode("C")
  let a = new TreeNode("A", [b, c])
  let s = new Set(["A", "B", "C"])
  let n = prune(a, s)
  printTree(n!)
}
function testRule2() {
  let b = new TreeNode("B")
  let c = new TreeNode("C")
  let a = new TreeNode("A", [b, c])
  let s = new Set("B")
  let n = prune(a, s)
  printTree(n!)
}
function testRule3() {
  let d = new TreeNode("D")
  let e = new TreeNode("E")
  let b = new TreeNode("B", [d, e])
  let f = new TreeNode("F")
  let c = new TreeNode("C", [f])
  let a = new TreeNode("A", [b, c])
  let s = new Set("E")
  let n = prune(a, s)
  printTree(n!)
}
testRule3()
