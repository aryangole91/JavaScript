// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 15
function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}
checkMarks(120).catch((error) => console.log(error.message));
