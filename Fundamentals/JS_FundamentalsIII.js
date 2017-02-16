function personConstructor(Name) {
  return {
    name: Name,
    distance_traveled: 0,
    say_name:function() {
      alert(Name);
    },
    say_something:function(param) {
      alert(Name + " says '" + param + "'");
    },
    walk:function() {
      alert(Name + 'is walking');
      distance_traveled += 3;
    },
    run:function() {
      alert(Name + 'is running');
      distance_traveled += 10;
    },
    crawl:function() {
      alert(Name + 'is crawling');
      distance_traveled += 1;
    },
  };
}
console.log(personConstructor('Andrew'));


function ninjaConstructor(Name) {
  return {
    name: Name,
    cohort: 'September',
    beltLevel: 'yellow-belt',
    levelUp: function() {
      if (beltLevel == 'yellow-belt') {
        beltLevel = 'red-belt';
      }
      else {
        beltLevel = 'black-belt';
      }
    }
  };
}
