# position
- relative：
    定位是相对于自身位置定位（设置偏移量的时候，会相对于自身所在的位置偏移）。设置了 relative 的元素仍然处在文档流中，元素的宽高不变，设置偏移量也不会影响其他元素的位置。最外层容器设置为 relative 定位，在没有设置宽度的情况下，宽度是整个浏览器的宽度。
- absolute：
    定位是相对于离元素最近的设置了绝对或相对定位的父元素决定的，如果没有父元素设置绝对或相对定位，则元素相对于根元素即 html 元素定位。设置了 absolute 的元素脱了了文档流，元素在没有设置宽度的情况下，宽度由元素里面的内容决定。脱离后原来的位置相当于是空的，下面的元素会来占据位置。
    生成固定定位的元素，相对于浏览器窗口进行定位。
    absolute	
    生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
    元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
- fixed	
    生成固定定位的元素，相对于浏览器窗口进行定位。
    元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
- relative	
    生成相对定位的元素，相对于其正常位置进行定位。
    因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
- static	
    默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
- sticky	
    粘性定位，该定位基于用户滚动的位置。
    它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。
    注意: Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)。
- inherit	规定应该从父元素继承             position 属性的值。
    initial	设置该属性为默认值，详情查看 CSS initial 关键字。