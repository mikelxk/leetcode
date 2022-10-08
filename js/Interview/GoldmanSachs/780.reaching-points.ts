function reachingPoints(
  sx: number,
  sy: number,
  tx: number,
  ty: number
): boolean {
  while (tx >= sx && ty >= sy) {
    if (tx == ty) break
    else if (tx > ty) {
      if (ty > sy) {
        ty %= sy
      } else {
        return (tx - sx) % ty === 0
      }
    } else {
      if (ty > sx) {
        ty %= tx
      } else {
        return (ty - sy) % tx === 0
      }
    }
  }
  return tx === sx && ty === sy
}
