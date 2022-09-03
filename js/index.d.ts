declare interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null)
}
declare interface ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null)
}

