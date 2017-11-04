$(document).ready(function(){
	$(".title2").click(function(){
		$(this).removeClass("on").siblings().addClass("on");
	})
	$(".title3 p").click(function(){
		$(".photo3").css({"display":"block"});
		$(this).html("收起");
		$(".title3 span").html("《");
			$(".title3 p").click(function(){
			$(".photo3:last").css({"display":"none"});
			$(this).html("查看更多");
			$(".title3 span").html("》");
		})
	})
	$("#x1").click(function(){
		 window.location.href="../html/xunke5.html";
	})
	$("#x2").click(function(){
		 window.location.href="../html/xunke10.html";
	})
	$("#x3").click(function(){
		 window.location.href="../html/xunke.html";
	})
	$("#x4").click(function(){
		 window.location.href="../html/xunke7.html";
	})
	$("#x5").click(function(){
		 window.location.href="../html/xunke2.html";
	})
	$(".home").click(function(){
		 window.location.href="../html/xunke9.html";
	})
	$(".photo3").click(function(){
		 window.location.href="../html/xunke3.html";
	})
})