let num = [2, 34, 3, 2.3, 343];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

num.forEach((element) => {
  console.log(element * element);
});

//Array
let name = "hasdkj";
let arr = Array.from(name);
console.log(arr);

for (let i in num) {
  console.log(i);
}
