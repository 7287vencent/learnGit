##创建Canvas画布
    #canvas {
       background: #000;
    }
    <canvas id="canvas"></canvas>
#获取 Canvas 对象
  canvas.getContext(contextType, contextAttributes);
  - 上下文类型（contextType）：
    2d（本小册所有的示例都是 2d 的）：代表一个二维渲染上下文
    webgl（或"experimental-webgl"）：代表一个三维渲染上下文
    webgl2（或"experimental-webgl2"）：代表一个三维渲染上下文；这种情况下只能在浏览器中实现 WebGL 版本2 (OpenGL ES 3.0)。
#绘制路径
    方法	描述
    fill()	填充路径
    stroke()	描边
    arc()	创建圆弧
    rect()	创建矩形
    fillRect()	绘制矩形路径区域
    strokeRect()	绘制矩形路径描边
    clearRect()	在给定的矩形内清除指定的像素
    arcTo()	创建两切线之间的弧/曲线
    beginPath()	起始一条路径，或重置当前路径
    moveTo()	把路径移动到画布中的指定点，不创建线条
    lineTo()	添加一个新点，然后在画布中创建从该点到最后指定点的线条
    closePath()	创建从当前点回到起始点的路径
    clip()	从原始画布剪切任意形状和尺寸的区域
    quadraticCurveTo()	创建二次方贝塞尔曲线
    bezierCurveTo()	创建三次方贝塞尔曲线
    isPointInPath()	如果指定的点位于当前路径中，则返回 true，否则返回 false

    lineCap	设置或返回线条的结束端点样式
    lineJoin	设置或返回两条线相交时，所创建的拐角类型
    lineWidth	设置或返回当前的线条宽度
    miterLimit	设置或返回最大斜接长度
    fillStyle	设置或返回用于填充绘画的颜色、渐变或模式
    strokeStyle	设置或返回用于笔触的颜色、渐变或模式
    shadowColor	设置或返回用于阴影的颜色
    shadowBlur	设置或返回用于阴影的模糊级别
    shadowOffsetX	设置或返回阴影距形状的水平距离
    shadowOffsetY	设置或返回阴影距形状的垂直距离
    createLinearGradient()	创建线性渐变（用在画布内容上）
    createPattern()	在指定的方向上重复指定的元素
    createRadialGradient()	创建放射状/环形的渐变（用在画布内容上）
    addColorStop()	规定渐变对象中的颜色和停止位置
    scale()	缩放当前绘图至更大或更小
    rotate()	旋转当前绘图
    translate()	重新映射画布上的 (0,0) 位置
    transform()	替换绘图的当前转换矩阵
    setTransform()	将当前转换重置为单位矩阵，然后运行 transform()
#使用 Canvas 绘制图像的步骤
#绘制图像
    Canvas 还有一个经常用的方法是drawImage()。

    方法	描述
    drawImage()	向画布上绘制图像、画布或视频
    context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

    img：规定要使用的图像、画布或视频
    sx：可选。开始剪切的 x 坐标位置
    sy：可选。开始剪切的 y 坐标位置
    swidth：可选。被剪切图像的宽度
    sheight：可选。被剪切图像的高度
    x：在画布上放置图像的 x 坐标位置
    y：在画布上放置图像的 y 坐标位置
    width：可选。要使用的图像的宽度（伸展或缩小图像）
    height：可选。要使用的图像的高度（伸展或缩小图像）