$(function() {
	$('.controller li').each(function() {
		var $color = $(this).attr('data-color');
		$(this).css('background', $color);
		$(this).click(function() {
			$('body').css('background', $color);
		});
	});
});