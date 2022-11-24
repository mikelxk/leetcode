function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null
  }
  let head = lists[0]
  for (let i = 1; i < lists.length; ++i) {
    head = merge(head, lists[i])
  }
  return head
  function merge(l1: ListNode, l2: ListNode) {
    if (!l1) return l2
    if (!l2) return l1
    let node: ListNode
    if (l1.val <= l2.val) {
      node = l1
      node.next = merge(l1.next, l2)
    } else {
      node = l2
      node.next = merge(l1, l2.next)
    }
    return node
  }
}
