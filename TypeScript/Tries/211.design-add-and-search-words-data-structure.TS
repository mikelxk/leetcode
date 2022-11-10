class TrieNode {
  isWord = false
  children = new Map<string, TrieNode>()
}
class WordDictionary {
  root = new TrieNode()
  addWord(word: string): void {
    let node = this.root
    for (let c of word) {
      if (!node.children.has(c)) {
        node.children.set(c, new TrieNode())
      }
      node = node.children.get(c)
    }
    node.isWord = true
  }
  search(word: string) {
    return this.searchInNode(word, this.root)
  }
  searchInNode(word: string, node: TrieNode): boolean {
    for (let i = 0; i < word.length; ++i) {
      let c = word[i]
      if (!node.children.has(c)) {
        if (c === ".") {
          for (let child of node.children.values()) {
            if (this.searchInNode(word.substring(i + 1), child)) {
              return true
            }
          }
        }
        return false
      } else {
        node = node.children.get(c)
      }
    }
    return node.isWord
  }
}
