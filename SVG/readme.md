## SVG 入门学习
### SVG如何在web中使用
####   一.直接嵌入到HTML中:   
####    二.使用<embed>标签:
  - 可以使用此标签将SVG文件引入到当前页面。
  代码如下:

    `<embed src="circle.svg" type="image/svg+xml" />`
####    三.通过object标签引入:
  - 可以使用object标签引入外部svg文件到当前页面。
      `<object data="circle.svg" type="image/svg+xml"></object>`
#### 四.作为背景图片引入:
  - 可以作为元素的背景引入，代码实例如下:
      `div {
        background: url("circle.svg") no-repeat center;
        background-size : 100px 100px;
      }`
#### 五.通过iframe引入:
  - 通过iframe也可以引入svg，代码如下:
      `<iframe src="circle.svg"></iframe>`
#### 六.通过<img>标签引入:
  - 通过此标签也可以引入svg文件，就等同于一个图片，代码如下:
      `<img src="circle.svg"/>`
#### 七.链接到svg文件:
  - 可以直接通过超链接访问svg文件，代码如下:
      `<a href="circle1.svg">蚂蚁部落</a>`
### SVG绘制元素
#### 一.绘制直线
  - 通过<line>元素可以绘制直线。
      ```
      <svg width="300" height="200">
        <line x1="0" y1="10" x2="200" y2="30"
              stroke="red" stroke-width="2" />
      </svg> 
      ```
  - 下面介绍一下<line>元素上的相关属性。
    1. x1：规定直线起点x轴坐标。
    2. y1：规定直线起点y轴坐标。
    3. x2：规定直线终点x轴坐标。
    4. y2：规定直线终点y轴坐标。
    5. stroke：规定直线颜色。
    6. stroke-width：规定直线的宽度。
#### 二.<rect> 绘制矩形  
      <svg width="300" height="200">
        <rect
          x="10" y="10"
          width="100" height="60"
          stroke="red"
          stroke-width="2"
          fill="green"/>
      </svg>
  - 标签属性解析如下：
      1. x：规定矩形左上角x轴坐标。
      2. y：规定矩形左上角y轴坐标。
      3. width：规定矩形的宽度。
      4 .height：规定矩形的高度。
      1. stroke：规定边框的颜色。
      2. fill：规定矩形的填充色。
      3. stroke-width：规定边框的宽度。
      4. fill-opacity: 规定填充透明度
      5. stroke-opacity 规定边框的透明度
#### 三.绘制圆角矩形
      <svg width="300" height="200">
        <rect
          x="10" y="10"
          height="60" width="100"
          rx="5" ry="5"
          stroke="red"
          fill="green"/>
      </svg>  
      利用<rect>标签成功绘制一个圆角矩形，代码分析如下：
      （1）.x：规定矩形左上角x轴坐标，虽然是圆角矩形，矩形尖角已经不存在，我们不妨认为它依然存在。
      （2）.y：规定矩形左上角y轴坐标，与x同理。
      （3）.width：规定矩形的宽度。
      （4）.height：规定矩形的高度。
      （5）.stroke：规定矩形描边的颜色，也就是边框的颜色。
      （6）.fill：规定矩形的填充颜色。
      （7）.rx：规定圆角x轴半径尺寸。
      （8）.ry：固定圆角y轴半径尺寸。
      上述代码中，rx与ry的值相等，说明矩形的四个圆角是正圆的四分之一部分，由于图形较小导致观察比较困难一些，读者朋友可以自行绘制一个较大的圆角矩形，那么四个角的特点将十分明显。
      rx与ry值相当，圆角就是正圆的四分之一，如果不相等，那么圆角将是椭圆的四分之一。
#### 四.<circle> 绘制圆形
      <svg width="300" height="200">
        <circle
          cx="40" cy="40"
          r="24"
          stroke="red"
          stroke-width="2"
          fill="green"/>
      </svg> 
      上述代码利用<circle>绘制了一个红色边框绿色填充的圆，代码分析如下：
      （1）.cx：规定圆心在x轴的坐标。
      （2）.cy：规定圆心在y轴的坐标。
      （3）.r：规定半径的尺寸。
      （4）.stroke：规定圆的描边也就是边框的宽度。
      （5）.fill：规定圆的填充颜色。
