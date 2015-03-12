$(document).ready(function(){

	$('.menu .menu_show').click(function(){
		$('.menu > ul').slideToggle(600);
	});

	$(document).click(function(e){
		if($('.menu_show').css('display') == 'block'){
			if ($(e.target).parents().filter('.menu:visible').length != 1){
				$('.menu > ul').slideUp(600);
			}
		}
	});

	$('.header_center .arrow_bottom').click(function(){
		var tmp = $('.header_top').height();
		$('html, body').animate({
			scrollTop: ($('.block_home_first').offset().top-tmp-62)
		},600);
	});

	$('.menu_sub a').hover(
		function(){
			$(this).find('.img_hover').animate({'opacity': '1'}, 600);
		},
		function(){
			$(this).find('.img_hover').animate({'opacity': '0'}, 600);
		}
	);

	$('.menu_sub_1').animate({
		top: "0",
		opacity: "1"
	}, 1000);
	setTimeout(function(){
		$('.menu_sub_2').animate({
			top: "0",
			opacity: "1"
		}, 1000);
	}, 500);
	setTimeout(function(){
		$('.menu_sub_3').animate({
			top: "0",
			opacity: "1"
		}, 1000);
	}, 1000);
/*
	$('.menu a').hover(
		function(){
			if($('.menu_show').css('display') == 'block'){
			}else{
				if($(this).hasClass('active')){
				}else{
					var tmp_menu_a = $(this);
					$(tmp_menu_a).find('.i_1').stop(true, true).animate({
						right: "0",
						left: "0"
					}, 100);
					setTimeout(function(){
						tmp_menu_a.find('.i_2').stop(true, true).animate({
							top: "0"
						}, 100);
					}, 100);
					setTimeout(function(){
						tmp_menu_a.find('.i_3').stop(true, true).animate({
							right: "0"
						}, 100);
					}, 200);
					setTimeout(function(){
						tmp_menu_a.find('.i_4').stop(true, true).animate({
							bottom: "0"
						}, 100);
					}, 300);
				}
			}
		},
		function(){
			var tmp_menu_a = $(this);
			$(tmp_menu_a).find('.i_1').animate({
				right: "14px",
				left: "14px"
			}, 100);
			$(tmp_menu_a).find('.i_4').animate({
				bottom: "100%"
			}, 100);
			$(tmp_menu_a).find('.i_3').animate({
				right: "100%"
			}, 100);
			$(tmp_menu_a).find('.i_2').animate({
				top: "100%"
			}, 100);
		}
	);
*/

});

$(window).resize(function(){
	if($(window).width() < 1280){
		$('.menu > ul').css('display', 'none').addClass('hide');
	}
	if($(window).width() > 1280){
		$('.menu > ul').css('display', 'block').removeClass('hide');
	}
});

$(window).scroll(function(){
	if($(window).scrollTop() >= 1){
		$('.header_top_bg').animate({'bottom': '-4px'}, 600);
	}
	else{
		$('.header_top_bg').stop(true, true).animate({'bottom': '100%'}, 600);
	}

	var tmp_2 = $('.header').height()/2;
	if($(window).scrollTop() >= tmp_2){
		$('.block_home_first').animate({
			padding: "0",
			opacity: "1"
		}, 600);
	}
	var tmp_3 = $('.block_home_first_all').height();
	var tmp_4 = $('.bg_img_1').height();
	if($(window).scrollTop() >= tmp_2+tmp_3+tmp_4-100){
		$('.block_home_second').animate({
			padding: "0",
			opacity: "1"
		}, 600);
	}
});