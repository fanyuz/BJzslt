$(function(){
	
	//手机端导航效果
	$("#nav_mobile").click(function(){
		$("nav").slideToggle()
	})
	
	
	//轮播图
	if($(window).width()>640){
		var pcSwiper = new Swiper ('.swiper-container', {
		    //direction: 'vertical',
		    loop: true,
		    autoplay: 5000,
		    effect:"fade",
		    
		    // 分页器
		    pagination: '.swiper-pagination'
		    
		   
		}) 
	}else{
		var mobileSwiper = new Swiper ('.swiper-container-mobile', {
		    loop: true,
		    autoplay: 4000,
		    effect:"slide",
		   
		})   
	}
		
		
})