function deleteNode(node: ListNode | null): void {
  let { next } = node
  node.val = next.val
  node.next = next.next
}
