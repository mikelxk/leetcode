function checkIfPangram(sentence: string): boolean {
  return new Set(sentence).size === 26
}
