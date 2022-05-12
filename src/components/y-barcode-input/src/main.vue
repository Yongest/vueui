<template>
     <div>
       <input  @change="handleChange" placeholder="请输入条码！" ref="input" @keydown="handleKeydown" :value="value" :class="setClass" />
        <p class="tips" v-show="showTips">请切换至英文输入法!</p>
      </div>
     
</template>

<script>

  export default {
    name: "yBarcodeInput",
    props: {
      value: {
        type: String,
        default: ''
      },
     
    
    },
    data(){
      return {
        Chinese:false,
        radomId:'',
        showTips:false,
        
      }
    },
  
    created(){
      
     
    },
    methods:{
      handleKeydown(e){
      
        if(e.key==='Process'){  // 表示是中文输入法
             
             this.Chinese = true

        }
      },
       setClass(){
          return {
            [this.$vnode.data.staticClass]:true
          }
       },
        handleChange(e){
              
              if(this.Chinese){
                  this.showTips = true
                  this.$emit('input','')
                  this.$refs.input.value = ''
              }else{
                this.$emit('input',e.target.value)
                this.showTips = false
              }
              this.Chinese = false
              
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
    box-sizing: border-box;
    
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
  .tips{
    color:red;
    font-size: 12px;
    margin:0;
    padding-left: 10px;
    line-height: 12px;
    position: relative;
    margin-top: -3px;
  }
</style>