#### 五.<ellipse> 绘制椭圆
      <svg width="300" height="200">
        <ellipse
          cx="40" cy="40"
          rx="30" ry="15"
          stroke="red"
          fill="green"
          stroke-width="2"/>
      </svg>  
      上述代码绘制了一个红色边框的椭圆，代码分析如下：
      （1）.cx：规定椭圆圆心x轴坐标。
      （2）.cy：规定椭圆圆心y轴坐标。
      （3）.rx：规定椭圆x轴半径的尺寸。
      （4）.ry：规定椭圆y轴半径的尺寸。
      （5）.stroke：规定椭圆描边的颜色，也就边框的颜色。
      （6）.stroke-width：规定描边的厚度为2px，也就是边框的厚度。
      （7）.fill：规定椭圆的填充颜色为绿色。
#### 六.<polyline> 绘制折线
      <svg width="300" height="200">
        <polyline points="10,2 60,2 35,52"
          stroke="red"
          stroke-width=2;
          fill="green" />
      </svg>  
      代码分析如下：
      （1）.points：此属性定义构成折线的一系列的点，每一个点由两个用逗号分隔的数字构成，第一个数字表示x轴坐标，第二个数字表示y轴坐标，点与点之间用空格分隔。
      （2）.stroke：此属性定义折线描边的颜色。
      （3）.stroke-width：此属性定义折线的粗细。
#### 七.<polygon> 多边形
      <svg width="300" height="200">
        <polygon points="10,2 60,2 35,52"
          stroke="red"
          stroke-width=2;
          fill="green" />
      </svg>  
      （1）.points：此属性定义构成多边形的一系列的点，每一个点由两个用逗号分隔的数字构成，第一个数字表示x轴坐标，第二个数字表示y轴坐标，点与点之间用空格分隔。
      （2）.stroke：此属性定义折线描边的颜色。
      （3）.stroke-width：此属性定义折线的粗细。
#### 八.<path>路径
    详情见 https://www.w3cplus.com/svg/svg-path.html
    九.<markers>用法详解  
    我的理解就是一个效小一点的SVG 
     具体可见:http://www.softwhy.com/article-9146-1.html
      <svg width="500" height="500">
        <defs>
          <marker id="markerSquare"
                  markerWidth="7"
                  markerHeight="7"
                  refX="4" refY="4"
                  orient="auto">
            <rect x="1" y="1"
                  width="5"
                  height="5"
                  style="stroke:none; fill:#000000;" />
          </marker>
          <marker id="markerArrow"
                  markerWidth="13"
                  markerHeight="13"
                  refX="2" refY="7"
                  orient="auto">
            <path d="M2,2 L2,13 L8,7 L2,2" style="fill:#000000;"/>
          </marker>
        </defs>
        
        <path d="M100,20 l50,0 l0,50 l50,0"
              marker-start="url(#markerSquare)"
              marker-mid="url(#markerSquare)"
              marker-end="url(#markerArrow)"
              style="stroke:#0000cc;stroke-width:1px;fill: none;"
              />
      </svg>  
      （1）.id属性:
      其他元素会利用<markers>元素的id属性进行引用。
      （2）.markerWidth和markerHeight属性：
      <markers>元素创建一个viewport视窗，上述两个属性用来规定视窗的尺寸。
      （3）.refX和refY属性：
      规定<markers>元素内创建的图形元素哪个位置与指定图形元素相连接。
      refX="0" refY="3"规定三角形的（0，3）位置与直线的末端相连接。
      所属坐标系是<markers>元素创建视窗内的当前用户坐标系。
      （4）.orient属性:
      前面代码是一条水平直线与箭头相连接。
      如果这条直线是倾斜的，那是不是也要人为的调整箭头的方向呢。
      不需要，只需要将orient属性值设置为"auto"即可。
      （5）.markerUnits属性：
      从属性名称可以猜测功能，用来规定<marker>以及其中绘制的图形的尺寸是以什么为单位的。
      属性值可以是"strokeWidth"（默认）或者"userSpaceOnUse"。
      以上面代码为例：
      （1）."strokeWidth"，那么markerWidth="10"实际尺寸就是10乘以line元素的stroke-width值，其他数据同理。
      （2）."userSpaceOnUse"，那么各个数据的值你规定多少就是多少（是一个绝对值）。
      （6）.viewBox属性：
      <markers>元素会创建一个viewport视窗，所以它也有viewBox。
      关于viewBox具体用法参阅SVG viewBox和preserveAspectRatio用法详解一章节。
      图形元素引用<markers>：
      图形元素可以使用以下三个属性来引用<markers>元素：
      （1）.marker-start：表示连接路径的开始位置。
      （2）.marker-mid：表示连接路径的中间位置（后面会具体说明）。
      （3）.marker-end：表示连接路径的结束位置。
      marker-start和marker-end比较直白，就是连接路径的开始和结尾处。
      marker-mid可能会产生一些误解，放置<markers>的"中间"位置存在于路径的连接之处。
