function solution(deck1: number[], deck2: number[]): number {
  let res = 0
  while (deck1.length != 0 && deck2.length != 0) {
    if (deck1[0] >= deck2[0]) {
      deck1.push(deck1.shift()!)
      deck1.push(deck2.shift()!);
    }
    else {
      deck2.push(deck2.shift()!);
      deck2.push(deck1.shift()!);
    }
    ++res
  }
  return res
}
console.log(solution([1, 3, 5],[3, 6, 3]))