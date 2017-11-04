$(document).ready(function(){
    show();
    var index=0;
    var time;
    var s = $(".rotation ul li").length;
    function show()
    {
        $(".rotation ul li").eq(index).fadeIn('slow').siblings().hide();
        $(".rotation ol li").eq(index).addClass("current").siblings().removeClass();
        if (index<s-1) {index++}
        else(index=0)
        time = window.setTimeout(show,2000);    
    }
    $(".rotation ul li").mouseenter(function()
        {
            window.clearTimeout(time);
        })
    $(".rotation ul li").mouseout(function()
        {
            show();
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
    $(".touxiang ul li").eq(1).click(function(){
         window.location.href="../html/xunke6.html";
    })
})