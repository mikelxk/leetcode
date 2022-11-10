function searchWord_ResultWord(searchWord: string, resultWord: string) {
  let [p1, p2] = [0, 0]
  const searchLen = searchWord.length
  while (p1 < searchLen && p2 < resultWord.length) {
    if (searchWord[p1] === resultWord[p2]) {
      ++p2
    }
    ++p1
  }
  return searchLen - p2
}
console.log(searchWord_ResultWord("armaze", "amazon"))
