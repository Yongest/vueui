<template>
  <div id="app">
    <y-input v-model="aaa" placeholder="请输入..." />
  </div>
</template>

<script>
import yInput from './components/y-input/src/main.vue'

export default {
  name: 'App',
  components: {
    yInput
  },
  data(){
    return {
      aaa:'xxx'
    }
  }
}
</script>

<style lang="less">

</style>
