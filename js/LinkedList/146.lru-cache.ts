class LRUCache {
  capacity: number
  cacheMap: Map<number,number>
  constructor(capacity: number) {
    this.capacity = capacity
    this.cacheMap = new Map()
  }
  get(key: number) {
    if (!this.cacheMap.has(key)) {
      return -1
    }
    const value = this.cacheMap.get(key)
    this.cacheMap.delete(key)
    this.cacheMap.set(key, value)
    return value
  }
  put(key: number, value: number) {
    if (this.cacheMap.has(key)) {
      this.cacheMap.delete(key)
    } else if (this.cacheMap.size === this.capacity) {
      const leastRecentlyUsedKey = this.cacheMap.keys().next().value
      this.cacheMap.delete(leastRecentlyUsedKey)
    }
    this.cacheMap.set(key, value)
  }
}
