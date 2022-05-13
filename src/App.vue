<template>
  <div id="app">
    <p>y-input</p>
    <y-input v-model="a" placeholder="请输入..." />
    <p>y-barcode-input</p>
    <y-barcode-input v-model="b" placeholder="请输入..." />
    {{b}}
  </div>
</template>

<script>
import yInput from './components/y-input/src/main.vue'
import yBarcodeInput from './components/y-barcode-input/src/main.vue'

export default {
  name: 'App',
  components: {
    yInput,
    yBarcodeInput
  },
  data(){
    return {
      a:'a',
      b:'',
    }
  }
}
</script>

<style lang="less">

</style>
