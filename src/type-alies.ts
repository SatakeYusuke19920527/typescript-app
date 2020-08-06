export {};

// Aliasをつける時は最初大文字
type Mojiretsu = string

let sample: Mojiretsu = 'test'

const fooString: string = 'string'

type Example = {
    name: string;
    age: number;
}

const example: Example = {
  name: 'yus',
  age: 28
}

type sampleType = typeof example

