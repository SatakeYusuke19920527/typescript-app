export {};

let numbers: number[] = [ 1, 2, 3 ];
let numbers2: Array<number> = [ 1, 2, 3 ];
let strings: string[] = [ 'tokyo', 'osaka', 'nagoya' ];
let strings2: Array<string> = [ 'tokyo', 'osaka', 'nagoya' ];
console.log({ numbers });

let strings3: string[] = [ 'typescript', 'coffeescript', 'javascript' ];
let nijigen: number[][] = [ [ 50, 100 ], [ 150, 300 ] ];

console.log(nijigen);

let hairetsu: (string | number | boolean)[] = [ 1, false, 'japan' ];

console.log(hairetsu);
