export {};

type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const sasaki: Pitcher1 = {
  throwingSpeed: 154
}

const otiai: Batter1 = {
  battingAverage: 0.367
}
console.log(sasaki)
console.log(otiai)

type TwowayPlayer = Pitcher1 & Batter1

const otani: TwowayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}

console.log('otani :', otani)

