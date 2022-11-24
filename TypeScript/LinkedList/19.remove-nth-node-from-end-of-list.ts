function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0)
  dummy.next = head
  let first = dummy
  let second = dummy
  for (let i = 1; i <= n + 1; ++i) {
    first = first.next
  }
  while (first) {
    first = first.next
    second = second.next
  }
  second.next = second.next.next
  return dummy.next
}
