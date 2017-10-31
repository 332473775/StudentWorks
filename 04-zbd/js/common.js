 // var startPosition, endPosition, deltaX, deltaY, moveLength;  
 // var htmls=[];
 
 //        $(".content").bind('touchstart', function(e){  
 //            var touch = e.touches[0];  
 //            startPosition = {  
 //                x: touch.pageX,  
 //                y: touch.pageY  
 //            }  
 //        }) .bind('touchmove', function(e){  
 //            var touch = e.touches[0];  
 //            endPosition = {  
 //                x: touch.pageX,  
 //                y: touch.pageY  
 //            };  
  
 //            deltaX = endPosition.x - startPosition.x;  
 //            deltaY = endPosition.y - startPosition.y;  
 //            moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));  
 //        }).bind('touchend', function(e){  
 //            if(deltaX < 0) { // 向左划动  
 //                console.log("向左划动");  
 //            } else if (deltaX > 0) { // 向右划动  
 //                console.log("向右划动");  
 //            }  
 //        });  




 // company.html  teacher.html
	$('.add').singleTap(function(){

		 $('.detail').hide();

		 $(this).parent().next().show('slow');
		 
	})
 
// class.html
 $('.class-more').singleTap(function(){
 	$('.hide').toggle();
 	if($('.hide').css('display')=='block'){
 		 $(this).text('收起');
 	}
 	else{
 		$(this).text('查看更多')
 	}
 })

 $('.act').singleTap(function(){
 	$(this).addClass('active').siblings().removeClass('active');
 	$('.tab1').show().siblings().hide();

 })
 $('.works').singleTap(function(){
 	$(this).addClass('active').siblings().removeClass('active');
 	$('.tab2').show().siblings().hide();
 })

 
 // job.html
 $('.job-more').click(function(){
 	if($('.po-more').css('display') =='none'){
 			// alert(111);
 			$('.po-more').css('display','block');
 				 $(this).text('收起');
 	}
 	else{
 		// alert(111)
 		$('.po-more').css('display','none');
 		 $(this).text('展开更多');
 	}
 	 
 	 
 })


 // index.html

 $('ol li').each(function(){
			$(this).click(function(){
			 		 var index=$(this).index();
			 		 $(this).addClass('active').siblings().removeClass('active');
			 		 $('.runbanner ul li').eq(index).css('opacity','1').siblings().css('opacity','0')
			 	})
			 })

 // star01.html
  


  
