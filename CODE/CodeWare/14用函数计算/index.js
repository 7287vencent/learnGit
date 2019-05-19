function zero() {
  if(arguments[0]){
    return calculate(0,arguments[0])
  }
  return 0 
}
function one() {
  if(arguments[0]){
    return calculate(1,arguments[0])
  }
  return 1 
}
function two() {
  if(arguments[0]){
    return calculate(2,arguments[0])
  }
  return 2 
}
function three() {
  if(arguments[0]){
    return calculate(3,arguments[0])
  }
  return 3 
}
function four() {
  if(arguments[0]){
    return calculate(4,arguments[0])
  }
  return 4 
}
function five() {
  if(arguments[0]){
    return calculate(5,arguments[0])
  }
  return 5 
}
function six() {
  if(arguments[0]){
    return calculate(6,arguments[0])
  }
  return 6 
}
function seven() {
  if(arguments[0]){
    return calculate(7,arguments[0])
  }
  return 7
}
function eight() {
  if(arguments[0]){
    return calculate(8,arguments[0])
  }
  return 8
}
function nine() {
  if(arguments[0]){
    return calculate(9,arguments[0])
  }
  // console.log('+++')
  return 9 
}

function plus(num) {
  console.log(num)
  return '+' + num
}
function minus(num) {
  return '-' + num
}
function times(num) {
  return '*' + num
}
function dividedBy(num) {
  return '/' + num
}
function calculate(n1,arg) {
  // console.log(n1,arg)
  let fuhao = arg.match(/[\+,\-,\*,\/]/i)
  let n2 = parseInt(arg.slice(1))
  if(fuhao[0] == '+') {
    // console.log(n1,fuhao[0],n2)
    return n1 + n2
  }
  if(fuhao[0] == '-') {
    return n1 - n2
  }
  if(fuhao[0] == '*') {
    return n1 * n2
  }
  if(fuhao[0] == '/') {
    return Math.floor(n1 / n2)
  }
}
console.log(seven(times(five())))