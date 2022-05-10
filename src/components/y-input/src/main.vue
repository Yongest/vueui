<template>
      <input type="text" @change="handleChange" :value="value" />
</template>

<script>

  export default {
    name: "yInput",
    props: {
      value: {
        type: String,
        default: ''
      },
      
    },
    data(){
      return {
        
        
      }
    },
    created(){
     
      

    },
    methods:{
        handleChange(val){
          this.$emit('input',val.target.value)
        },
       
    },
    mounted(){
     
 
    }
  }
</script>

<style lang="less" scoped>
  input{
    height: 26px;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    padding: 4px 11px;
  }
  input:focus{
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
  }
  input:hover{
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
</style>