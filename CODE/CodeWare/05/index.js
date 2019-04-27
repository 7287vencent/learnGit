function songDecoder(song){
  // let str = 'WUB';
  // let arr = song.split(str).join(' ').trim().replace(/\s+/g,' ');
  // let arr = song.split(str);
//  let ar = arr.filter( (value,index) => {
//     return value = ' ';
//   })
  // console.log(arr);
  return song.split('WUB').join(' ').trim().replace(/\s+/g,' ');
}

songDecoder("AWUBWUBWUBBWUBWUBWUBC")