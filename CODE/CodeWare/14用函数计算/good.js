function template(n) {
  return function(){
    if (arguments.length > 0) {
      console.log(arguments[0])
      var operation = arguments[0];
      return operation(n);
    }
    return n;
  }
}
var zero = template(0);
var one = template(1);
var two = template(2);
var three = template(3);
var four = template(4); 
var five = template(5);
var six = template(6);
var seven = template(7);
var eight = template(8);
var nine = template(9);

function plus(operand) {
  return function(n){return n+operand;}
}
function minus(operand) {
  return function(n){return n-operand;}
}
function times(operand) {
  return function(n){return n*operand;}
}
function dividedBy(operand) {
  return function(n){return n/operand;}
}
console.log(seven(times(five())))