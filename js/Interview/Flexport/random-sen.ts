function getRandString(iter: Iterable<string>) {
  let items = Array.from(iter)
  return items.at(Math.random() * items.length)
}
function genNewSentence(words: string, n: number) {
  let wordArr = words.split(" ")
  let wordMap = new Map<string, Set<string>>()
  for (let i = 0; i < wordArr.length; ++i) {
    let k = wordArr[i]
    let nextWord = i === wordArr.length - 1 ? wordArr[0] : wordArr[i + 1]
    if (!wordMap.has(k)) {
      wordMap.set(k, new Set())
    }
    wordMap.get(k).add(nextWord)
  }
  let randArr = [getRandString(wordArr)]
  for (let i = 1; i < n; ++i) {
    let lastWord = randArr.at(-1)
    randArr.push(getRandString(wordMap.get(lastWord)))
  }
  return randArr.join(" ")
}
function getNewWord(words: string, n: number, k: number) {
  let wordArr = words.split(" ")
  let wordMap = new Map<string, Set<string>>()
  function getKword(index: number) {
    let res: string[] = []
    for (let n = index, i = 0; i < k; ++i, ++n) {
      if (n > wordArr.length - 1) {
        n -= wordArr.length
      }
      res.push(wordArr[n])
    }
    return res
  }
  for (let i = 0; i < wordArr.length; ++i) {
    let kWord = getKword(i)
    console.log(kWord)
  }
}
console.log(
  getNewWord("this is a sentence it is not a good one and it is also bad", 5, 2)
)
