// 轮播图
var timer //定时器
var Time //自动轮播定时器
var oBox = document.getElementById('box1')
var oUl = document.getElementById('images')
var oImg = document.getElementsByClassName('auction_right_div')
var oLeft = document.getElementsByClassName('direction1')[0]
var oRight = document.getElementsByClassName('direction1')[1]
var w = parseFloat(getStyle(oBox,'width')) //图片的宽度
var r = 1 //次数
var t = 0 //设置点击的时间限制
var l = 0 //小圆点的索引值

// 首先先封装一个运动框架
function move(obj,attr,target,time,callback){ //obj事件源,attr属性,target移动目标位置,time移动的时间,callback移动后的回调函数
    var startTime = new Date()  //开始时间
    var startVal = parseInt(getStyle(obj,attr)) //开始位置
    var endVal = parseInt(target)   //结束位置
    timer = setInterval(function(){
        var nowTime = new Date()
        var step = (nowTime - startTime) / time  //计算时间差和输入时间的比例
        if(step >= 1){
            step = 1
            clearInterval(timer)
        }
        var s = (endVal - startVal) * step  + startVal
        obj.style.left = s + 'px'
        if(step == 1){callback && callback()}
    },20)
}
// 获取属性值
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]   
}

// 设置右按钮
oRight.onclick = function(){
    clearInterval(Time)
    if(new Date() - t > 500){
         t = new Date()
         r++
         move(oUl,'left',-w*r,500,function(){
             if(parseInt(oUl.style.left) <= -w * (oImg.length - 1) ){
                oUl.style.left = -w + 'px'
                r = 1
             }
         })
    }
}
// 设置左按钮
oLeft.onclick = function(){
    clearInterval(Time)
    if(new Date() - t > 500){
        t = new Date()
        r--
        move(oUl,'left',-w*r,500,function(){
            if(parseInt(oUl.style.left) == 0){
                 oUl.style.left = -w * (oImg.length - 2) + 'px'
                 r = oImg.length - 2
            }
        })
    }
}

//设置自动轮播定时器
Time = setInterval(fn,3000)
function fn(){
     r++
         move(oUl,'left',-w*r,500,function(){
             if(parseInt(oUl.style.left) <= -w * (oImg.length - 1) ){
                oUl.style.left = -w + 'px'
                r = 1
             }
         })
}
fn()
// 当鼠标进入时，停止定时器
oBox.onmouseover = function(){
    clearInterval(Time)
}
// 当鼠标出去时，开始定时器
oBox.onmouseout = function(){
    Time = setInterval(fn,3000)
}

// 倒计时
function cutDownTime(argument,oli){
    var totalSec = argument * 60
    var oLi = oli
    var timer = setInterval(function(){

        if(totalSec <= 0)
        {
            clearInterval(timer)
            alert("活动已经结束了，谢谢光临！")
            return
        }

        totalSec -- 

        var hour = Math.floor(totalSec / 3600)
        var minute = Math.floor(totalSec % 3600 / 60)
        var sec = totalSec % 60

        oLi[0].innerHTML = Math.floor(hour / 10)
        oLi[1].innerHTML = hour % 10
        oLi[3].innerHTML = Math.floor(minute / 10)
        oLi[4].innerHTML = minute % 10
        oLi[6].innerHTML = Math.floor(sec / 10)
        oLi[7].innerHTML = sec % 10
    },1000)
}
for (let i = 0; i < $('.countdown').length; i++) {
    var d = parseInt(Math.random() * 110) + 10
    var a =  $('.countdown')[i].children
    cutDownTime(d,a)
}
// 品牌馆图片淡入淡出
for (let i = 0; i < $('.brand_pic').length; i++) {
    $('.brand_pic')[i].onmouseenter = function(){
        $($('.Pop-up')[i]).fadeIn(500)
    }
    $('.brand_pic')[i].onmouseleave = function(){
        $($('.Pop-up')[i]).fadeOut(500)
    }
}
// 尾部
$('footer').load('./html/footer.html')