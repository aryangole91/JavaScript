// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 7
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}
Student.prototype.result = function () {
  return this.marks >= 40 ? "Pass" : "Fail";
};
const asha = new Student("Asha", 88);
console.log(asha.result());
