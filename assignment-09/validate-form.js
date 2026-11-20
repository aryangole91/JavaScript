// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 9
function validateForm(name) {
  const errors = [];
  if (name === "") {
    errors.push("Name is required");
  }
  return errors;
}
console.log(validateForm("Asha"));
console.log(validateForm(""));
