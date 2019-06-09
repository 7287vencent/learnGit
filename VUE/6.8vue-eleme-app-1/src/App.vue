<template>
  <div id="app">
    <!-- <router-view/> -->
    <v-header :seller='seller'></v-header>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'

export default {
  name: 'App',
  data() {
    return {
      seller: {
        // 要从 API 获取
      }
    }
  },
  components: {
    'v-header': header
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5cfbc455dd5a8c3884bf48ea/vue/seller')
    .then(res => {
      console.log(res)
      if(res.data.errno === 0) {
        this.seller = Object.assign({},this.seller, res.data.data)
        console.log(this.seller)
      }
    })
    .catch(err => {
      console.log(err)
    })
  },
}
</script>

<style>

</style>
