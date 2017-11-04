$(function(){
	$(".UpDown li").click(function(){
		$(this).addClass('bngc').siblings("li").removeClass('bngc');
	})
})