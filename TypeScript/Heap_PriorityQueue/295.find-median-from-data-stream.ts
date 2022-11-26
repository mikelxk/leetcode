import {
  MinPriorityQueue,
  MaxPriorityQueue,
} from "@datastructures-js/priority-queue"

class MedianFinder {
  lower = new MaxPriorityQueue({ priority: num => num })
  upper = new MinPriorityQueue({ priority: num => num })
  constructor() {}

  addNum(num: number): void {
    this.lower.enqueue(num)
    if (
      this.lower.size() > this.upper.size() + 1 ||
      (this.upper.size() != 0 && this.lower.front().element > this.upper.front().element)
    ) {
      this.upper.enqueue(this.lower.front().element)
      this.lower.dequeue()
    }
    if (this.upper.size() > this.lower.size() + 1) {
      this.lower.enqueue(this.upper.front().element)
      this.upper.dequeue()
    }
  }

  findMedian(): number {
    let maxSize = this.lower.size()
    let minSize = this.upper.size()
    if (maxSize == minSize) {
      return (this.upper.front().element + this.lower.front().element) / 2
    } else if (maxSize > minSize) {
      return this.lower.front().element
    } else {
      return this.upper.front().element
    }
  }
}
let mf = new MedianFinder()
mf.addNum(1)
console.log(mf.findMedian())
