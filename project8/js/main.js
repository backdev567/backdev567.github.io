$.fn.extend({
	animateCss: function(animationName, callback) {
		var animationEnd = (function(el) {
			var animations = {
				animation: 'animationend',
				OAnimation: 'oAnimationEnd',
				MozAnimation: 'mozAnimationEnd',
				WebkitAnimation: 'webkitAnimationEnd',
			};

			for (var t in animations) {
				if (el.style[t] !== undefined) {
					return animations[t];
				}
			}
		})(document.createElement('div'));

		this.addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);

			if (typeof callback === 'function') callback();
		});

		return this;
	},
});
$(document).ready(function() {
	// $('.app').animateCss('bounceIn');
	$('.app').animateCSS('bounceIn', {
		delay: 200,
	});
	$('.post').each(function() {
		$(this).animateCSS('bounceIn', {
			delay: 900
		});
	});
	$('.result').hide();
	$('#search').keyup(function() {
		var text = $(this).val();
		$('.result').text(text);
		if((text == "") || (text == "")) {
			$('.result').stop().hide(200);
		} else {
			$('.result').stop().show(200);
		}
	});
});