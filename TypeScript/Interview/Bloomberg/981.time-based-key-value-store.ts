class TimeMap {
  keyTimeMap = new Map<string, [number, string][]>()
  set(key: string, value: string, timestamp: number): void {
    if (!this.keyTimeMap.has(key)) {
      this.keyTimeMap.set(key, [])
    }
    this.keyTimeMap.get(key).push([timestamp, value])
  }
  get(key: string, timestamp: number): string {
    let k = this.keyTimeMap.get(key)
    if (!k || timestamp < k[0][0]) {
      return ""
    }
    let [l, r] = [0, k.length]
    while (l < r) {
      let mid = Math.floor((l + r) / 2)
      if (k[mid][0] <= timestamp) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    if (r === 0) {
      return ""
    }
    return k[r - 1][1]
  }
}
