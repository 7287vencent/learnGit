<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <!-- 查看选择的是 哪一个评论标签
      2 是 全部
      1 是 满意
      0 是 不满意
       -->
      <span class="block positive" :class="{'active':selectType===2}" @click="select(2,$event)">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <!-- 满意 -->
      <span class="block positive"
      :class="{'active':selectType === 0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <!-- 不满意 -->
      <span class="block negative"
      :class="{'active':selectType === 1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div class="switch" :class="{'on':onlyContent}"
    @click="toggleContent">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评论</span>
    </div>
  </div>
</template>

<script>

const POSITIVE = 0  //不满意
const NEGATIVE = 1  //满意
const ALL = 2 //默认的 选中的 selectType 为全部
export default {
  props: {
    ratings: { //评论
      type: Array,
      default() {
        return []
      }
    },
    selectType: {  // 选择标签
      type: Number,
      default: ALL
    },
    onlyContent: {  //只看有内容的评论
      type: Boolean,
      default: false
    },
    // 默认的标签信息
    desc: {
      type: Object,
      default() {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    }
  },
  computed: {
    positives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      })
    },
    negatives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      })
    }
  },
  methods: {
    select(type, event) {
      if(!event._constructed) {
        return
      }
      this.$emit('select', type)
    },
    toggleContent() {
      if(!event._constructed) {
        return
      }
      this.$emit('toggle')
    }
  },
}
</script>

<style lang="stylus" scoped>
   @import "../../common/stylus/mixin.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
        &.positive
          background: rgba(0, 160, 220, 0.2)
          &.active
            background: rgb(0, 160, 220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
</style>

