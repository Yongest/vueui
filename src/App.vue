<template>
  <div id="app">
    <p>y-input</p>
    <y-input  v-model="a" placeholder="请输入..." />
    <p>y-barcode-input</p>
    <y-barcode-input :disabled="true" v-model="b" placeholder="请输入..." />
    <!-- <button style="padding:20px 100px">{{b}}</button> -->
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
  created(){
    
  },
  data(){
    return {
      a:'a',
      b:'',
    }
  },
  methods:{
   
  }
}
</script>

<style lang="less">

</style>
