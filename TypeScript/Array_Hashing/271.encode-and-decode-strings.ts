const deli = String.fromCharCode(257)
function encode(strs: string[]): string {
  return strs.join(deli)
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  return s.split(deli)
}

function encode1(strs: string[]): string {
  return strs.map(str => `${str.length}#${str}`).join("")
}

/**
 * Decodes a single string to a list of strings.
 */
function decode1(s: string): string[] {
  const res = []
  let i = 0

  while (i < s.length) {
    let j = i
    while (s[j] !== "#") {
      ++j
    }

    const len = Number(s.slice(i, j))
    ++j
    res.push(s.slice(j, j + len))
    i = j + len
  }
  return res
}
