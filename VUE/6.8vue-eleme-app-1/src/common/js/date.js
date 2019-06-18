export function formatDate(date, fmt) {
  // console.log('输入的date',date,"输入的fmt",fmt)
  // date: Tue Jun 18 2019 15:42:23 GMT+0800
  // fmt 'yyyy-MM-dd hh:mm'  
  if(/(y+)/.test(fmt)) {
    // console.log('RegExp.$1',RegExp.$1)
    fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length))
    // console.log('第一次fmt',fmt)
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for(let k in o) {
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}