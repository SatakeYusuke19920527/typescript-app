export {};

function error(message: string): never {
  throw new Error(message)
}

try {
  error('test')
} catch (e) {
  console.log({e})
}

let foo: void = undefined
let bar: never = error('message')