function Vehicle(name, wheels, passengers_number, speed) {

  this.distace_traveled = 0;
  this.name = name;
  this.wheels = wheels;
  this.passengers_number = passengers_number;
  this.speed = speed;
}

Vehicle.prototype.makeNoise = function() {
  console.log('Noise');
}

Vehicle.prototype.updateDistanceTraveled = function() {
  this.distance_traveled += this.speed;
}

Vehicle.prototype.move = function() {
  this.updateDistanceTraveled();
  this.makeNoise();
}

Vehicle.prototype.checkMiles = function() {
  console.log(this.distance_traveled);
}

Vehicle.prototype.vin_number = function() {
  var characters = [1,2,3,4,5,6,7,8,9,0]
  var number = "";
  for (var i = 1; i <= 17; i++) {
    vin_number = characters[Math.floor(Math.random() * 17)];
  }
  return vin_number;
};

var Bike = new Vehicle('Bikey', 2, 1);
Bike.makeNoise = function() {
  console.log('Ring Ring');
};

var Sedan = new Vehicle('Sedany', 4, 4);
Sedan.makeNoise = function() {
  console.log('Honk Honk');
};

var Bus = new Vehicle('Bussy', 4, 30);
Bus.pickUpPassengers = function(passenger) {
  this.passengers_number += passenger;
};

console.log(Bus);
