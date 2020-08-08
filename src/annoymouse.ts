export {};

const bmi2 = (height: number, weight:number):number => {
  return weight / (height*height)
}

console.log(bmi2(1.80, 81))

let bmi: (height: number, weight: number) => number = function (height: number, weight:number): number {
  return weight / (height*height)
}

console.log(bmi(1.80, 81))