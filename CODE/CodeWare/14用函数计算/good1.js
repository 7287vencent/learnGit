var n = function(digit) {
  // console.log(arguments)
  return function(op) {
    // console.log(arguments,op,digit)
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l = 9) {
  // console.log(l,r); 
  console.log(r,l,arguments)  
  return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }
// console.log(seven(times(five())))
// times(five())
// console.log(times(5)())
console.log(five)
// seven(times())
/**
 * 解析思路:
 * digit默认存在，就是代表值，five() 代表5 seven() 代表7,始终存在
 * 当five()时 n 函数里面没有参数，所以arguments是{},op是undefine
 * 当seven(times()) 时, n函数里面有参数，是一个函数,arguments是{ '0': [Function] },op是Function
 * seven(times(five()))时，op是function 代表的就是times这个函数里面的闭包函数，op(digit),中的digit会是times里面闭包函数中的参数 l
 * seven() 这样写时，n函数里面的闭包函数才会执行
 * 在times(five()) 中 five() 代表的就是 r 这个参数
 */

 /**
  * 
  * five 代表n(5) 是一个函数就是return function(){},这个函数不会执行。
  * five() 代表n(5)()  是会执行 return function(){} 的这个函数
  * times() 代表times这个函数，并执行，但是也不会执行里面的闭包函数return function(){}
  * times()()  才会执行里面的闭包函数
  * 
  */