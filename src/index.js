import "./styles.css";

function sayHello(name) {
  const greeting = `Hello,${name}!`;
  console.log(greeting);
}
const arr = [5, 4, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
const obj = {
  name: "John",
  age: 30,
  city: "New York",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
obj.greet();
function multiply(a, b) {
  return a * b;
}
const x = 5;
const y = 10;
console.log(multiply(x, y));
if (x > y) {
  console.log("x is greater");
} else {
  console.log("y is greater");
}
let counter = 0;
while (counter < 5) {
  counter++;
  console.log(counter);
}
