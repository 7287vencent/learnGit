Product of consecutive Fib numbers

Fibonacci数是以下整数序列（Fn）中的数字：

0,1,1,2,3,5,8,13,21,34,55,89,144,233 ......

如

F（n）= F（n-1）+ F（n-2），其中F（0）= 0且F（1）= 1。

给出一个数字，比如prod（对于产品），我们搜索两个Fibonacci数F（n）和F（n + 1）验证

F（n）* F（n + 1）= prod。

你的函数productFib取一个整数（prod）并返回一个数组：

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
如果F（n）* F（n + 1）= prod，则取决于语言。

如果您没有找到两个连续的F（m）验证，F(m) * F(m+1) = prod您将返回

[F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F（m）是最小的，如F(m) * F(m+1) > prod。

例子
productFib(714) # should return [21, 34, true], 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return [34, 55, false], 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
注释：这里没有用，但是我们可以告诉你如何选择数字n到哪个：我们可以使用“黄金比率”phi，它(1 + sqrt(5))/2知道F（n）是渐近的：phi^n / sqrt(5)。这给出了n的可能上限。

您可以在“示例测试”中查看示例。

参考
http://en.wikipedia.org/wiki/Fibonacci_number

http://oeis.org/A000045

// F(n)=(1/√5)*{[(1+√5)/2]^n - [(1-√5)/2]^n}
  // let n = 5;
  // let fn = (1 / Math.pow(5, 1 / 2)) * (Math.pow(((1 + Math.pow(5, 1 / 2)) / 2), n) - Math.pow(((1 - Math.pow(5, 1 / 2)) / 2), n));
  // console.log(fn,Math.pow(((1 + Math.pow(5, 1 / 2)) / 2), n));


  // Test.assertSimilar(productFib(4895), [55, 89, true])
// Test.assertSimilar(productFib(5895), [89, 144, false])
// Test.assertSimilar(productFib(74049690), [6765, 10946, true])
// Test.assertSimilar(productFib(84049690), [10946, 17711, false])
// Test.assertSimilar(productFib(193864606), [10946, 17711, true])
// Test.assertSimilar(productFib(447577), [610, 987, false])
// Test.assertSimilar(productFib(602070), [610, 987, true])