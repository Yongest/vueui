<template>
      <input type="text" @change="handleChange" :value="value" :class="setClass" />
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
 
  
    created(){
      
     
    },
    methods:{
       setClass(){
          return {
            [this.$vnode.data.staticClass]:true
          }
       },
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
    overflow: visible;
    transition: all .3s;
    position: relative;
    height: 32px;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    padding: 4px 11px;
    display: inline-block;
    width: 100%;
  }
  input:placeholder-shown {
    text-overflow: ellipsis;
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
  .query-group-cust{
    width: calc(50% - 10px);
  }
</style>