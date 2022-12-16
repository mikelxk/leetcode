class ProductOfNumbers {
  arr = [1]

  add(num: number): void {
    if (num === 0) {
      this.arr = [1]
    } else {
      this.arr.push(num * this.arr.at(-1))
    }
  }

  getProduct(k: number): number {
    return k < this.arr.length ? this.arr.at(-1) / this.arr.at(-k - 1) : 0
  }
}
