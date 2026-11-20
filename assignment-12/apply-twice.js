// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 12
function applyTwice(fn, value) {
  return fn(fn(value));
}
const addTen = (n) => n + 10;
console.log(applyTwice(addTen, 5));
