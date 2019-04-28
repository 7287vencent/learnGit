function solution(str) {
  // return (str.length % 2 ? str + '_' : str).match(/../g);

  return (str + "_").match(/../g);
}
console.log(solution('abcdef'))