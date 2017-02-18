module.exports = function() {
  return {
    add: function(num1, num2) {
      return num1 + num2;
    },
    multiply: function(num1, num2) {
      return num1 * num2;
    },
    square: function(num) {
      return num * num;
    },
    random: function(num1, num2) {
      var number = Math.floor(Math.random() * num2 + 1);
      while (number < num1) {
        number = Math.floor(Math.random() * num2 + 1);
      }
      return number;
    }
  }
};
