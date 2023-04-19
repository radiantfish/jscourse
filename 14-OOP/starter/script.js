///////////////////////////
// Coding challenge #1

'use strict';
const Car = function (curSpeed, make) {
  // Instance properties
  this.curSpeed = curSpeed;
  this.make = make;
};

const BMW = new Car(120);
const Mercedes = new Car(95);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

Car.prototype.accelerate = function () {
  this.curSpeed += 10;
  console.log(this.curSpeed);
};

Car.prototype.brake = function () {
  this.curSpeed - +5;
  console.log(this.curSpeed);
};

BMW.accelerate();
