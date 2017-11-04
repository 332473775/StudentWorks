	$(function(){
		var i=0;
		$(".add-icon1 li img").click(function(){
			i++;
			var index = $(this).parent().index();
			$(".add-icon1 li").find("div").addClass('disnone');
			if(i%2 ===0)
			    $(".add-icon1 li").eq(index).find("div").addClass('disnone');
			else $(".add-icon1 li").eq(index).find("div").removeClass('disnone');
		})
	});