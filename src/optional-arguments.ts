export {};

let bmi: (height: number, weight: number, printable?: boolean) => number
  = (height: number, weight: number, printable?: boolean) => {
    if (printable) {
     return weight / (height * height)
    } else {
      return 
    }
  }

console.log(bmi(180, 81, true))
console.log(bmi(180,85, false))