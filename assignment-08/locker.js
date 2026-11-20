// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 8
class Locker {
  constructor(pin) {
    this.pin = pin;
  }
  checkPin(number) {
    return number === this.pin;
  }
}
const locker = new Locker(1234);
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
