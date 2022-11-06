function asteroidCollision(asteroids: number[]): number[] {
  let stack: number[] = []
  for (let aster of asteroids) {
    let add = true
    if (aster < 0) {
      while (stack.length !== 0 && stack.at(-1) > 0) { 
        let top = stack.at(-1)
        if (top < -aster) {
          stack.pop()
        } else if (top === -aster) {
          stack.pop()
          add = false
        } else {
          add = false
        }
        if (!add) break
      }
    }
    if (add) stack.push(aster)
  }
  return stack
}
console.log(asteroidCollision([5, 10, -5]))
