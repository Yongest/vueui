<template>
     <div class="box">
       <button @keyup="buttonKeyup" placeholder="请输入条码！" @blur="onBlur" @focus="onFocus">{{txt}} <span :class="['guanbiao',focus?'show':'hide']">|</span> <span style="color:#646464">{{!txt?'请输入条码！':''}}</span></button>
       <!-- <input  @change="handleChange" placeholder="请输入条码！"  ref="input" @compositionstart="compositionstart" @compositionend="compositionend" @keyup="handleKeydown" :value="value" :class="setClass" /> -->
       
        <!-- <p class="tips" v-show="showTips">请切换至英文输入法!</p> -->
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
        
        showTips:false,
        // password:false
        txt:'',
        lastKey:'',
        focus:false
      }
    },
  
    created(){
      this.txt = this.value
    
    },
    methods:{
      onBlur(){
        this.focus = false
        this.$emit('input',this.txt)
      },
      onFocus(){
        this.focus = true
      },
      buttonKeyup(e){
       
         if (e.key.length == 1 && ((e.key.charCodeAt(0) > 47 && e.key.charCodeAt(0) < 58) 
          || (e.key.charCodeAt(0) > 64 && e.key.charCodeAt(0) < 91)
          || (e.key.charCodeAt(0) > 96 && e.key.charCodeAt(0) < 123))) {
            this.txt+= this.lastKey=='Shift'?e.key.toUpperCase():e.key
          }
    
         this.lastKey=e.key
        if (e.key == "Backspace") {
            this.txt = this.txt.substring(0,this.txt.length - 1)
            this.$emit('input',this.txt)
        }
        if(e.key==='Enter'){
          
          this.$emit('input',this.txt)
        }
      },
      compositionstart(e){
       
        console.log(e,'start')
        
      },
      compositionend(e){
        console.log(e,'end')
        
      },
      handleKeydown(e){
        console.log(e,'keyDown')
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
          //  this.password = false
          // this.$emit('input',e.target.value)
    /*       setTimeout(() => {
            if(this.Chinese){
              console.log(3434)
              this.showTips = true
              this.$emit('input','')
              this.$refs.input.value = ''
              setTimeout(() => {
                this.$refs.input.value = ''
              }, 200);
            }else{
              this.$emit('input',e.target.value)
              this.showTips = false
            }
            this.Chinese = false
          }, 300); */
              
        },
       
    },
    mounted(){
     
 
    }
  }
</script>

<style lang="less" scoped>
.hide{
  visibility: hidden
}
.guanbiao{
  position: relative;
  margin-left: -3px;
  animation: showHide 1s infinite;
  color:#000;
}
@keyframes showHide {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
  input,button{
    overflow: visible;
    transition: all .3s;
    position: relative;
    height: 32px;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    padding: 4px 8px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    cursor: pointer;
    text-align: left;
    
  }
  button:placeholder-shown,input:placeholder-shown {
    text-overflow: ellipsis;
}
  input:focus,button:focus{
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    
  }
  button:active{
    background: #fff;
  }
  input:hover,button:hover{
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