(function($){
	// トップページ後スライド
	$('.bgimg-slider').bgSwitcher({
		images: ['images/slMRKR.png','images/slEDRN.png','images/slJILL.png', 'images/slPEYO.png', 'images/slPIN.png'],
		effect: "fade",
		interval: 5000,
		duration: 2000,
		easing: "linear"
	});

	// ハンバーガーメニューボタン
	$(".openbtn1").click(function () {
		$(this).toggleClass('active');
		$("#g-nav, #g-nav2").toggleClass('active');
		$('.menu_bar, .header_nav, #frame-img').toggleClass('invisible');
	});
	$("#g-nav a").click(function () {
		$(".openbtn1, #g-nav, #g-nav2").removeClass('active');
		$('.menu_bar, .header_nav, #frame-img').removeClass('invisible');
	});

	// 左の文字色変化
	var wh = $(window).height();
	$('.container').on("scroll", function() {
    	let currentPos = $(this).scrollTop(); //スクロール量
		var page_1 = $('#page1').offset().top;
		var page_2 = $('#page2').offset().top;
		var page_3 = $('#page3').offset().top;

		// TOP
    	if(-wh <= page_1 < 0 || page_1 === 0) {
    		$("#right_top").removeClass('change');
    	}else{
    		$("#right_top").addClass('change');
    	}
		// ABOUT
		if(-wh <= page_2 < 0 || page_2 === 0) {
    		$("#right_about").addClass('change');
    	}else{
    		$("#right_about").removeClass('change');
    	}
		// PHOTO
		if(-wh <= page_3 < 0 || page_3 === 0) {
    		$("#right_photo").addClass('change');
    	}else{
    		$("#right_photo").removeClass('change');
    	}
	});

	//タイトル固定
	var top_title = $('#splash_logo_wrap').offset().top;
	var wh = $(window).height() * 0.17;
	$('.container').scroll(function() {
    	let scroll = $(this).scrollTop();
    	if( scroll + wh >= top_title) {
			$("#splash_logo_wrap").addClass('fixed');
			$("#rectangle").addClass('delete');
    	}else{
			$("#splash_logo_wrap").removeClass('fixed');
			$("#rectangle").removeClass('delete');
		}
	});

	// PHOTOページ横スクロール
	var moving;
	var speed = 0;
	$('.container, horizon_album').on('scroll, mousewheel', function(event, mov){
		var top_pos = $('#page3').offset().top;
		var left_scroll = $('#page3').scrollLeft();

		$('.horizon_album').scrollLeft(moving);
		if(top_pos === 0 && left_scroll <= 0){
			// console.log('解放');
			speed = 1;
			var moving = $('.horizon_album').scrollLeft() - mov * speed;
			$('.horizon_album').scrollLeft(moving);
			return true;
		}else if(top_pos === 0 && left_scroll > 0){
			// console.log('固定');
			speed = 1;
			var moving = $('.horizon_album').scrollLeft() - mov * speed;
			$('.horizon_album').scrollLeft(moving);
			return false;
		}else if(top_pos === 0 && left_scroll === 0){
			// console.log('固定');
			speed = 0;
			var moving = $('.horizon_album').scrollLeft() - mov * speed;
			$('.horizon_album').scrollLeft(moving);
			return true;
		}
	});

	//SVGアニメーションの描画
	var stroke;
	stroke = new Vivus('mask', {
    	start:'manual',
    	type: 'scenario-sync',
    	duration: 5,
    	forceRender: false,
    	animTimingFunction:Vivus.EASE,
	});
	$(window).on('load',function(){
    	// $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
		// $("#splash_logo").delay(1500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェイドアウト
		console.log('タイトルアニメーション');
    	stroke.play();
	});

})(jQuery);