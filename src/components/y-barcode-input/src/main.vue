<template>
 
       <div class="box _box_"  @paste="onPaste">

       <button 
        @keyup="onKeyup" 
        placeholder="请输入条码！"
       @paste="onPaste"
        @blur="onBlur" 
        @focus="onFocus"
        @keydown="onKeydown"
        ref="button"
        >
       </button>
       <div class="txtbox" 
          @paste="onPaste"
          @mousedown="onMousedown" 
          @mouseup="onMouseup"

          >
          <span>{{txt}}</span>
          <span :class="['guangbiao',focus?'show':'hide']">|</span> 
          <span style="color:#646464">{{!txt?'请输入条码！':''}}</span>
       </div>
       
       <img v-show="txt" src="./delete.svg" alt="" @click="clearTxt">
      <!-- <p class="copy">粘贴</p> -->
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
        focus:false,
        startX:0,
        Control:false,
      }
    },
  
    created(){
      this.txt = this.value

    },
    methods:{
      copy(){
        console.log(11)
      },
      onKeydown(e){
        
        if(e.key === 'Backspace'){
          // if(document.getSelection().baseNode==this.txt){   // 获取选中的文本
          //    this.txt = ''
          // }

             this.txt = this.txt.slice(0,-1)

        }else if(e.key=='Control'){
            this.Control = true
        }
         
      },
      onMousedown(e){
        this.startX = e.clientX
       
      },
      onMouseup(e){
        if (e.clientX===this.startX){  // 点击事件
            this.buttonFocus()
        }else{                        // 选择事件
             this.$refs.button.blur()
        }
       
        if(document.getSelection().baseNode==this.txt){
           debugger
            this.buttonFocus()
          }
        
      },
      onSelectRange(e){
        console.log(e)
      },
      buttonFocus(){
        this.$refs.button.focus()
      },
      clearTxt(){
        this.txt = ''
        this.$emit('input',this.txt)
        return false
      },
     async onPaste(e){
        console.log(e,333)
        const text = await navigator.clipboard.readText();
      
           this.txt = text
           this.$emit('input',this.txt)
     
        
      },
      onBlur(){
        this.focus = false
        this.$emit('input',this.txt)
        
      },
      onFocus(){
        this.focus = true
      },
      onKeyup(e){
          
          if(e.key=='Control'){
            this.Control = false
          }
          
          if(this.Control && (e.key=='v' || e.key=='x' || e.key=='c') ){
            // debugger
            if(e.key=='v'){    // 粘贴
            navigator.clipboard.readText().then((text) => {
              console.log("获取剪贴板成功：", text);
              this.txt = this.txt+text
              this.$emit('input',this.txt)
            })
            .catch((v) => {
              console.log("获取剪贴板失败: ", v);
            });
               
            }

            if(e.key=='x'){     //复制
              this.tool.copy(this.txt)
              this.txt = ''
              this.$emit('input',this.txt)
            }


            
          }else{
                if (e.key.length == 1 && ((e.key.charCodeAt(0) > 47 && e.key.charCodeAt(0) < 58) 
              || (e.key.charCodeAt(0) > 64 && e.key.charCodeAt(0) < 91)
              || (e.key.charCodeAt(0) > 96 && e.key.charCodeAt(0) < 123))) {
                this.txt+= this.lastKey=='Shift'?e.key.toUpperCase():e.key
              }
        
            this.lastKey=e.key
            if (e.key == "Backspace") {
                // this.txt = this.txt.substring(0,this.txt.length - 1)
                this.$emit('input',this.txt)
            }
            if(e.key==='Enter'){
              
              this.$emit('input',this.txt)
            }
          }
        
      },
      compositionstart(e){
       
        console.log(e,'start')
        
      },
      compositionend(e){
        console.log(e,'end')
        
      },
      handleKeydown(e){
        // console.log(e,'keyDown')
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
   
    
    },
   
  }
</script>

<style lang="less" scoped>
.hide{
  visibility: hidden
}
.box{
  position: relative;
  // padding-right: 40px;
  border-radius: 3px;
  overflow: hidden;
}
.guangbiao{
  position: relative;
  margin-left: -3px;
  animation: showHide 1s infinite;
  color:#000;
  font-size: 16px;
}
.copy{
    position: absolute;
    right: 0;
    top:0;
    margin:0;
    line-height: 32px;
    padding: 0 5px;
    color:#fff;
    background-color: #00adef;
    z-index: 100;
    font-size: 12px;
    width: 40px;
    text-align: center;
    cursor: pointer;
  }
 .copy:active{
  opacity: 0.8;
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
    cursor: text;
    text-align: left;
    user-select:unset
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
  img{
    width: 18px;
    position: absolute;
    right: 5px;
    top: 0px;
    padding:7px;
    cursor: pointer;
    z-index: 20;
  }
  .txtbox{
    position: absolute;
    top:0;
    padding: 4px 8px;
    display: block;
    width: calc(100% - 60px);
    z-index: 10;
  }
</style>