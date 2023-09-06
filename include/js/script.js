$(document).ready(function(){
	headerTop();
})

function headerTop(){
	$(window).scroll(function(){
		var header = $('.header'),
		scrollTop = $(document).scrollTop();
		
		if(scrollTop == 0){
			header.removeClass('on');
		}else{
			header.addClass('on');
		}
	})
}