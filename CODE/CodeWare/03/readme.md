实现一个将两个数字相加并以二进制形式返回其总和的函数。转换可以在添加之前或之后完成。
返回的二进制数应为字符串。

测试样本
Test.describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  Test.it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
  });
  Test.it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
  });
});