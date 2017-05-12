$(window).resize(function() {
	positionPopup();
});

$(document).ready(initPage);
function initPage(){
	initPopup();
	initLink();
	initFooter();
}

function initLink(){
	$('.anhor-link').click(function(e){
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 167;
		$('body,html').animate({scrollTop: top}, 1500);
	});
}

/* Popup initiation */
function initPopup() {
	$('a[data-popup]').click(function(e) {
		$('.popup').removeClass('visible');
		e.preventDefault();
		var id = $(this).attr('data-popup');
		var maskHeight = $(document).height();
		$('.fader').css({'height':maskHeight});
		$('.fader').addClass('visible');
		$('#' + id).addClass('visible');
		positionPopup();
		if($('#' + id).height() >= $(window).height()){
			$('#' + id).css({
				top: $(window).scrollTop(),
			});
		} else {
			$('#' + id).css({
				top: $(window).scrollTop()+ $(window).height()/2,
				marginTop: -$('#' + id).height()/2
			});
		}

	});

	$('.popup-close').click(function (e) {
		e.preventDefault();
		$('.fader').removeClass('visible');
		$('.popup').removeClass('visible');
	});
	$('.fader').click(function () {
		$(this).removeClass('visible');
		$('.popup').removeClass('visible');
	});
}
/* Popup position */
function positionPopup(){
	if($('.popup.visible').width() < $(document).width()){
		$('.popup.visible').css({
			'marginLeft': -($('.popup.visible').width())/2,
			'left': '50%'
		});
	}
	else{
		$('.popup.visible').css({
			'marginLeft': 0,
			'left': 0
		});
	}
}

function initFooter() {
	jQuery(document).on("scroll",function(){
		if (jQuery(window).scrollTop() > 200){
			jQuery('#footer').addClass('visible');
		}else{
			jQuery('#footer').removeClass('visible');
		}
	});
}
