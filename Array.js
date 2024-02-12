let marks = [3, 2, 1, 4, 5, false, "NOT pRESENT"];
console.log(marks[2]);
console.log(marks);
console.log(marks[3]);
marks[2] = 34;

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']

fruitss[5] = "mango";
console.log(fruitss[5]); // 'mango'
console.log(Object.keys(fruitss)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
