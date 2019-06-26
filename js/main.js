$(document).ready(function() {


	// Click Event

	$(document).on('click', '.js-toggle', function() {
		$(this).toggleClass('active');
		$('.nav').toggleClass('open');
	});
	$(document).on('click', '.js-popup', function() {
		$('.popup').addClass('open');
	});
	$(document).on('click', '.js-close', function() {
		$('.popup').removeClass('open');
	});
	$(document).on('click', '.input input', function() {
		$('.input').removeClass('focus');
		$(this).parent().removeClass('error');
		$(this).parent().addClass('focus');
	});
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.input input').length) return
		$('.input').removeClass('focus');
		$('.input').removeClass('error');
		if ($(e.target).closest('.popup-form').length || $(e.target).closest('.js-toggle').length || $(e.target).closest('.nav-row').length) return;
		$('.js-toggle').removeClass('active');
		$('.nav').removeClass('open');
		$('.popup').removeClass('open');
	});

	//

	// Scroll Event

	function inWindow(s) {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var currentEls = $(s);
		var result = [];
		currentEls.each(function() {
			var el = $(this);
			var offset = el.offset();
			if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
				result.push(this);
		});
		return $(result);
	}
	$(window).bind('scroll', function() {
		$('.animated').each(function() {
			if ($(document).scrollTop() >= $(this).offset().top - 700) {
				$(this).removeClass('animated');
			}
		});
	});
	$(document).on('click', '.js-anchor', function() {
		var id = $(this).attr('href');
				scroll = $(id).offset().top;
		if ($('.nav').hasClass('open')) {
			$('.js-toggle').removeClass('active');
			$('.nav').removeClass('open');
		}
		$('html, body').animate({
			scrollTop: scroll
		}, 1500);
		return false;
	});

	//

	// Validate Event

	$(document).on('click', '.js-submit', function(event) {
		if ($(this).parent().find('.js-required').val() == '') {
			event.preventDefault();
			$(this).parent().find('.js-required').each(function(){
				$(this).parent().toggleClass('error', $(this).val() == '');
			});
		} else if ($(this).parent().find('.js-required').parent().hasClass('error')) {
			event.preventDefault();
		}
	});

	//

	// Load Event

	$(window).on('load', function() {
		$('.pulse').fadeOut();
		$('.preloader').delay(400).fadeOut('slow');
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		setTimeout(function() {
			$('.animated').each(function() {
				if ($(document).scrollTop() >= $(this).offset().top - 600) {
					$(this).removeClass('animated');
				}
			});
			var InWindow = inWindow('.animated');
			InWindow.removeClass('animated');
		}, 500);
	});

	//
	
});