function evenOrOddString(strArr: string[]) {
  let evenCnt = 0
  for (let s of strArr) {
    for (let c of s) {
      if (c.charCodeAt(0) % 2 === 0) {
        ++evenCnt
        break
      }
    }
  }
  return (strArr.length - evenCnt) % 2 === 0 ? "Even" : "Odd"
}
console.log(evenOrOddString(["abc", "abcd"]))
