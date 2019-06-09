var splitListToParts = function(root, k) {
  let cur = root;
  let length = 0;
  while(cur){
      cur = cur.next;
      length ++;
  }
  let segmentLength = Math.floor(length/k);
  let langerCount =  length % k ;
  let res = new Array(k);
  cur = root;
  for(let i = 0; i < k; i++){
      res[i] = cur;
      let curLength = (i<langerCount)?segmentLength+1:segmentLength;
      let last = cur;
      for(j = 0; j < curLength; j++){
          last = cur;
          cur = cur.next;
      }
      if(last)last.next=null;
  }
  return res;
  
};