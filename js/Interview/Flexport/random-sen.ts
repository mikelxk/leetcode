function getRandString(iter: Iterable<string>) {
  let items = Array.from(iter)
  return items[Math.floor(Math.random() * items.length)]
}
function genNewSentence(words: string, n: number) {
  let wordArr = words.split(" ")
  let wordMap = new Map<string, Set<string>>()
  for (let i = 0; i < wordArr.length; ++i) {
    let k = wordArr[i]
    let v = i === wordArr.length - 1 ? wordArr[0] : wordArr[i + 1]
    if (wordMap.has(k)) {
      wordMap.get(k).add(v)
    } else {
      wordMap.set(k, new Set([v]))
    }
  }
  let randWord = getRandString(wordArr)
  let res = ""
  for (let i = 0; i < n; ++i) {
    res += `${randWord} `
    randWord = getRandString(wordMap.get(randWord))
  }
  return res
}
console.log(
  genNewSentence(
    "this is a sentence it is not a good one and it is also bad",
    5
  )
)
