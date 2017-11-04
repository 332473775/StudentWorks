

//我们和师资点击
$(function(){
	$('.content .two .content_main div').click(function(){
		$(this).children('p').toggle(600);
		$(this).siblings().children('p').hide(600)
})
});

//课堂查看更多
 $('.content .one .content_main span').click(function(){
        $(this).hide();//按钮隐藏
        $('.hiddens').css("display","block");//界面出现
})
