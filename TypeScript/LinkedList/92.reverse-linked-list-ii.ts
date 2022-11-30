function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummy = new ListNode(0, head)
  let leftPrev = dummy,
    curr = head

  for (let i = 0; i < left - 1; ++i) {
    ;[leftPrev, curr] = [curr, curr.next]
  }
  let prev = null
  for (let i = left; i < right + 1; ++i) {
    let tmp = curr.next
    curr.next = prev
    ;[prev, curr] = [curr, tmp]
  }
  leftPrev.next.next = curr
  leftPrev.next = prev
  return dummy.next
}
