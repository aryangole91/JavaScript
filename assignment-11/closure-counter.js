// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 11
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
