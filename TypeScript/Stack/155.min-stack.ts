class MinStack {
  stack = new Array<[number, number]>()

  push(val: number): void {
    if (this.stack.length !== 0) {
      let currMin = this.stack.at(-1)[1]
      this.stack.push([val, Math.min(currMin, val)])
    } else {
      this.stack.push([val, val])
    }
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack.at(-1)[0]
  }

  getMin(): number {
    return this.stack.at(-1)[1]
  }
}
