// let num = [1, 2, 4, 5, 6, 7];
// let b = num.toString();
// console.log(b);

let num = [1, 2, 34, 4, 6];
let b = num.join();
console.log(b);
let c = num.join("_");
console.log(c, typeof c);
num.pop();
let r = num.pop();
console.log(num);
let V = num.shift();
console.log(V, num);
