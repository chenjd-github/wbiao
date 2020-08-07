window.onload = function(){
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
        
}