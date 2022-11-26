function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head
  while (fast?.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return fast
    }
  }
  return null
}
