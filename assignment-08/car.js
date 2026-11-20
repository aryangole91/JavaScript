// Name: Aryan Gole | Roll No: 2510303135 | Student ID: BCS2025444 | Assignment: 8
class Engine {
  constructor(power) {
    this.power = power;
  }
}
class Car {
  constructor(power) {
    this.engine = new Engine(power);   // composition: a Car has an Engine
  }
  start() {
    return "Car starts with " + this.engine.power + " HP";
  }
}
const car = new Car(150);
console.log(car.start());
