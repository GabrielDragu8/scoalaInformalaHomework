function Vehicle (name, wheels, doors,seats, highSpeed) {
  this.name = name;
  this.wheels = wheels;
  this.doors = doors;
  this.seats = seats;
  this.highSpeed = highSpeed;
}

function OversizeCargo (name, wheels, doors, seats, highSpeed, oversize) {
  Vehicle.call(this, name, wheels, doors, seats, highSpeed, true);
  this.oversize = oversize;
}

OversizeCargo.prototype = Object.create(Vehicle.prototype);
OversizeCargo.prototype.constructor = OversizeCargo;

function Car(name, wheels, doors, seats, highSpeed) {
  Vehicle.call(this, name, wheels, doors, seats, highSpeed);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle (name, seats, highSpeed) {
  Vehicle.call(this, name, 2, 0, seats, highSpeed);
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

function Bus (name, wheels, doors, seats) {
  OversizeCargo.call(this, name, wheels, doors, seats, false, true);
}

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;

function Truck (name, wheels) {
  OversizeCargo.call(this, name, wheels, 3, 3, false, true);
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

function Street(vehicles) {
  this.vehicles = vehicles; 
}

Street.prototype.addVehicle = function(newVehicle) { 
  this.vehicles.push(newVehicle);
  console.log(`${newVehicle.name} is now on the move.`);
}

Street.prototype.showVehicles = function(){
  this.vehicles.forEach(function(vehicle) {
    console.log(`${vehicle.name} is on the streets.`);
  })
}

var dacia = new Car('Dacia', 4, 5, 5, false);
console.log(dacia);

var lamborghini = new Car('Lamborghini,', 4, 3, 5, true);
console.log(lamborghini);

var yamaha = new Motorcycle('Yamaha', 1, true);
console.log(yamaha);

var drobeta = new Bus('Drobeta Turism', 8, 2, 51);
console.log(drobeta);

var normandia = new Bus('Normandia', 8, 3, 54);
console.log(normandia);

var man = new Truck ('Man', 8);
console.log(man);



var myVehiclesArray = [];
var highway1 = new Street(myVehiclesArray);
var myOtherVehiclesArray = [];
var highway2 = new Street(myOtherVehiclesArray);

highway1.addVehicle(dacia);
highway1.addVehicle(lamborghini);
highway2.addVehicle(drobeta);
highway2.addVehicle(man);
highway1.addVehicle(yamaha);
highway2.addVehicle(normandia);

console.log(highway1);
console.log(highway2);
