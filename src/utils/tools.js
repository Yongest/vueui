export default {
    // https://www.ruanyifeng.com/blog/2021/01/clipboard-api.html
    copy(data) {
        let copy = document.createElement("p");
        // copy.className = 'copy_dom'+Math.random()
        
        copy.innerText = data;
        document.body.appendChild(copy)
      
        var range = document.createRange();
        /*这里传入的是一个节点，可以是你自己html里面的，不用在这里来创建 如 p标签
        <p class="coyp">我想复制的内容</p> 直接$(".copy")[0] */
        range.selectNode(copy);
        var selection = window.getSelection();
        if (selection) {
            if (selection.rangeCount > 0) selection.removeAllRanges();
            selection.addRange(range);
        }
        document.execCommand("copy");
        /*这里可以放自己的提示方法*/
        copy.style.display = "none";
       
        document.body.removeChild(copy)
      
    }
}