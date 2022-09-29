enum Color {
  Red = "Red",
  Blue = "Blue",
  Green = "Green",
  Black = "Black",
  White = "White",
}
type tokenCnt = Map<Color, number>
type Costs = Map<Color, tokenCnt>
type Cards = Map<Color, number>
class cardGame {
  inhand: tokenCnt = new Map<Color, number>()
  costs: Costs = new Map<Color, tokenCnt>()
  ownedCards: Cards = new Map<Color, number>()
  constructor() {
    for (let c in Color) {
      this.inhand.set(c as Color, 0)
      this.ownedCards.set(c as Color, 0)
    }
  }
  canPurchase(c: Color) {
    for (const [color, num] of this.costs.get(c).entries()) {
      if (num > this.inhand.get(color)) {
        return false
      }
    }
    return true
  }
  purchase(c: Color) {
    if (this.canPurchase(c)) {
      for (const [color, num] of this.costs.get(c).entries()) {
        this.inhand.set(color, this.inhand.get(color) - num)
      }
    }
  }
  print() {
    console.log(this.inhand)
  }
}
let c = new cardGame()
let m: Costs = new Map<Color, tokenCnt>()

let ih: tokenCnt = new Map<Color, number>([
  [Color.Blue, 2],
  [Color.Green, 1],
])
c.inhand = ih

let redC = new Map<Color, tokenCnt>([[Color.Red, ih]])
c.costs = redC
c.purchase(Color.Red)
c.print()
