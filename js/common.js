$(function() {
		// 头部导航的显隐按钮
		$(".show-btn").on("click", function() {
			$(".nav-bar").toggle();
		})
		//页面宽度变化的时候，改变导航条的显隐
		$(window).on("resize", function() {
			if(window.innerWidth  > 680) {
				$(".nav-bar").show();
			}
		})
})