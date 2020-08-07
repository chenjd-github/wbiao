$(function(){
	// 公共磁盘
	class Com{
		constructor(){
			//构造函数
			var Head = new HF()
			var Main = new M()
		}
    }
    // header和footer部分插入html中
	class HF{
		constructor(){
			this.LoadHeader()
			this.LoadFooter()
		}
		LoadHeader(){
			$('#head').load('./html/Details_header/details_head.html')
		}
		LoadFooter(){
			$('#foot').load('./html/footer.html')
		}
	}
	//main部分
	class M{
		constructor(){
            this.Data()
		}
		// 利用数据遍历网页
		Data(){
            var url = location.href
            var str = url.split('?')[1]
            $.ajax({
            	url : 'Details.php',
            	type: 'GET',
            	data : {id : str},
            	success(res){
            		res = JSON.parse(res)
            		console.log(res)
            		var str1 
            		str1 = `
            		<!-- 顶部导航栏 -->
				    <div class="main_top">
				        <div class="mt_left">
				        <a href="#">首页</a>
				        <a href="#">></a>
				        <a href="">${res.brand}</a>
				        <a href="">></a>
				        <a href="">${res.title}</a>
				        </div>	
				        <div class="mt_right">
				        <button>自营</button>
				        <span>${res.shop}</span>
				        <span>+</span>
				        <span>关注</span>
				        </div>
				    </div>
			        <!-- shop部分 -->
			        <div class="main_con">
			        <div id="div_box" class="clear_fix">
						<div class="wrap">
						    <div class="smallImg imgBox">
						        <img src=${res.pic1} alt="chothes" />
						        <div id="shadow">
						        	<table border="1px"width="100px"height="100px"><tr><td class="td_top td_left"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top"></td><td class="td_top td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="td_right"></td></tr><tr><td class="td_left td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_bottom"></td><td class="td_right td_bottom"></td></tr></table>
						        </div>
						    </div>

						    <div class="bigImg imgBox">
						        <img src=${res.pic1} width="800" height="800" alt="chothes"/>
						    </div>
						</div>

							<div id="div_box-right">
									<div id="div_box-right-1">
									<span id="div_box-right-1-span_1">${res.title}</span>
									<span id="div_box-right-1-span_2">商务潜水两不误！高科技氧化锆陶瓷单向旋转表圈 水滴状日历视窗 Super-luminova优质夜光<i>咨询优惠>></i></span>
									<span id="div_box-right-1-span_3"><b>型号：${res.model} </b><b>编号：${res.pin}</b><b>品牌：爱宝时</b><b>销量：6103</b></span>
									</div>
									<div id="div_box-right-2">
										<li id="div_box-right-2-span_1">
											<span >分期</span>
										    <span><i></i><strong>${res.price1}</strong> <b>X12期</b><em><img src="./images/details_03.gif" alt="">免息免手续费</em></span>
										</li>
										<li id="div_box-right-2-span_2">
										    <span >万表价</span><i>${res.price3}</i><b>市场价 <em>${res.price2}</em></b>
										</li>
										<li id="div_box-right-2-span_3">
										    <span >领劵</span>
										    <img src="./images/lingjuan_03.gif" alt="">
										    <i>更多</i>
										</li>
										<li id="div_box-right-2-span_4">
										    <span>促销</span>
										    <i>[满减]</i>
										    <span>每满300减30</span>
										</li>
									</div>	



									<div id="div_box-right-3">
										<span id="div_box-right-3-span_1">配送</span>
										<span id="div_box-right-3-span_2">(顺丰包邮)</span>
										<span id="div_box-right-3-span_3"> 17:30前支付，预计1-3个工作日内发货，支持货到付款</span>
									</div>
									<div id="div_box-right-4">
										<span>承诺</span>
										<ul>
											<li> 正品保障</li>
											<li>正规发票</li>
											<li>假一赔三</li>
											<li>7天退换</li>
											<li>全球联保</li>
											<li>实体店体验</li>
											<li>货到付款</li>
										</ul>
									</div>
									<div id="div_box-right-5">
										<span>服务</span>
										<div id="div_box-right-5-div-1">万表名匠提供全国联保</div>
										<img src="./images/dot1_03.gif" alt="" id="dbr_img1">
										<div id="div_box-right-5-div-2">100%正品二手表库</div>
										<img src="./images/dot1_03.gif" alt="" id="dbr_img2">
									</div>
									<div id="div_box-right-6">
										<span style="left:15px;">款式</span>
										    <div id="div_box-right-6-div-1" style="border:2px solid #666;"><img src="./images/b1.jpg" width="38px" height="38px"/></div>
											<div id="div_box-right-6-div-2"><img src="./images/b2.jpg" width="38px" height="38px"/></div>
											<div id="div_box-right-6-div-3"><img src="./images/b3.jpg" width="38px" height="38px"/></div>
											<div id="div_box-right-6-div-4"><img src="./images/b4.jpg" width="38px" height="38px"/></div>
											<div id="div_box-right-6-div-5"><img src="./images/b5.jpg" width="38px" height="38px"/></div>
											<div id="div_box-right-6-div-6"><img src="./images/b6.jpg" width="38px" height="38px"/></div>
									</div>
									<div id="div_box-right-7"  onselectstart="return false;">
										<span style="left:15px;">数量</span>
										<div id="div_box-right-7-div-1">1</div>
										<div id="div_box-right-7-div-2">
											<div id="div_box-right-7-div-2-onck1">
											<svg t="1588663432940" style="width: 0.7em;height: 0.7em;font-weight: 700;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2160" width="200" height="200"><path d="M511.867 399.019l292.16 292.155c12.27 12.28 32.186 12.28 44.457 0 12.28099999-12.27 12.281-32.186 0-44.457l-314.388-314.388c-12.27-12.28-32.186-12.28-44.457 0l-314.387 314.388c-6.14 6.136-9.211 14.183-9.211 22.228s3.071 16.092 9.21099999 22.228c12.27 12.28 32.186 12.28 44.45700001 1e-8l292.159-292.15500001z" p-id="2161" fill="#bfbfbf"></path></svg>	
											</div>
											<div id="div_box-right-7-div-2-onck2">
											<svg t="1588663543242" style="width: 0.7em;height: 0.7em;font-weight: 700;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2343" width="200" height="200"><path d="M512.133 624.981l-292.16-292.155c-12.27-12.28-32.186-12.28-44.457 0-12.281 12.27-12.281 32.186 0 44.457l314.388 314.388c12.27 12.28 32.186 12.28 44.457 0l314.387-314.388c6.14-6.136 9.211-14.183 9.211-22.228s-3.071-16.092-9.211-22.228c-12.27-12.28-32.186-12.28-44.457 0l-292.159 292.155z" p-id="2344" fill="#bfbfbf"></path></svg>	
											</div>
										</div>
										<span style="position: absolute;left: 0;color: #838383;line-height: 43px;font-size: 12px;margin-left: 170px;float: left;">件</span>
									</div>
									<div id="div_box-right-8">
										<div id="div_box-right-8-div-1"><a href="./Cart_shop.html">立即购买</a>
										<div id="div_box-right-8-div-2">加入购物车</div>
									</div>
							</div>
								<div id="div_box-bottom">
									<div id="div_box-bottom-left">
									    <div class="arrow_left">
								        <img src="./images/arrow01.jpg" alt="" id="al">
									    </div>
										<div id="div_box-bottom-left-div-1" style="opacity: 1;" class="slt"><img src="./images/a1.jpg" width="64px" height="64px"/></div>
										<div id="div_box-bottom-left-div-2" class="slt"><img src="./images/a2.jpg" width="64px" height="64px"/></div>
										<div id="div_box-bottom-left-div-3" class="slt"><img src="./images/a3.jpg" width="64px" height="64px"/></div>
										<div id="div_box-bottom-left-div-4" class="slt"><img src="./images/a4.jpg" width="64px" height="64px"/></div>
										<div id="div_box-bottom-left-div-5" class="slt"><img src="./images/a5.jpg" width="64px" height="64px"/></div>
										<div class="arrow_right">
								        <img src="./images/arrow02.jpg" alt="" id="ar">
								        </div>
								        <div id="div_box-bottom-left-mid">
										<a style="cursor: pointer;">收藏商品</a>
			                            <a href="">分享<a>
									    </div>
									</div>
								</div>
							</div>
			                <!-- 广告 -->
							<div class="detailsAd"><img src="./images/26.jpg" alt=""></div>
			                <!-- 下方详情信息 -->
			                <div class="Details">
			                    <div class="Details-con">
			                        <ul>
			                        	<li style="color:#333333;font-weight: bold;border-bottom: 2px solid #333">商品详情</li>
			                        	<li>规格参数</li>
			                        	<li>售后服务</li>
			                        	<li>线下体验</li>
			                        	<li>评价(205)</li>
			                        </ul>
			                        <article>
			                        <p>温馨提示</p>
			                        <p>商品展示区划去的价格为品牌建议零售价，并非原价；万表价为商品实时售价，欢迎比较购买！</p>
			                        </article>
			                        <aside>
			                        <img src="./images/c1.png" alt="">
			                        <img src="./images/c2.jpg" alt="">
			                        <img src="./images/c3.jpg" alt="">
			                        <img src="./images/c4.jpg" alt="">
			                        <img src="./images/c5.jpg" alt="">
			                        </aside>
			                        <div class="explain">
			                            <h4>价格说明</h4>
			                            <div class="explain_a">
			                            <span>划线价</span>：商品展示的划线价或参考价可能是品牌专柜价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在万表上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。<br>
										<span>折扣</span>：如无特殊说明，促销价是销售商在参考价基础上给予的优惠比例/优惠金额。如有疑问，您可以在购买前与客服联系。<br>
										<span>异常问题</span>：因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺利购物
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                  <!-- 购物车提示信息 -->
	                          <aside class="shop_prompt">加入购物车成功 </aside>
			        </div>
			      
            		`
            		$('main').html(str1)

		var wrap = document.getElementsByClassName("wrap")[0];
        var smallImgBox = wrap.getElementsByClassName("imgBox")[0];//div1
        var smallImg = smallImgBox.getElementsByTagName("img")[0];//图片1
        var bigImgBox = wrap.getElementsByClassName("imgBox")[1];//div2
        var bigImg = bigImgBox.getElementsByTagName("img")[0];//图片2
        
        var shadow = document.getElementById("shadow")

        var div1=document.getElementById("div_box-bottom-left-div-1");
		var div2=document.getElementById("div_box-bottom-left-div-2");
		var div3=document.getElementById("div_box-bottom-left-div-3");
		var div4=document.getElementById("div_box-bottom-left-div-4");
		var div5=document.getElementById("div_box-bottom-left-div-5");
		

        var yse1=document.getElementById("div_box-right-6-div-1");
	 	var yse2=document.getElementById("div_box-right-6-div-2");	
	 	var yse3=document.getElementById("div_box-right-6-div-3");	
	 	var yse4=document.getElementById("div_box-right-6-div-4");	
	 	var yse5=document.getElementById("div_box-right-6-div-5");	
	 	var yse6=document.getElementById("div_box-right-6-div-6");		

        var x=1;
		var divnum=document.getElementById("div_box-right-7-div-1");
		var divadd=document.getElementById("div_box-right-7-div-2-onck1");
		var divdelete=document.getElementById("div_box-right-7-div-2-onck2");



        // 放大镜
        smallImgBox.onmouseover = function () {
            shadow.style.display="block";
            bigImgBox.style.display="block";
        };
        smallImgBox.onmouseout = function () {
            shadow.style.display="none";
            bigImgBox.style.display="none";
        }


        smallImgBox.onmousemove = function (ev) {

            var ev = ev || window.event;

            //鼠标在指定div里面的坐标:可视区里面鼠标坐标- div到文档边界的距离
          /*  var x =  ev.clientX  -   shadow.offsetParent.offsetLeft -shadow.offsetParent.offsetParent.offsetLeft   ;
            var y = ev.clientY  -    shadow.offsetParent.offsetTop  -shadow.offsetParent.offsetParent.offsetLeft;*/
            var x =  ev.pageX  - wrap.parentNode.offsetLeft - shadow.clientWidth/2;
            var y = ev.pageY  - wrap.parentNode.offsetTop - shadow.clientHeight/2;
    
            
            if( x < 0 ) x = 0
            if( x > smallImgBox.offsetWidth - shadow.clientWidth ) x = smallImgBox.offsetWidth - shadow.clientWidth 
            if(  y < 0 ){  y = 0; }
            if(  y > smallImgBox.offsetHeight - shadow.clientHeight ) y = smallImgBox.offsetHeight - shadow.clientHeight

            shadow.style.left = x + "px";
            shadow.style.top = y + "px";

             var  radioX = x /  (smallImgBox.offsetWidth - shadow.offsetWidth)  >=1? 1 : x /   (smallImgBox.offsetWidth - shadow.offsetWidth) ;
             var  radioY = y /  (smallImgBox.offsetHeight - shadow.offsetHeight) >=1? 1 :  y /  (smallImgBox.offsetHeight - shadow.offsetHeight);
            
             bigImg.style.left = -radioX*(bigImg.width - bigImgBox.offsetWidth) +"px";
             bigImg.style.top = -radioY*(bigImg.height - bigImgBox.offsetHeight) +"px";

        };
       
        div1.onmouseover=function(){
		div1.style.border="2px solid #d9d9d9";
		div2.style.border="1px solid #f0f0f0";
		div3.style.border="1px solid #f0f0f0";
		div4.style.border="1px solid #f0f0f0";
		div5.style.border="1px solid #f0f0f0";
		smallImg.src="./images/a1.jpg";
    	bigImg.src="./images/aa1.jpg";
		}
		div2.onmouseover=function(){
			div2.style.border="2px solid #d9d9d9";
			div1.style.border="1px solid #f0f0f0";
			div3.style.border="1px solid #f0f0f0";
			div4.style.border="1px solid #f0f0f0";
			div5.style.border="1px solid #f0f0f0";
			smallImg.src="./images/a2.jpg";
        	bigImg.src="./images/aa2.jpg";
		}
		div3.onmouseover=function(){
			div3.style.border="2px solid #d9d9d9";
			div1.style.border="1px solid #f0f0f0";
			div2.style.border="1px solid #f0f0f0";
			div4.style.border="1px solid #f0f0f0";
			div5.style.border="1px solid #f0f0f0";
			smallImg.src="./images/a3.jpg";
        	bigImg.src="./images/aa3.jpg";
		}
		div4.onmouseover=function(){
			div4.style.border="2px solid #d9d9d9";
			div1.style.border="1px solid #f0f0f0";
			div2.style.border="1px solid #f0f0f0";
			div3.style.border="1px solid #f0f0f0";
			div5.style.border="1px solid #f0f0f0";
			smallImg.src="./images/a4.jpg";
        	bigImg.src="./images/aa4.jpg";
		}
		div5.onmouseover=function(){
			div5.style.border="2px solid #d9d9d9";
			div1.style.border="1px solid #f0f0f0";
			div2.style.border="1px solid #f0f0f0";
			div3.style.border="1px solid #f0f0f0";
			div4.style.border="1px solid #f0f0f0";
			smallImg.src="./images/a5.jpg";
        	bigImg.src="./images/aa5.jpg";
		}
 
     // 样式款
     yse1.onclick=function(){
    	yse1.style.border="2px solid #666";
    	yse2.style.border="0.2px solid #e5e4e4";
    	yse3.style.border="0.2px solid #e5e4e4";
    	yse4.style.border="0.2px solid #e5e4e4";
    	yse5.style.border="0.2px solid #e5e4e4";
    	yse6.style.border="0.2px solid #e5e4e4";
    	// smallImg.src="./images/b1.jpg";
    	// bigImg.src="./images/b1.jpg";
    }
      yse2.onclick=function(){
    	yse2.style.border="2px solid #666";
    	yse1.style.border="0.2px solid #e5e4e4";
    	yse3.style.border="0.2px solid #e5e4e4";
    	yse4.style.border="0.2px solid #e5e4e4";
    	yse5.style.border="0.2px solid #e5e4e4";
    	yse6.style.border="0.2px solid #e5e4e4";
    	yse7.style.border="0.2px solid #e5e4e4";
    	yse8.style.border="0.2px solid #e5e4e4";
    	// smallImg.src="./images/b2.jpg";
    	// bigImg.src="./images/b2.jpg";
    }
      yse3.onclick=function(){
    	yse3.style.border="2px solid #666";
    	yse1.style.border="0.2px solid #e5e4e4";
    	yse2.style.border="0.2px solid #e5e4e4";
    	yse4.style.border="0.2px solid #e5e4e4";
    	yse5.style.border="0.2px solid #e5e4e4";
    	yse6.style.border="0.2px solid #e5e4e4";
    	yse7.style.border="0.2px solid #e5e4e4";
    	yse8.style.border="0.2px solid #e5e4e4";
    	// smallImg.src="./images/b3.jpg";
    	// bigImg.src="./images/b3.jpg";
    }
        yse4.onclick=function(){
    	yse4.style.border="2px solid #666";
    	yse1.style.border="0.2px solid #e5e4e4";
    	yse2.style.border="0.2px solid #e5e4e4";
    	yse3.style.border="0.2px solid #e5e4e4";
    	yse5.style.border="0.2px solid #e5e4e4";
    	yse6.style.border="0.2px solid #e5e4e4";
    	yse7.style.border="0.2px solid #e5e4e4";
    	yse8.style.border="0.2px solid #e5e4e4";
    	// smallImg.src="./images/b4.jpg";
    	// bigImg.src="./images/b4.jpg";
    }
        yse5.onclick=function(){
    	yse5.style.border="2px solid #666";
    	yse1.style.border="0.2px solid #e5e4e4";
    	yse2.style.border="0.2px solid #e5e4e4";
    	yse3.style.border="0.2px solid #e5e4e4";
    	yse4.style.border="0.2px solid #e5e4e4";
    	yse6.style.border="0.2px solid #e5e4e4";
    	yse7.style.border="0.2px solid #e5e4e4";
    	yse8.style.border="0.2px solid #e5e4e4";
    	// smallImg.src="./images/b5.jpg";
    	// bigImg.src="./images/b5.jpg";
    }
        yse6.onclick=function(){
    	yse6.style.border="2px solid #666";
    	yse1.style.border="0.2px solid #e5e4e4";
    	yse2.style.border="0.2px solid #e5e4e4";
    	yse3.style.border="0.2px solid #e5e4e4";
    	yse4.style.border="0.2px solid #e5e4e4";
    	yse5.style.border="0.2px solid #e5e4e4";
    	yse7.style.border="0.2px solid #e5e4e4";
    	yse8.style.border="0.2px solid #e5e4e4";
    	// smallImg.src="./images/b6.jpg";
    	// bigImg.src="./images/b6.jpg";
    }
    // 添加或者减少数量
    divadd.onclick=function(){
		x++;
		divnum.innerText=x;
	}
	divdelete.onclick=function(){
		x--;
		if(x<2){
			x=1;
		}
		divnum.innerText=x;
	}
    // 放大镜下方的箭头图片切换
    $('.arrow_left').hover(function(){$('#al').prop('src','./images/arrow03.jpg')},function(){$('#al').prop('src','./images/arrow01.jpg')})
    $('.arrow_right').hover(function(){$('#ar').prop('src','./images/arrow04.jpg')},function(){$('#ar').prop('src','./images/arrow02.jpg')})
     // 缩略图滑入滑出透明度
    $('.slt').mouseenter(function(){$(this).css('opacity','1')}).
    mouseleave(function(){$(this).parent().children().not(this).not('div:eq(8)').css('opacity','.5')})
    $('#div_box-bottom-left-mid').css('opacity','1')

    // 添加点击按钮，将数据存在locaStorage中
    $('#div_box-right-8-div-2').click(function(){
    	var Cart = localStorage.getItem('Cart')
    	// 说明已经有数据存在
    	if(Cart){
    		Cart = JSON.parse(Cart)
    		var a = 0 //计数器
    		Cart.forEach(item => {
    			// 如果数据已经添加，则加一
    			if(item.id == res.id){
    				item.number = item.number - 0 + 1
    				localStorage.setItem('Cart',JSON.stringify(Cart))
    				a++
    			}
    			// 如果是同一个店铺，让它们放在同一个数组里
    			if(item.shop == res.shop && item.id != res.id){
                    var arr = []
                    arr.push(item)
                    arr.push(res)
                    Cart.push(arr)
                    Cart = Cart.filter(t => {
                    	return t !== item
                    })
                    localStorage.setItem('Cart',JSON.stringify(Cart))
                    a++    
    			}
    		})
    		// 以上情况都不是，Cart添加一条数据
    		if(a != 1){
    			Cart.push(res)
    			localStorage.setItem('Cart',JSON.stringify(Cart))
    		}
    	}else{
    		localStorage.setItem('Cart',JSON.stringify([res]))
    	}
        // 购物车添加提示信息
        $('.shop_prompt').fadeIn(300).fadeTo(1500, 0.6).fadeOut(500)
    })



    }
    })
                
	}
		
	}
    var C = new Com()
})