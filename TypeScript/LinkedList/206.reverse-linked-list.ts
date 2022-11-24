/**
 *  Iterative
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head
  while (curr) {
    let tmp = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
  }
  return prev
}
