class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
class Solution {
  head: ListNode
  constructor(head: ListNode | null) {
    this.head = head
  }
  getRandom(): number {
    let curr = this.head
    let res = 0
    for (let cnt = 1; curr; ++cnt, curr = curr.next) {
      if (Math.random() < 1 / cnt) {
        res = curr.val
      }
    }
    return res
  }
}
