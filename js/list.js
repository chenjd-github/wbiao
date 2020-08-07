$(function(){
	// 公共磁盘
	class Com{
		constructor(){
			//构造函数
			var Head = new H()
			var Main = new M()
			var Foot = new F()
		}
	}
	// header部分
	class H{
		constructor(){
            this.Ul_a()
		}
		// 导航滑入滑出事件
		Ul_a(){
			$('.banner h4').hover(function(){$('.header-con .banner #ul_a').css({height:'460px',overflow:'visible',transition:'height 0s'})},  //滑入
			function(){$('.header-con .banner #ul_a').css({height:'0px',overflow:'hidden',transition:'height .5s'})})  //滑出

			$('.header-con .banner #ul_a').hover(function(){$('.header-con .banner #ul_a').css({height:'460px',overflow:'visible',transition:'height 0s'})}, //滑入
            function(){$('.header-con .banner #ul_a').css({height:'0px',overflow:'hidden',transition:'height .5s'})}) //滑出
		}
	}

    // mian部分
    class M{
    	constructor(){
    		this.init()
    	}
    	// 初始化
        init(){
            this.Data()
            this.PL_img()
        }
        // 获取数据
        Data(){
            $.get({
            	url : './list.php',
            	success(res){
            		var arr = JSON.parse(res)

                console.log(arr[0])

            var pager = $('#pagination')[0]  //获取分页栏的标签
            // 参一
            var obj1 = {
				        num : 1, //当前显示页
				        size : 28, //显示的条数
				        total : arr.length, //总条数
				        pages : Math.ceil(arr.length / 28) //总页数
				    }
				    // 参二
				    var obj2 = {
				        first : 'Home',   //首页
				        prev : 'previous',  //上一页
				        list : '',      //页码
				        next : 'next',  //下一页
				        last : 'back',  //尾页
				    }
                    var P = new Pagination(pager,{
                    	page : obj1,
                    	text : obj2,
                    	callback(num){
                    		var data = arr.slice( (num - 1) * obj1.size , num * obj1.size )  //通过索引截取数据
                    		var str1,str2 = ''
                    		data.forEach(function(item,index,arr){
                    			str1 += `
                              <article class="shop_list col-xs-3">
					                            <a class="list_img" href="./Details.html?id=${item.id}">
					                            <img src="${item.pic1}" alt="">
					                            <div class="ls_price">
					                            <img src="${item.pic2}" alt="">
					                            <span><em>${item.price3}</em></span>
					                            </div>
					                        </a>
					                        <div class="list_text">
					                            <p><em>月付</em><i></i><span class="yf_price">${item.price1}</span><b></b><span class="yj_price">${item.price2}</span></p>
					                            <a href="./Details.html?id=${item.id}" class="slh">${item.title}</a>
					                            <p><span>${item.sale}</span> <em></em></p>
					                            <p>${item.shop}</p>
					                            <p>${item.tags}</p>
                                      <div class="shop_hover">
                                          <a href="#">加入收藏</a>
                                          <a href="#" class="collection">已收藏</a>
                                          <a href="#">加入购物车</a>
                                      </div>
					                        </div>
					                    </article>
                    			       `
                                 str1 = str1.replace('undefined','')
                    			       $('.shop_row').html(str1)
                    			       $('.wb_page').html(obj1.pages)
                    			       $('.wb_num').html(num)
                    		})
                        // 最近浏览款
                            var data1 = data.filter(function(item,index,arr){
                                return index >= 0 && index < 8 
                            })
                            data1.forEach(function(item,index,arr){
                                   str2 += `
                                                  <aside class="history_shop">
                                                  <a href="${item.link}" class="hty_list">
                                                      <img src="${item.pic1}" alt="">
                                                      <div class="hty_price">
                                                      <img src="${item.pic2}" alt="">
                                                      <span><em>${item.price3}</em></span>
                                                      </div>
                                                  </a>
                                                  <div class="hst_text">
                                                      <p><em>月付</em><span class="hyf_price">${item.price1}</span><span class="hyj_price">${item.price2}
                                                      </span></p>
                                                      <a href="javascript:;">${item.title}</a>
                                                     
                                                  </aside>
                                                  ` 
                            })
                            $('.history-con').html(str2)
                        // list款中的hover事件
                            for(let i=0;i<$('.shop_list').length;i++){
                               $($('.shop_list')[i]).hover(function(){$($('.shop_hover')[i]).css('display','block')},
                                                           function(){$($('.shop_hover')[i]).css('display','none')})
                            } 
                    	}
                    })
            	}
            })
        }
        // 评论轮播图
        PL_img(){
               $('#list_plug').load('./html/jquerylbt/index.html')    
        }
    }
    
    // footer部分
    class F{
    	constructor(){
    		this.addFoot()
    	}
        addFoot(){
        	$('#foot').load('./html/footer.html')
        }
    }
    
    var C = new Com()
})