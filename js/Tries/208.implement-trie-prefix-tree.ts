class TrieNode {
  isWord = false
  children = new Map<string, TrieNode>()
}
class Trie {
  root = new TrieNode()
  insert(word: string): void {
    let node = this.root
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode())
      }
      node = node.children.get(char)
    }
    node.isWord = true
  }
  search(word: string): boolean {
    let node = this.root
    for (let char of word) {
      if (!node.children.has(char)) {
        return false
      }
      node = node.children.get(char)
    }
    return node.isWord
  }
  startsWith(prefix: string): boolean {
    let node = this.root
    for (let char of prefix) {
      if (!node.children.has(char)) {
        return false
      }
      node = node.children.get(char)
    }
    return true
  }
}

let t = new Trie()
t.insert("apple")
console.log(t.search("apple"))
