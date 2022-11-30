function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode(0, head)
  let groupPrev = dummy
  while (true) {
    let kth = getKth(groupPrev, k)
    if (!kth) {
      break
    }
    let groupNext = kth.next
    let prev = kth.next,
      curr = groupPrev.next

    while (curr !== groupNext) {
      var tmp = curr.next
      curr.next = prev
      prev = curr
      curr = tmp
    }
    tmp = groupPrev.next
    groupPrev.next = kth
    groupPrev = tmp
  }
  return dummy.next
  function getKth(curr: ListNode, k: number) {
    while (curr && k > 0) {
      curr = curr.next
      --k
    }
    return curr
  }
}
