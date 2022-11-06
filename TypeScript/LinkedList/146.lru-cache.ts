class node<T> {
  key: T
  val: T
  prev: node<T> = null
  next: node<T> = null
  constructor(key: T, value: T) {
    this.key = key
    this.val = value
  }
}
class LRUCache {
  left = new node(0, 0)
  right = new node(0, 0)
  cache = new Map<number, node<number>>()
  cap = 0
  constructor(capacity: number) {
    this.cap = capacity
    this.left.next = this.right
    this.right.prev = this.left
  }
  get(key: number) {
    if (!this.cache.has(key)) {
      return -1
    }
    let node = this.cache.get(key)
    this.remove(node)
    this.insert(node)
    return node.val
  }
  put(key: number, value: number) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key))
    }
    let n = new node(key, value)
    this.cache.set(key, n)
    this.insert(n)
    if (this.cache.size > this.cap) {
      let lru = this.left.next
      this.remove(lru)
      this.cache.delete(lru.key)
    }
  }
  remove(n: node<number>) {
    let { prev, next } = n
    prev.next = next
    next.prev = prev
  }
  insert(n: node<number>) {
    let [prev, next] = [this.right.prev, this.right]
    prev.next = n
    next.prev = n
    n.prev = prev
    n.next = next
  }
}
