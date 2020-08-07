$(function(){
	// 公共磁盘
	class Common{
		constructor(){
			//构造函数
             var Tba = new Tbanner()   //顶部广告
             var Hea = new Header()    //header区域
		}
	}

	// 顶部广告图
	class Tbanner{
        constructor(){
        	this.TbClick()
        }
        TbClick(){    //添加点击事件
        	 $('#Tb_btn').click(() => {$($('.Tbanner')[0]).hide()})   //隐藏顶部广告图
        	} 
	}

	//header区域功能
	class Header{
		constructor(){
			this.SeaFocus()
			this.Generate(20)
			this.B_Display()
		}
		//搜索框焦点事件
		SeaFocus(){   
			 $('#search').focus(() => {$('#logo_aside').show()}).blur(() => {$('#logo_aside').hide()})
		}
		// 导航栏li标签生成事件
		Generate(a){
			for (var i = 0; i < a; i++) {
				var oLi = $('<li></li>')
				$(oLi).css('float','left')
				$(oLi).html( '<img src="./images/16_03.gif" alt="" class="g_img">')
				$('.bl_top ul').append(oLi)
			}
		// Generate中鼠标移入移出li事件
		for (var i = 0; i < $('.g_img').length; i++) {
			$('.g_img')[i].onmouseenter = function(){
					$(this).attr('src','./images/17_03.gif')
			}
			$('.g_img')[i].onmouseleave = function(){
					$(this).attr('src','./images/16_03.gif')
			}
		}
		}
        // 导航栏li移入移出时让brand显示和隐藏
        B_Display(){
        	for (var i = 0; i < $('#ul_a>li').length; i++){
        		$('#ul_a>li')[i].onmouseenter = function(){
        			$('.brand').show()
        		}
        		$('#ul_a>li')[i].onmouseleave = function(){
        			$('.brand').hide()
        		}
        	}
        	//brand移入移出时让brand显示和隐藏
            $('.brand')[0].onmouseenter = function(){
            	$('.brand').show()
            }
            $('.brand')[0].onmouseleave = function(){
            	$('.brand').hide()
            }
        }
        
	}

    
    var C = new Common()
})