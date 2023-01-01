function closetTarget(
  words: string[],
  target: string,
  startIndex: number
): number {
  let n = words.length
  let idxs = words.map((w, i) => (w === target ? i : -1)).filter(i => i != -1)
  let res = Infinity
  console.log(idxs)
  for (let i of idxs) {
    res = Math.min(res, getDiff(i))
  }
  return res !== Infinity ? res : -1
  function getDiff(idx: number) {
    if (startIndex === idx) {
      return 0
    }
    let diff = Math.abs(idx - startIndex)
    if (startIndex > idx) {
      let rotateDiff = Math.abs(idx + (n - startIndex))
      return Math.min(diff, rotateDiff)
    } else {
      let rotateDiff = Math.abs(startIndex + (n - idx))
      return Math.min(diff, rotateDiff)
    }
  }
}
console.log(
  closetTarget(
    [
      "pgmiltbptl",
      "jnkxwutznb",
      "bmeirwjars",
      "ugzyaufzzp",
      "pgmiltbptl",
      "sfhtxkmzwn",
      "pgmiltbptl",
      "pgmiltbptl",
      "onvmgvjhxa",
      "jyzdtwbwqp",
    ],
    "pgmiltbptl",
    4
  )
)
