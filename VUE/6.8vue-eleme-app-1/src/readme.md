#### Object.assign  并接两个值成一个 {}
Object.assign({},this.seller, res.data.data)

## 注意事项
提示错误的时候，最好该一下
**特别是函数错误时**
1. 在header.vue中 图片写了 html + css 但是图片未加载出来 是因为 绑定的函数没有写 渲染时应该就阻塞了 所以导致图片加载不出来