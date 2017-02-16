function runningLogger() {
  console.log('I am running!');
}
runningLogger();


function multiplyByTen(number) {
  multiple = number * 10;
  console.log(multiple);
}
multiplyByTen(5);


function stringReturnOne(string) {
  console.log('return me please');
}
stringReturnOne();


function stringReturnTwo(string) {
  console.log('return me too please');
}
stringReturnTwo();


function caller(param) {
  if (typeof(param) == 'function') {
    param();
  }
}
caller(stringReturnTwo);


function myDoubleConsoleLog(a, b) {
  if (typeof(a) == 'function' && typeof(b) == 'function') {
    a();
    b();
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);


function caller2(param) {
  console.log('starting');
  var timer = setTimeout(function() {
    if (typeof(param) == 'function') {
      param();
    }
  }, 2000);
  console.log('ending');
  return 'interesting';
}
caller2(stringReturnTwo);
