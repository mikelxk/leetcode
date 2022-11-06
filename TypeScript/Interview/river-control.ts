function riverControl(cmds: string[], n: number) {
  let [row, col] = [0, 0]
  for (const cmd of cmds) {
    if (cmd === "UP" && row > 0) --row
    else if (cmd === "DOWN" && row < n - 1) ++row
    else if (cmd === "LEFT" && row > 0) --col
    else if (cmd === "RIGHT" && col < n - 1) ++col
  }
  return row * n + col
}
console.log(riverControl(["RIGHT", "UP", "DOWN", "LEFT", "DOWN", "DOWN"], 4))
