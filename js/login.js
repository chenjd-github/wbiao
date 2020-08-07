$(function(){
    
	var T = 60 * 1000  //一分钟
    function Random(){   //生成一个随机数
		var a = parseInt(Math.random() * 10)
		var b = parseInt(Math.random() * 10)
		var c = parseInt(Math.random() * 10)
		var d = parseInt(Math.random() * 10)
		var e = `${a}${b}${c}${d}`  //定义个变量接收随机数
		return e
	}
	var num = Random()
	// 点击获取验证码
	$($('input')[3]).click(function(){
		if(num == ''){  //判断，验证码为空时，说明已经过期，重新生成一个新的验证码
			num = Random()
			confirm(`您获取到的短信验证码为：${num}`)
			setTimeout(function(){  
			num = ''
			},T)
		}else{    //得到验证码，让它一分钟后为空
            confirm(`您获取到的短信验证码为：${num}`)
			setTimeout(function(){  
			num = ''
			},T)
		}
	})    

	//点击登录标签切换section
	$('#sm_login').click(function(){  //扫码登录
		$('#hy_login').removeClass('red')
		$('#huiyuan_login').css('display','none')
        $(this).addClass('red')
        $('#shaoma_login').css('display','block')
	})
    $('#hy_login').click(function(){ //会员登录
    	$('#sm_login').removeClass('red')
		$('#shaoma_login').css('display','none')
        $(this).addClass('red')
        $('#huiyuan_login').css('display','block')
    })

    // 设置表单
    var Reg = /^(1|\+861)[3-8]{1}\d{9}$/
    //点击立即登录按钮，开始逐行排查
    $($('input')[4]).click(function(){
        if(Reg.test($($('input')[0]).val())){  //如果手机验证码正确，进入下一步排查
        	$($('i')[0]).css('display','none')
        	if($('input')[1].value.toLowerCase() == 'cmwy'){  //验证图形验证码,如果正确，进入下一步排查
                $($('i')[1]).css('display','none')
                if($('input')[2].value == num){        //验证短信验证码，一分钟一刷新
                    $($('i')[2]).css('display','none')
                }else{
                	$($('i')[2]).css('display','block')  //否则显示i（短信验证码），让表单无法提交
                	return false
                }                     
        	}else{
        		$($('i')[1]).css('display','block')  //否则显示i（图形验证码），让表单无法提交
        		return false
        	}
        }else{
        	$($('i')[0]).css('display','block')  //否则显示i（手机），让表单无法提交
        	return false
        }
    })

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
    
    //读取页面是否有cookie（l）,有的话说明数据库没有这条数据，需注册
    var oI = getCookie('l')
    if(oI){
    	confirm(`手机号码${oI}未注册，请注册后重新登陆`)
    	delCookie('l',-80)
    }

    // 点击图标，跳转到首页
    $('#wanbiao').click(() => {
        window.location.href = './index.html'
    })
})