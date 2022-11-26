function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head
  while (fast?.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
