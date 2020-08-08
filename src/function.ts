export {};

function bmi(height: number, weight:number):number {
  return weight / (height*height)
}

const bmi2 = (height: number, weight:number):number => {
  return weight / (height*height)
}

console.log(bmi2(1.80, 81))