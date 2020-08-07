class Pagination{
        constructor(oDiv,options){
            this.oDiv = oDiv
            //options：所传递的参数
            this.options = options || {}
            // 回调函数
            this.options.callback = options.callback || function(){}
            //默认参数
            this.default = {
                page:{
                    num : 1, //当前显示页
                    size : 10, //显示的条数
                    total : 1000, //总条数
                    pages : 100 //总页数
                },
                text:{
                    first : '首页',
                    prev : '上一页',
                    list : '',      //页码
                    next : '下一页',
                    last : '尾页',
                }
            }
            this.List = null
            this.init()
        }
        //初始化
        init(){
            this.Defualt()
            this.AddText()
            this.move()
            this.Dis()    
        }
  
            
        //代替默认参数
        Defualt(){
            for(let a in this.options.page){
                //默认参数 = 传递的参数
                this.default.page[a] =  this.options.page[a]
            }
            for(let a in this.options.text){
                this.default.text[a] =  this.options.text[a]
            }
        }
        //给大盒子添加盒子
        AddText(){     
            this.oDiv.innerHTML = ''
            for(let k in this.default.text){  //k代表this.default.text的属性名
                let D = document.createElement('div') //创建一个div
                D.className = k
                if(k == 'list'){            //给List添加盒子
                    D.cssText = 'display:flex;justify-content:center;align-items:center;'
                    this.List =  D
                }else{                     //给文本添加盒子
                    D.style.cssText = 'height:25px;line-height:25px;border:1px solid #efefef;margin:0 8px;padding:0 8px;font-size:12px;color:#666;cursor:pointer;user-select:none;'
                }
                D.innerHTML = this.default.text[k]
                this.oDiv.append(D)
            }
            this.AddP() 
            this.AddBtn()
            this.Dis()
            this.options.callback(this.default.page.num)
        }
        //给List添加p标签
        AddP(){
            //获取默认参数中的总页数
            let Pages =  this.default.page.pages//总页数
            let num = this.default.page.num   //显示页的页码
            
            if(Pages <= 9){
                for (var i = 1; i < Pages; i++) {
                    this.CreateP(i)
                }
            }else{
                // 小于5时候的显示栏
                if(num < 5){  //小于5
                    for (let i = 1; i <= 5; i++) {
                        this.CreateP(i)
                    }
                    this.AddSpan()
                    for (var i = Pages; i <= Pages ; i++) {
                        this.CreateP(i)
                    }
                }else if(num == 5){   //等于5
                    for (var i = 1; i < 8; i++) {
                        this.CreateP(i)
                    }
                    this.AddSpan()
                    for (var i = Pages; i <= Pages ; i++) {
                        this.CreateP(i)
                    }
                }else if(num > 5 && num <  Pages - 4){   //大于5
                    for (var i = 1; i <= 1; i++) {
                        this.CreateP(i)
                    }
                    this.AddSpan()
                    for(var i = num-2; i <= num+2 ; i++){
                        this.CreateP(i)
                    }
                    this.AddSpan()
                    for (var i = Pages; i <= Pages ; i++) {
                        this.CreateP(i)
                    }
                }else if(num ==  Pages-4){    //等于最后第五张得时候
                    for (var i = 1; i <= 1; i++) {
                        this.CreateP(i)
                    }
                    this.AddSpan()
                    for (var i = Pages - 5; i <= Pages ; i++) {
                        this.CreateP(i)
                    }
                }else if(num > Pages-4){    //大于最后第五张的时候
                    for (var i = 1; i <= 1; i++) {
                        this.CreateP(i)
                    }
                    this.AddSpan()
                    for (var i = Pages - 4; i <= Pages ; i++) {
                        this.CreateP(i)
                    }
                }


            }
        }
        AddSpan(){    //创建一个span（。。。）
            var oSpan = document.createElement('span')
            oSpan.style.cssText = 'display:block;float:left;margin:0 5px'
            oSpan.innerHTML = '...'
            this.List.appendChild(oSpan)
        }
        // 添加输入框和按钮
        AddBtn(){
            // 创建输入框
            let Inp = document.createElement('input')
            Inp.type = 'text'
            Inp.value = this.default.page.num
            Inp.style.cssText = 'width:50px;height:25px;border:1px solid #efefef;padding-left:5px;color:#aaa;outline:none;margin-left:15px;font-size:11px;'
            this.oDiv.appendChild(Inp)
            // 创建按钮
            let Btn = document.createElement('button')
            Btn.innerHTML = '前&nbsp;往'
            Btn.style.cssText = 'width:60px;height:25px;background-color:#b81c22;color:#fff;text-align:center;line-height:25px;margin-left:15px;font-size:12px;border:none;cursor:pointer;outline:none;'
            this.oDiv.appendChild(Btn)
        }
        move(){     //动起来
            this.oDiv.onclick = (e) => {
                e = e || window.event
                var num = this.default.page.num    //当前页数 
                var pages = this.default.page.pages   //总页数
                var target = e.target || e.srcElement   //利用事件委托完成栏目的p的变动
                // 下一页
                if(target.className == 'next' && num !== pages){
                    this.default.page.num++
                    this.AddText()
                }
                // 上一页
                if(target.className == 'prev' && num !== 1){
                    this.default.page.num--
                    this.AddText()
                }
                // 尾页
                if(target.className == 'last' && num !==  pages){
                    this.default.page.num = pages
                    this.AddText()
                }
                // 首页
                if(target.className == 'first' && num !== 1){
                    this.default.page.num = 1
                    this.AddText()
                }
                // 页码
                if(target.nodeName == 'P'){
                    this.default.page.num = parseInt(target.innerHTML)
                    this.AddText()
                }
                // Btn按钮
                if(target.nodeName == 'BUTTON' && target.previousElementSibling.value !== num){
                    var T = target.previousElementSibling.value //文本框内容
                    this.default.page.num = parseInt(T)
                    this.AddText()
                }
            }
        }
        // 禁用
        Dis(){
            // 获取大盒子对象中的所有子元素节点
            var C = this.oDiv.children
            var num = this.default.page.num    //当前页数 
            var pages = this.default.page.pages   //总页数
            var Text = this.oDiv.children[5]
            if(num  == 1){
                C[0].style.backgroundColor = '#f1f1f1'
                C[1].style.backgroundColor = '#f1f1f1'
            }
            if(num == pages){
                C[3].style.backgroundColor = '#f1f1f1'
                C[4].style.backgroundColor = '#f1f1f1'
            }
            if(Text.value <= 0 || Text.value > pages){
                confirm('您输入的信息有误，请重新输入')
                Text.value = ''
                Text.focus()
            }
        }
        //一个创建P的封装函数
       

       CreateP(i){
                var P = document.createElement('p')
                P.innerHTML = i
                P.style.cssText = 'height:25px;padding:0 9px;border:1px solid #efefef;font-size:10px;color:#666;line-height:25px;margin:0 5px;float:left;cursor:pointer;user-select:none;'
                if(i == this.default.page.num){
                    P.style.color = '#fff'
                    P.style.backgroundColor = '#cc0000'
                }
                this.List.appendChild(P)
            }

    }