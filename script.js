$(document).ready(function($) {
	$element = $(".fixed_block");
	//$element.css("width", $element.outerWidth());
	$window = $(window);
	$height_el = $element.offset().top;
	$window.scroll(function() {
		if($window.scrollTop() > $height_el) {
			$element.addClass("fixed");
		} else {
			$element.removeClass("fixed");
		}
	});
});