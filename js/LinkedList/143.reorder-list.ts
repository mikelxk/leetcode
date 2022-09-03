function reorderList(head: ListNode | null): void {
  if (!head) {
    return
  }
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next!
  }
  let prev: ListNode = null!,
    curr = slow
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next!
  }
  let first = head,
    second = prev
  while (second.next) {
    let temp = first.next!
    first.next = second
    first = temp

    temp = second.next
    second.next = first
    second = temp
  }
}
