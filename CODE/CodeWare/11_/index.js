function productFib(prod) {
  let temp = true;
  let n = 1;
  while (temp) {
    // prod = Fibonacci2(n) * Fibonacci2(n + 1);
    let Fib1 = Fibonacci2(n),
      Fib2 = Fibonacci2(n + 1);
    if (prod == Fib1 * Fib2) {
      temp = false;
      return [Fib1, Fib2, true];
    } else {
      n++;
    }
    if(prod < Fib1 * Fib2){
      temp = false;
      return [Fib1,Fib2,false];
    }
  }
  // return false;
  // prod = Fibonacci2(n);
  // console.log(prod);
}

function Fibonacci2(n, ac1 = 0, ac2 = 1) {
  if(n == 0){
    return ac1;
  }
  if( n == 1){
    return ac2;
  };
  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}
// productFib()
console.log(productFib(447577));