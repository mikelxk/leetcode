function processLogs(logs: string[], threshold: number) {
  const m = new Map<string, number>()
  function setWithDefault(key: string) {
    if (m.has(key)) {
      m.set(key, m.get(key)! + 1)
    } else {
      m.set(key, 1)
    }
  }
  for (const log of logs) {
    const [id1, id2, transNum] = log.split(" ")
    setWithDefault(id1)
    if (id1 !== id2) {
      setWithDefault(id2)
    }
  }
  const res: string[] = []
  for (const [id, occur] of m) {
    if (occur >= threshold) {
      res.push(id)
    }
  }
  res.sort((a, b) => parseInt(a) - parseInt(b))
  return res
}

function test() {
  let logs = [
    "345366 89921 45",
    "029323 38239 23",
    "38239 345366 15",
    "029323 38239 77",
    "345366 38239 23",
    "029323 345366 13",
    "38239 38239 23",
  ]
  return processLogs(logs, 3)
}
console.log(test())
