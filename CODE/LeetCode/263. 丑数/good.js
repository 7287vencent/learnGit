var isUgly = function(num) {
  var list = [1,2,3,5]
  
  if(num <= 0) return false
      
  if(list.includes(num)) return true
      
  else
      for (li in list){
          if(num%list[li] == 0 && list[li] != 1)
              return isUgly(num/list[li])
      }
  
  return false
};