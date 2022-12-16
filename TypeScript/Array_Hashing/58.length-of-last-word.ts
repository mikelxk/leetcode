function lengthOfLastWord(s: string): number {
  s = s.trim()
  return s.length - s.lastIndexOf(" ") - 1
}
