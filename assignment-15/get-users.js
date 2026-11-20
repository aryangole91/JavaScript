// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 15
function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Asha" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Meera" },
      ]);
    }, 100);
  });
}
async function showUsers() {
  const users = await getUsers();
  users.forEach((user) => console.log(user.name));
}
showUsers();
