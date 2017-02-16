// question 1
var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}

// question 2
x.push(100);

// question 3
x.push(['hello', 'world', 'JavaScript is Fun']);
console.log(x)

// question 4
var sum = 0;
for (var j = 0; j <= 500; j++) {
  sum = sum + j;
}
console.log(sum);

// question 5
var min = 0;
arr = [1, 5, 90, 25, -3, 0];
for (var k = 0; k < arr.length; k++) {
  if (arr[k] < min) {
    min = arr[k];
  }
}
console.log(min);

// question 6
var sum = 0;
arr = [1, 5, 90, 25, -3, 0];
for (var i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
var avg = sum / arr.length;
console.log(avg);

// question 7
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'Dallas'
}
for (var item in new_ninja) {
  console.log(item + ':' + new_ninja[item]);
}
