function longestPalindrome(s: string): string {
  let res = ""
  let maxLen = 0
  for (let i = 0; i < s.length; ++i) {
    function expand(l: number, r: number) {
      while (l >= 0 && r < s.length && s[l] == s[r]) {
        let currLen = r - l + 1
        if (currLen > maxLen) {
          res = s.substring(l, r + 1)
          maxLen = currLen
        }
        --l
        ++r
      }
    }
    expand(i, i)
    expand(i, i + 1)
  }
  return res
}
console.log(longestPalindrome("cbbd"))
//aba -> #a#b#a#
function prepocess(s: string) {
  let p = s.split("").join("#")
  return `#${p}#`
}
//use manacher
function longestPalindromeMan(s: string) {
  // Update the string to put hash "#" at the beginning, end and in between each character
  let updatedString = prepocess(s)
  // Length of the array that will store the window of palindromic substring
  const length = 2 * s.length + 1
  // Array to store the length of each palindrome centered at each element
  let p = new Array(length)
  p.fill(0)
  // Current center of the longest palindromic string
  let c = 0
  // Right boundary of the longest palindromic string
  let r = 0
  // Maximum length of the substring
  let maxLength = 0
  // Position index
  let position = -1
  for (let i = 0; i < length; i++) {
    // Mirror of the current index
    let mirror = 2 * c - i
    // Check if the mirror is outside the left boundary of current longest palindrome
    if (i < r) {
      p[i] = Math.min(r - i, p[mirror])
    }
    // Indices of the characters to be compared
    let a = i + (1 + p[i])
    let b = i - (1 + p[i])
    // Expand the window
    while (a < length && b >= 0 && updatedString[a] === updatedString[b]) {
      p[i]++
      a++
      b--
    }
    // If the expanded palindrome is expanding beyond the right boundary of
    // the current longest palindrome, then update c and r
    if (i + p[i] > r) {
      c = i
      r = i + p[i]
    }
    if (maxLength < p[i]) {
      maxLength = p[i]
      position = i
    }
  }
  let offset = p[position]
  return updatedString
    .substring(position - offset + 1, position + offset)
    .split("#")
    .join("")
}
