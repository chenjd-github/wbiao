window.onload = function(){
// 获取表单
var Form = document.forms[0]
// 获取所有的input和i标签
var oInput = document.getElementsByTagName('input')
var oI = document.getElementsByTagName('i')
// 获取验证码标签
var Obtain = document.getElementById('obtain')
// 获取眼睛
var oImg = document.getElementsByClassName('oimg')
// 获取提交按钮
var oBtn = document.getElementById('btn') 

var Reg = [/^(1|\+861)[3-8]{1}\d{9}$/,/^\w{6,12}$/] //设置手机号码和密码的正则
var pass = [0,0,0,0,0]
var v = 0 //计数器
var WB = document.getElementById('wanbiao') //获取万表网图标

WB.onclick = function(){window.location.href = './index.html'}

var oC = getCookie('login')
if(oC){oI[0].innerHTML = '您填写的手机号码已被注册，请重新填写';oI[0].style.display = 'block';delCookie('login',-80)} 


//随机数验证码 
var a = parseInt(Math.random() * 10)
var b = parseInt(Math.random() * 10)
var c = parseInt(Math.random() * 10)
var d = parseInt(Math.random() * 10)
var num = `${a}${b}${c}${d}`


for (let i = 0; i < oInput.length; i++) {
    // 重新进入把表单所有的值清空
    oInput[i].innerHTML = ''
	// 设置手机号码输入框
	if(i == 0){
		oInput[i].onblur = function(){
            if(Reg[i].test(this.value)){
            	oI[i].style.display = 'none'
                pass[i] = 1
            }else{
            	oI[i].style.display = 'block'
                !this.value ? oI[i].innerHTML = "手机号码不能为空" : oI[i].innerHTML = "请输入正确的手机号码"
                pass[i] = 0
            }
        }
	}
	// 设置图形验证码
	if(i == 1){
		oInput[i].onblur = function(){
            if(this.value.toLowerCase() == 'thzm'){
                oI[i].style.display = 'none'
                pass[i] = 1
            }else{
            	oI[i].style.display = 'block'
                !this.value ? oI[i].innerHTML = "图形验证码不能为空" : oI[i].innerHTML = "请输入正确的图形验证码"
                pass[i] = 0
            }
		}
	}
	// 设置短信验证码
	if(i == 2){
        oInput[i].onblur = function(){
        	if(this.value == num){
        		oI[i].style.display = 'none'
                pass[i] = 1
        	}else{
        		oI[i].style.display = 'block'
                !this.value ? oI[i].innerHTML = "短信验证码不能为空" : oI[i].innerHTML = "请输入正确的短信验证码"
                pass[i] = 0
        	}
        }
	}
	// 设置密码
    if(i == 3){
    	oInput[i].onblur = function(){
    		if(Reg[1].test(this.value)){
            	oI[i].style.display = 'none'
                pass[i] = 1
            }else{
            	oI[i].style.display = 'block'
                !this.value ? oI[i].innerHTML = "密码不能为空" : oI[i].innerHTML = "您输入的密码格式不正确，请重新输入"
                pass[i] = 0
            }
    	}
    }
    // 设置再次输入密码
    if(i == 4){
    	oInput[i].onblur = function(){
    		if(this.value == oInput[i-1].value){
    			oI[i].style.display = 'none'
                pass[i] = 1
    		}else{
    			oI[i].style.display = 'block'
                !this.value ? oI[i].innerHTML = "密码不能为空" : oI[i].innerHTML = "两次密码不一致，请检查您的密码"
                pass[i] = 0
    		}
    	}
    }
}
// 短信验证码
Obtain.onclick = function(){
	confirm(`您获取到的短信验证码为${num}`)
	
}

// 眼睛
for (let i = 0; i < oImg.length; i++) {
	oImg[i].onclick = function(){
		var S = this.getAttribute('src')
		if(S == './images/07_03.gif'){
			this.setAttribute('src','./images/08_03.gif')
			this.parentNode.children[0].type = 'text'
		}else{
			this.setAttribute('src','./images/07_03.gif')
			this.parentNode.children[0].type = 'password'
		}
	}
}
// 提交按钮
oBtn.onclick = function(){
	for (let i = 0; i < pass.length; i++) {
		if(pass[i] == 0){
            v ++ 
        }
    }
        if(v !== 0){
            alert('您输入的信息有误，请重新输入')
            v = 0
            return false
        }
}

// 设置cookie
    function setCookie(key,val,t){
        if(t){
            var t1 = new Date()
            var time = t1.getTime() - 1000*3600*8 + 1000 * t
            time = new Date(time)
            document.cookie = `${key}=${val};expires=${time}`
        }else{
            document.cookie = `${key}=${val}`
        }
    }
    
    // 读取cookie
    function getCookie(key){  
        var arr1 = document.cookie.split('; ')
        var num //接收指定的key值
        arr1.forEach(function(item){
            var arr2 = item.split('=')
            if(arr2[0] == key){
                num = arr2[1]
            }
        })
        return num
    }

    // 删除cookie
    function delCookie(key,t2){
        setCookie(key,'a',t2)
    }



}