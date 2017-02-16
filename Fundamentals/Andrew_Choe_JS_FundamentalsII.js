// question 1
function sums(x, y) {
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sums(1,5);

// question 2
function findMin(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}
findMin([10,3,6,2,7,5]);

// question 3
function findAvg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var avg = sum / arr.length;
  console.log(avg);
}
findAvg([1,5,3,6,7]);


// Anonymous functions
var sums = function(x, y) {
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sums(1,5);


var findMin = function(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}
findMin([6,2,4,5,1]);


var findAvg = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var avg = sum / arr.length;
  console.log(avg);
}
findAvg([2,3,4,5,6]);


// As an object
var objects = {
  sum : function(x, y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
      sum = sum + i;
    }
    console.log(sum);
  },

  findMin : function(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    console.log(min);
  },

  findAvg : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
  }
}
objects.sum(1,5);
objects.findMin([4,5,7,1,2]);
objects.findAvg([1,2,3,4,5,6,7]);


var person = {
  name: 'Andrew',
  distance_traveled: 0,
  say_name: function() {
    alert(this.name);
  },
  say_something: function(param) {
    alert(this.name + " says '" + param + "'");
  },
  walk: function() {
    alert(this.name + ' is walking');
    this.distance_traveled += 3;
  },
  run: function() {
    alert(this.name + ' is running');
    this.distance_traveled += 10;
  },
  crawl: function() {
    alert(this.name + ' is crawling');
    this.distance_traveled += 1;
  }
};
person.say_something('how are you?');
person.run();
person.crawl();
alert(person.distance_traveled);
