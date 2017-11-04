$(function(){
		$('.add').click(function(){
			$(this).siblings(".adcont").slideToggle()
			$('.add').not(this).siblings(".adcont").hide();
		})

	});


	$(function(){
	$(".more span").click(function(){
		if($(".more span").html()=="展开更多"){
			$('.hide').show();
			$(this).html('收起')
		}
		else{
			$('.hide').hide();
			$(this).html('展开更多')
		}
		
	})
});