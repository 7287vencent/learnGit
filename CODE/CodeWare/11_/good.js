function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

function productFib( prod ) // mathy way
{
  const r = ( 1 + Math.sqrt(5) ) / 2;
  let fib1 = Math.round( Math.sqrt( prod / r ) ),
  fib2 = Math.round( fib1 * r );
  if ( fib1 * fib2 === prod ) return [ fib1, fib2, true ];
  for ( [fib1, fib2] = [0, 1]; fib1 * fib2 < prod; [fib1, fib2] = [fib2, fib1 + fib2] );
  return [ fib1, fib2, false ];
}