function serialize(root: TreeNode | null): string {
  function serializeHelper(root: TreeNode | null, str: string) {
    if (!root) {
      str += "null,"
    } else {
      str += `${root.val},`
      str = serializeHelper(root.left, str)
      str = serializeHelper(root.right, str)
    }
    return str
  }
  return serializeHelper(root, "")
}

function deserialize(data: string): TreeNode | null {
  function deserializeHelper(list: string[]) {
    if (list[0] === "null") {
      list.shift()
      return null
    }
    let root = new TreeNode(Number(list[0]))
    list.shift()
    root.left = deserializeHelper(list)
    root.right = deserializeHelper(list)
    return root
  }
  return deserializeHelper(data.split(","))
}
console.log(deserialize("1,2,3,null,null,4,5"))