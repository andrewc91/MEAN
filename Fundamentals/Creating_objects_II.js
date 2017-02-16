function Vehicle(name, wheels, passengers_number, speed) {
  var self = this;
  var distace_traveled = 0;

  this.name = name;
  this.wheels = wheels;
  this.passengers_number = passengers_number;
  this.speed = speed;

  this.makeNoise = function() {
    console.log('Make noise');
  }

  var updateDistanceTraveled = function() {
    distance_traveled += self.speed;
  }

  this.move = function() {
    updateDistanceTraveled();
    this.makeNoise();
  }

  this.checkMiles = function() {
    console.log(distance_traveled);
  }

}

var Bike = new Vehicle('Bikey', 2, 1);
Bike.makeNoise = function() {
  console.log('Ring Ring');
}

var Sedan = new Vehicle('Sedany', 4, 4);
Sedan.makeNoise = function() {
  console.log('Honk Honk');
}

var Bus = new Vehicle('Bussy', 4, 30);
Bus.pickUpPassengers = function(passenger) {
  this.passengers_number += passenger;
}
