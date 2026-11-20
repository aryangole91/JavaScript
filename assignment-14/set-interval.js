// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 14
let count = 0;
const timer = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(timer);
  }
}, 200);