### SVG文本
    详情见 http://www.softwhy.com/article-9262-1.html
    一.<text>绘制文本
    <svg width="200" height="200">
      <text x="0" y="0">softwhy</text>
    </svg>
    （1）.绘制字符串"softwhy"。
    （2）.设置<text>元素的x和y属性值都为0，如果没有看到文本具体渲染效果，可能会认为文本会紧贴svg矩形框内部的左上角绘制，但实际下过是在水平方位没有疑问，在垂直方位
    （3）.出现上述效果的原因是，y规定的是文本基线坐标。
    <svg width="300" height="400">
      <text x="10 30" y="0" dx="10,30" dy="10,20">softwhy</text>
    </svg>
    x和y规定的是位置的绝对值，而dx和dy则是规定的一个绝对值的增量。
    例如字符"s"使用x属性规定距离左侧的绝对位置是10，那么它的最终位置要在10的基础上再加10。与x和y属性值类似，dx和dy的属性值也可以是百分比，参考viewport视窗的尺寸。
    二.<tspan>元素
      <svg width="400" height="200">
        <text x="100" y="100">
          <tspan>蚂蚁部落一</tspan>
          <tspan>蚂蚁部落二</tspan>
        </text> 
      </svg>
      <tspan>元素以行内元素方式顺序排列，中间是有一个空格。
      特别说明：
      （1）.中间的空格并不是<tspan>元素天然的属性，而是由于换行导致的。
      （2）.<text>元素对于换行或者空格的处理与HTML的相同。
      <svg width="400" height="200">
        <text x="100" y="100">
          <tspan>蚂蚁部落一</tspan>
          <tspan x="10" y="0">蚂蚁部落二</tspan>
        </text> 
      </svg>
      **x和y规定字符的绝对坐标**
    三.<textPath>文本路径
      <svg width="400" height="200">
        <defs>
          <path id="myTextPath"
            d="M20,20
               L160,20
               L160,160
               L20 160"/>
        </defs>
         
        <path d="M20,20
                 L160,20
                 L160,160
                 L20 160"
              fill="none"
              stroke="red"/>
         
        <text>
          <textPath xlink:href="#myTextPath"  startOffset="50">
            蚂蚁部落欢迎您，本站地址在青岛市南区，网址是www.softwhy.com
          </textPath>
        </text>
      </svg>
      （1）.利用id属性值为"myTextPath"的<path>元素绘制一个路径，此路径是没有进行填充，在视觉上不可见。
      （2）.使用<text>元素绘制文本，但是文本外面还要嵌套一个<textPath>元素，这就是本文的主角。
      （3）.之所以文本要嵌套在<textPath>元素中，因为文本要与路径发生联系，需要通过<textPath>元素。
      （4）.通过<textPath>元素的xlink:href属性引用路径即可。
      （5）.红色的路径是为了便于观察而做的一条辅助线。
      此代码与第一段代码的唯一区别是为<textPath>元素添加了startOffset属性。
      startOffset是一个合成词，由单词start与offset合成，start是开始的意思，offset是偏移量的意思。
      由此我们可以猜测此属性用来规定文本距离路径起始位置的偏移量，事实也是如此。

#####stroke-dashoffset 设置虚线模式距离路径起始位置的偏移尺寸
是从后往前

####<linearGradient> 线性渐变
一.<stop>元素：
offset属性：
此属性规定，渐变在引用元素渐变区域偏移量，也就是从何处开始渐变。
stop-color属性：
此属性用于规定渐变的颜色
<stop offset="0%" stop-color="red" />
<stop offset="100%" stop-color="blue" />

.gradientUnits属性：
（1）当属性值为objectBoundingBox时，表示将以应用渐变的元素形成的坐标系统为参考，x1、y1、x2与y2属性值都是0-1之间的数字，当然也可以是百分比数字（0-100%），那么渐变的尺寸是一个相对值，随元素尺寸变化而发生改变。
（2）.当属性值为userSpaceOnUse时，以当前用户坐标系统为参考，x1、y1、x2与y2都是绝对值。
x1、y1、x2与y2属性：
在前文已经对四个属性有所涉及，（x1、y1）与（x2、y2）形成两个点。
两个点可以连接成一条轴线，能够确定元素的渐变区域与渐变方向。
三.spreadMethod属性：
此属性用于规定处理渐变区域之外的区域的方式。
具有三个属性值：
（1）.pad(默认值)。
（2）.reflect。
（3）.repeat。
四.gradientTransform属性：
gradientTransform="rotate(90)">



