// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 12
function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}
repeatAction(3, (round) => console.log("Round " + round));
