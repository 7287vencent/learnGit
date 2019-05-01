Scramblies
完成函数置乱(str1, str2)，如果可以将str1字符的一部分重新排列以匹配str2，则返回true，否则返回false。

笔记：

仅使用小写字母（az）。不会包含标点符号或数字。
需要考虑性能
Input strings s1 and s2 are null terminated.
例子
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

## 思考
就是一句话，str2字符串中的每一个字母是否可以 一一  在str1中找到对应的元素