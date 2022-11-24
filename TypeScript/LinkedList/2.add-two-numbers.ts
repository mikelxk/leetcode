function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0)
  let curr = dummy
  let carry = 0
  while (l1 || l2 || carry) {
    let x = l1?.val || 0
    let y = l2?.val || 0
    let sum = x + y + carry
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    l1 = l1?.next
    l2 = l2?.next
  }
  return dummy.next
}
