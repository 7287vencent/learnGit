# transition
- transition的四个属性
    transition: property duration timing-function delay;
    - transition-property	指定CSS属性的name，transition效果
      - none	没有属性会获得过渡效果。
      - all 	所有属性都将获得过渡效果。
      - property	定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。
    - transition-duration	transition效果需要指定多少秒或毫秒才能完成
      - time	规定完成过渡效果需要花费的时间（以秒或毫秒计）。 默认值是 0，意味着不会有效果。

    - transition-timing-function	指定transition效果的转速曲线
       - linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
       - ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
       - ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
       - ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
       - ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
       - cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

    - transition-delay	定义transition效果开始的时候
        - time	指定秒或毫秒数之前要等待切换效果开始