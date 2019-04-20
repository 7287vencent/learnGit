- 编写一个函数，它接受一个或多个单词的字符串，并返回相同的字符串，但所有五个或更多字母单词都反转（就像这个Kata的名字一样）。传入的字符串只包含字母和空格。仅当存在多个单词时才会包含空格。

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

1. 开始思路  把每个字符串按空格隔开
   1. 使用string 的split(' ')  分割字符串，返回数组
   然后判断 遍历数组的每一项 
   2. 使用for(let arr of str_arr )
   里面的arr就是分割后的每一项字符串
   3. 再使用一次  split('')  并把结果返回给temp
   **注：里面没有空格  就会分割出单个字符。**
   4. 使用if 判断temp 数组的长度  
      - 如果 大于 5 就使用 reverse()  颠倒数组中元素的顺序。 
      - 再使用join('') 方法，合并为字符串，并把结果返回给 arr
   5. 但是发现 结果arr 结果是对了，但是没有修改 str_arr中对应的 数组项
   ```
   for (let arr in str_arr) {
       let temp;
       // temp = [...arr];
       temp = arr.split('')
       if (temp.length > 5) {
         arr = temp.reverse().join('');
       }
     }
2. 使用forEach() 遍历数组 发现和上面一样
     ```
      str_arr.forEach(arr => {
          let temp;
          temp = arr.split('')
          if (temp.length > 5) {
            arr = temp.reverse().join('');
            // console.log(arr);
          }
          console.log(arr);
        });
3. 最后发现只能使用原始的for 循环 ，但我使用的是for  in 遍历数组是一个道理，遍历的key值是下标
     ```
      for (let key in str_arr) {
       let temp;
       // temp = [...arr];
       temp = str_arr[key].split('')
       if (temp.length > 5) {
         str_arr[key] = temp.reverse().join('');
         // console.log(arr);
       }
       // console.log(arr);
       // console.log(temp);
      }

## 重点知识点
1. split('') 把一个字符串分割成字符串数组:
2. reverse() 方法用于颠倒数组中元素的顺序。
3. join('')  把数组的所有元素放入一个字符串。
4. slice()   选取数组的的一部分，并返回一个新数组。
5. splice()  从数组中添加或删除元素。有三个参数
 **必须**开始删除元素的下标，**必须**删除几个元素，**可选**要添加到数组的新元素  可以是多个元素
6. charAt() 返回在指定位置的字符。
7. concat() 连接两个或更多字符串，并返回新的字符串。数组也行
8. slice()  提取字符串的片断，并在新的字符串中返回被提取的部分。
9. [...arr] 和split('') 最后效果一样

## reverse() 方法原理 
* 
  ```
  function reverse(str) 
   { 
       if(str.length == 0)return null; 
       var i = str.length; 
       var dstr = ""; 
       while(--i >= 0) 
       { 
           dstr += str.charAt(i);  
       } 
       return dstr; 
   } 
   var str = "abcdef"; 
   str = reverse(str); 