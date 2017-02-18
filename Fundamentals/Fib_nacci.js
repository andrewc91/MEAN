function fib() {
  var start = 0;
  var current = 1;
  var sum = 0;
  function nacci() {
    // add start with current
    sum = start + current;
    // log current
    console.log(current);
    // change previous number to current
    start = current;
    // change current number to the sum of the previous/current
    current = sum;
  }
  return nacci
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
