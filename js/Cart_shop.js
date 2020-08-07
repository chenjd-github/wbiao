$(function(){
    //header_img点击滑出事件
    $('#xx').click(() => {$('#Tbanner').css('height','0px')})
    // footer模块导入事件
    $('#foot').load('./html/footer.html')

    var Cart = JSON.parse(localStorage.getItem('Cart')) || []
    Show()
    Sub()

    // 显示商品框
    function Show(){
    	Cart.forEach((item,index) => {
    		var str = ''
    		var type = Object.prototype.toString.call(item)
    		// 判断，如果是数组，则再次遍历内容
    		if(type == '[object Array]'){
    			if(item.length == 0){Cart.splice(index,1)}
    			str += `
    			         <section class="shop_con clear_fix">
                         <div class="shop_name"><input type="checkbox" name="n0" ${item[0].select==1&&item[1].select==1?"checked":''}><span>${item[0].shop}</span></div>
    			       `
    			item.forEach(data => {
                    str += `
                           <article data-id=${data.id} class="shop_number">
                           <div class="prefer"><span>每满300减30</span></div>
			               <div class="goods">
			               <h4 style="width: 76px"><input type="checkbox" name="a1" ${data.select==1?"checked":''}></h4>
			               <h4 style="width: 83px"><img src="${data.pic1}" alt=""></h4>
			               <h4 style="width: 315px">
			               <p>${data.title}</p>
			               <p>钢 绿色 不锈钢</p>
			               </h4>
			               <h4 style="width: 122px"><i>¥</i><span>${data.price2}</span></h4>
			               <h4 style="width: 170px">
			               <input class="aa" type="button" value="-" id="Del">
			               <input class="cc" type="text" name="wenben" value="${data.number}" disabled>
			               <input class="aa" type="button" value="+" id="add">
			               </h4>
			               <h4 style="width: 138px"><i>¥</i><span>${data.price3}</span></h4>
			               <h4 style="width: 84px">
			               <input type="button" value="删除" id="DelShop">
			               <input type="button" value="移入收藏" id="Collect">
			               </h4>
			               </div>
			               </article>
                           `
    			})
    			str += `</section>`
    		}else{    //否则，说明是一个对象，直接拼接
    			str += `
    			        <section class="shop_con clear_fix">
		                <div class="shop_name"><input type="checkbox" name="n0" ${item.select==1?"checked":''} class="shop_checked"><span>${item.shop}</span></div>
		                <article data-id=${item.id} class="shop_number">
		                <div class="prefer"><span>每满300减30</span></div>
		                <div class="goods">
		                <h4 style="width: 76px"><input type="checkbox" name="a1" ${item.select==1?"checked":''}></h4>
		                <h4 style="width: 83px"><img src="${item.pic1}" alt=""></h4>
		                <h4 style="width: 315px">
		                <p>${item.title}</p>
		                <p>钢 绿色 不锈钢</p>
		                </h4>
		                <h4 style="width: 122px"><i>¥</i><span>${item.price2}</span></h4>
		                <h4 style="width: 170px">
		                <input class="aa" type="button" value="-" id="Del">
		                <input class="cc" type="text" name="wenben" value="${item.number}" disabled>
		                <input class="aa" type="button" value="+" id="add">
		                </h4>
		                <h4 style="width: 138px"><i>¥</i><span>${item.price3}</span></h4>
		                <h4 style="width: 84px">
		                <input type="button" value="删除" id="DelShop">
		                <input type="button" value="移入收藏" id="Collect">
		                </h4>
		                </div>
		                </article>
		            </section>
    			       `
    		}
    		$(str).insertBefore($('.shop_footer'))
    		var arr1 = []
    		// 获取所有商品是否都被选中
    	    Cart.forEach(item => {
    	    	var type = Object.prototype.toString.call(item)
    	    	if(type == '[object Array]'){
                   item.forEach(data => {
                       arr1.push(data.select)
                   })
    	    	}else{
    	    		arr1.push(item.select)
    	    	}
    	    })
            var All = arr1.every(item => {
            	return item == 1
            })
            for (var i = 0; i < $('.a0').length; i++) {
            	All ? $('.a0')[i].checked = true : $('.a0')[i].checked = false
            }
    	})
    }

     // 添加大盒子的点击委托事件
     $('.main-con').click((e) => {
     	e = e || window.event
     	target = e.target || e.srcElement
     	// 添加
     	if(target.id == 'add'){
     		var oD = target.parentNode.parentNode.parentNode
            var DataId = $(oD).attr('data-id')
            Cart.forEach(item => {
            	var type = Object.prototype.toString.call(item)
            	if(type == '[object Array]'){
            		item.forEach(data => {
            			if(data.id == DataId){
            				data.number = data.number - 0 + 1
            			}
            		})
            	}else if(item.id == DataId){
            		item.number = item.number - 0 + 1
            	}
            })
            localStorage.setItem('Cart',JSON.stringify(Cart))
            // 移除所有的商品，再次添加
            $('.shop_con').remove()
            Show()
     	}
        // 减少商品数量
        if(target.id == 'Del'){
        	var oD = target.parentNode.parentNode.parentNode
        	var DataId = $(oD).attr('data-id')
        	 Cart.forEach(item => {
            	var type = Object.prototype.toString.call(item)
            	if(type == '[object Array]'){
            		item.forEach(data => {
            			if(data.id == DataId){
            				data.number = data.number < 2 ? data.number : data.number - 1
            			}
            		})
            	}else if(item.id == DataId){
            		item.number = item.number < 2 ? item.number : item.number - 1
            	}
            })
        	localStorage.setItem('Cart',JSON.stringify(Cart))
        	$('.shop_con').remove()
            Show()
        }
        // 删除
        if(target.id == 'DelShop'){
        	var oD = target.parentNode.parentNode.parentNode
        	var DataId = $(oD).attr('data-id')
        	Cart.forEach(function(item,index,arr){
        		var type = Object.prototype.toString.call(item)
        		if(type == '[object Array]'){
        			for(let i = 0 ; i < item.length ; i++){
        				if(item[i].id == DataId){
        					item.splice(i,1)
        				}
        			}
        		if(item.length == 0){Cart.splice(index,1)}
        		}else{
        			Cart = Cart.filter(t => {
        				return t.id != DataId
        			})
        		}
        	})
        	localStorage.setItem('Cart',JSON.stringify(Cart))
        	$('.shop_con').remove()
        	Show()
        }
        //全选
        if(target.name == 'a0'){
        	Cart.forEach(item => {
        		var type = Object.prototype.toString.call(item)
        		if(type == '[object Array]'){
        			item.forEach(data => {
        				data.select = target.checked ? 1 : 0
        			})
        		}else{
        			item.select = target.checked ? 1 : 0
        		}
        	})
        	localStorage.setItem('Cart',JSON.stringify(Cart))
        	$('.shop_con').remove()
        	Show()
        }
        // 商品框单选
        if(target.name == 'a1'){
        	var oD = target.parentNode.parentNode.parentNode
        	var DataId = $(oD).attr('data-id')
            Cart.forEach(item => {
            	var type = Object.prototype.toString.call(item)
            	if(type == '[object Array]'){
        			item.forEach(data => {
        				if(data.id ==  DataId){
        					data.select = (data.select == 1) ? 0 : 1
        				}
        			})
        		}else{
        			if(item.id == DataId){
        				item.select = (item.select == 1) ? 0 : 1
        			}	
        		}
            })  
            localStorage.setItem('Cart',JSON.stringify(Cart))
        	$('.shop_con').remove()
        	Show()
        }     
        Sub()
        // 清空购物车
        if(target.id == 'settle'){
        	var P = Com()[0] //总价
        	var S = Com()[1] //总数
        	confirm(`您一共购买了${S}件商品，支付了${P}元，欢迎下次光临`)
            localStorage.clear()
            $('.shop_con').remove()
            location.reload()
        }
     })

     //小计
        function Sub(){
            Cart.forEach(item => {
            	var type = Object.prototype.toString.call(item)
            	if(type == '[object Array]'){
            		item.forEach(data => {
                        data.price2 = data.price2.replace('¥','')
                        data.price3 = parseFloat(data.price2) * parseInt(data.number)
            		})
            	}else{
            		item.price2 = item.price2.replace('¥','')
            		item.price3 = parseFloat(item.price2) * parseInt(item.number)
            	}
            })
            localStorage.setItem('Cart',JSON.stringify(Cart))
            $('.shop_con').remove()
        	Show()

        	var arr2 = Com()  //总计和数量
            $('#total').html(arr2[0])
            $('#choose').html(arr2[1])
        }
        // 合计
        function Com(){
        	var num = 0 //合计
        	var sum = 0 //总数量
        	Cart.forEach(item => {
        		var type = Object.prototype.toString.call(item)
        		if(type == '[object Array]'){
        			item.forEach(data => {
                        if(data.select == 1){
                            num += data.price3
                            sum += parseInt(data.number)
                        }
        			})
        		}else{
        			if(item.select == 1){
        				num += item.price3
        				sum += parseInt(item.number)
        			}
        		}
        	})
        	return [num,sum]
        }
       // 商品数量标签
       var SL = document.getElementsByClassName('shop_number').length
       $('#shopping').html(SL)
       // 万表页面跳转
       $('.wbiao').click(function(){window.location = './index.html'})
})