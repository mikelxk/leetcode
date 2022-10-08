type trans = {
  index: number
  time: number
  city: string
  amount: number
}
function invalidTransactions(transactions: string[]): string[] {
  let res = new Array<string>()
  let transMap = new Map<string, trans[]>()
  let n = transactions.length
  let invalidTrans = new Array<boolean>(n)
  for (let i = 0; i < n; ++i) {
    let transaction = transactions[i]
    let [people, t, am, city] = transaction.split(",")
    let [amount, time] = [Number(am), Number(t)]
    if (amount > 1000) {
      invalidTrans[i] = true
    }
    if (!transMap.has(people)) {
      transMap.set(people, [])
    }
    let otherTrans = transMap.get(people)
    otherTrans.push({ time, city, amount, index: i })
    for (let t of otherTrans) {
      if (t.city !== city && Math.abs(t.time - time) <= 60) {
        invalidTrans[i] = true
        invalidTrans[t.index] = true
        continue
      }
    }
  }
  for (let i = 0; i < n; ++i) {
    if (invalidTrans[i]) {
      res.push(transactions[i])
    }
  }
  return res
}
console.log(
  invalidTransactions([
    "alice,20,800,mtv",
    "bob,50,1200,mtv",
    "alice,20,800,mtv",
    "alice,50,1200,mtv",
    "alice,20,800,mtv",
    "alice,50,100,beijing",
  ])
)
