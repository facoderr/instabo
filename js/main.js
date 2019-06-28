$(document).ready(function() {


	// Click Event

	$(document).on('click', '.js-toggle', function() {
		$('html').toggleClass('overflow');
		$('.nav').toggleClass('open');
		$(this).toggleClass('active');
		$('.head-contacts').toggleClass('active');
	});
	$(document).on('click', '.js-call', function() {
		$('.js-popup-call').addClass('open');
		$('.js-popup-call').each(function() {
			var success = $(this).find('.js-data-success').html();
			$('.js-success-title').html(success);
		});
		$('.js-success-btn').removeClass('btn-space btn-sea btn-fire');
		$('.js-success-btn').addClass('btn-fire');
	});
	$(document).on('click', '.js-price', function() {
		var price = $(this).parent().find('.price-box-title').text();
		$('.js-price-title').html(price);
		$('.js-popup-price').addClass('open');
		$('.js-popup-price').each(function() {
			var success = $(this).find('.js-data-success').html();
			$('.js-success-title').html(success);
		});
		if ($(this).hasClass('btn-space')) {
			$('.js-price-btn').removeClass('btn-space btn-sea btn-fire');
			$('.js-success-btn').removeClass('btn-space btn-sea btn-fire');
			$('.js-price-btn').addClass('btn-space');
			$('.js-success-btn').addClass('btn-space');
		} else if ($(this).hasClass('btn-sea')) {
			$('.js-price-btn').removeClass('btn-space btn-sea btn-fire');
			$('.js-success-btn').removeClass('btn-space btn-sea btn-fire');
			$('.js-price-btn').addClass('btn-sea');
			$('.js-success-btn').addClass('btn-sea');
		} else {
			$('.js-price-btn').removeClass('btn-space btn-sea btn-fire');
			$('.js-success-btn').removeClass('btn-space btn-sea btn-fire');
			$('.js-price-btn').addClass('btn-fire');
			$('.js-success-btn').addClass('btn-fire');
		}
	});
	$(document).on('click', '.js-close', function() {
		$('.popup').removeClass('open');
	});
	$(document).on('click', '.js-callback', function() {
		var success = $(this).find('.js-data-success').html();
		$('.js-success-title').html(success);
		$('.js-success-btn').removeClass('btn-space btn-sea btn-fire');
		$('.js-success-btn').addClass('btn-fire');
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
		if ($(e.target).closest('.popup-form').length || $(e.target).closest('.popup-price').length || $(e.target).closest('.popup-success').length || $(e.target).closest('.js-toggle').length || $(e.target).closest('.nav-row').length) return;
		$('html').removeClass('overflow');
		$('.nav').removeClass('open');
		$('.js-toggle').removeClass('active');
		$('.head-contacts').removeClass('active');
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
			$('html').removeClass('overflow');
			$('.nav').removeClass('open');
			$('.js-toggle').removeClass('active');
			$('.head-contacts').removeClass('active');
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
		setTimeout(function() {
			$('.input').removeClass('error');
			$('.popup').removeClass('open');
		}, 2500);
		setTimeout(function() {
			$('.js-popup-success').addClass('open');
		}, 3000);
	});

	//

	// Load Event

	$(window).on('load', function() {
		$('.pulse').fadeOut();
		$('.preloader').delay(400).fadeOut('slow');
		var vhFix = new VHChromeFix([
			{
				selector: '.main-row',
				vh: 100
			}
		]);
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