这次我们想用函数编写计算并得到结果。我们来看看一些例子：

JavaScript的：

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
## 分析
  必须满足的两个条件
  1 当数字函数没有参数时，返回本身的值
  2 当有参数时，必须计算出结果并返回正确值
  所以
    我就定义了一个计算函数calculate(n1,arg),里面有两个参数，一个是自身代表的值，一个是运算函数

红宝石：

seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3
要求：

每个数字必须有一个函数，从0（“零”）到9（“九”）
每个以下数学运算都必须有一个函数：plus，minus，times，divideBy（divided_by在Ruby中）
每个计算只包含一个操作和两个数字
最外部函数表示左操作数，最内部函数表示右操作数
Divison应该是整数除法，例如eight(dividedBy(three()))/ eight(divided_by(three))应该返回2，而不是2.666666...