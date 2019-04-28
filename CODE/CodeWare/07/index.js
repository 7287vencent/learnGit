function solution(str) {
  str = str.length % 2 == 0 ? str : str + '_';
  // console.log(str);
  // let st = str.sub
  let sub_str, arr_str = '';
  for (let i = 0, num = str.length / 2; i < num; i++) {
    sub_str = str.substr(i * 2, 2);
    arr_str =arr_str +sub_str +' ';
  }
  return arr_str.trim().split(' ');
  // return arr_str.trim().split(' ');
}
console.log(solution('abcdef'))