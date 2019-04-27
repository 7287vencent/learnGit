function songDecoder(song){
  // 方法一
  return song.replace(/(WUB)+/g," ").trim()
  // 把多个WUB换成一个空格
  // 方法二
  // let arr = song.split('WUB').filter(Boolean)
  // 等价 array.filter((item) => {return Boolean(item)})
  // 去除数组中为“假”的元素。
  // console.log(arr);
  // return song.split('WUB').filter(Boolean).join(' ');
  // 方法三
  // 这个方法有BUG 后面的{1,3} 限定了最少一个WUB和最多三个WUB 所以会出问题
  // return song.replace(/(WUB){1,3}/g, " ").trim();
}
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
