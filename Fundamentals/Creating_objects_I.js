function VehicleConstructor(name, wheels, passengers) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  vehicle.makeNoise = function() {
    console.log('Honk Honk!');
  }
  return vehicle;
}

var Bike = VehicleConstructor('bike', 2, 1);
Bike.makeNoise = function() {
  console.log('Ring Ring!');
}

var Sedan = VehicleConstructor('Hyundai', 4, 4);
Sedan.makeNoise = function() {
  console.log('Honk Honk!');
}

var Bus = VehicleConstructor('yellow', 4, 30);
Bus.pickUpPassengers = function(people) {
  Bus.passengers += people;
}
