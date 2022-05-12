$(function() {
	//로딩중
	const $loading = $('.loading');
	$loading.children('p').fadeOut();
	$loading.delay(350).fadeOut(800);

	const $h1 = $('h1');
	const $home = $('#home');
	const $h2 = $home.find('h2');

	const $header = $('header');
	const $nav = $header.find('nav');
	const $btnGnb = $header.find('.btn-gnb');

	const $mnu = $($nav.find('.gnb > li > a'));

	const $aboutme = $('#aboutme');
	const $skill = $('#skill');
	const $portfolio = $('#portfolio');



	const $aside = $('aside');


	$(window).on('load resize', function() {
		$home.height($(window).height());

		$h1.css({
			top: $h2.offset().top - 72,
			marginLeft: -$h1.width() / 2
		});

		if ($(window).width() > 640) {
			//PC모드
			$h1.css({
				top: $h2.offset().top - 72,
				marginLeft: -$h1.width() / 2
			});
			$nav.show()
		} else {
			//모바일
			$h1.css({
				top: $h2.offset().top - 100,
				marginLeft: -$h1.width() / 2
			});

			$btnGnb.removeClass('clse');
			$nav.hide()
		}
	});

	$btnGnb.on('click',function(){
		$(this).toggleClass('clse');
		$nav.toggle();
	});

	$(window).on('scroll',function(){
		let scrollTop = $(this).scrollTop();

		if(scrollTop>$(this).height()){
			$('header').addClass('fixed')
			$('#aboutme').css({
				marginTop : $header.height()
			})
		}else{
			$header.removeClass('fixed');
			$('#aboutme').css({
				marginTop : 0
			})
		}


	});

	$(window).on('scroll',function(){
		
		let scrollTop = $(this).scrollTop();

		if(scrollTop>120){
			$aside.stop().fadeIn();
		}else{
			$aside.stop().fadeOut();
		}

		const view = scrollTop + $(this).height() - $('footer').offset().top;

		if(view>0){
			$aside.css({marginBottom : view});
		}else{$aside.css({marginBottom : 0})}
	});

	$aside.on('click',function(evt){

		evt.preventDefault();

		$('html,body').animate({
			scrollTop : 0
		})

	});


$($mnu.eq(0)).on('click',function(evt){
	evt.preventDefault();

	$('html,body').animate({
		scrollTop : $('#aboutme').offset().top
	});

	$(this).parent().addClass('on').siblings().removeClass('on');

});

$($mnu.eq(1)).on('click',function(evt){
	evt.preventDefault();

	$('html,body').animate({
		scrollTop : $('#skill').offset().top
	});

	$(this).parent().addClass('on').siblings().removeClass('on');

});


$($mnu.eq(2)).on('click',function(evt){
	evt.preventDefault();

	$('html,body').animate({
		scrollTop : $('#portfolio').offset().top
	});

	$(this).parent().addClass('on').siblings().removeClass('on');

});

$(window).on('scroll',function(){
	let scrollTop = $(this).scrollTop();

	if(scrollTop>=$aboutme.offset().top){
		$($mnu).eq(0).parent().addClass('on').siblings().removeClass('on')
	}

	if(scrollTop>=$skill.offset().top - 1){
		$($mnu).eq(1).parent().addClass('on').siblings().removeClass('on')
	}

	if(scrollTop>=$portfolio.offset().top - 1){
		$($mnu).eq(2).parent().addClass('on').siblings().removeClass('on')
	}
	
});







});