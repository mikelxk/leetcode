function isPanagram(panagram: string) {
  let s = new Set<string>()
  for (let c of panagram) {
    s.add(c)
  }
  return s.size === 26
}
