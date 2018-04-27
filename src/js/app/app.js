define(["jquery","handlebars","swiper"],function($,handlebars,swiper){
	new Swiper(".swiper-container",{
			autoplay:1000,
			loop:true
		})
		$(".foot_list").on("click","li",function(){
			var ind = $(this).index();
			
		})
})