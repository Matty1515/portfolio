/* jshint esversion: 6 */
$(document).ready(() => {

// identifies which page the user is looking at and scrolls up/down to the next one
let buttonScroll = function() {
	$(window).scroll(function() {
		currentPosition = $(this).scrollTop();
		errHeight = $('#err').offset().top;
		gmcHeight = $('#gmc').offset().top;
		tsmHeight = $('#tsm').offset().top;
		if (currentPosition >= errHeight && currentPosition < gmcHeight) {
			$('#scrollUp').on('click', () => {
				window.scrollTo(0, 0);
			});
			$('#scrollDown').on('click', () => {
				window.scrollTo(0, $('#gmc').offset().top + 5);
			});
		} else if (currentPosition >= gmcHeight && currentPosition < tsmHeight) {
			$('#scrollUp').on('click', () => {
				window.scrollTo(0, $('#err').offset().top + 5);
			});
			$('#scrollDown').on('click', () => {
				window.scrollTo(0, $('#tsm').offset().top + 5);
			});
		} else if (currentPosition >= tsmHeight) {
			$('#scrollUp').on('click', () => {
				window.scrollTo(0, $('#gmc').offset().top + 5);
			});
			$('#scrollDown').on('click', () => {
				window.scrollTo(0, $('#tsm').offset().top + 5);
			});
		}
	});
};
buttonScroll();

// animates the website screenshot images when the parent page is scrolled to
const animateOnScroll = function(scrollDiv, scrollTarget) {
	$(window).scroll(function() {
	   var hT = $(scrollDiv).offset().top,
	       hH = $(scrollDiv).outerHeight(),
	       wH = $(window).height(),
	       min = 50,
	       wS = $(this).scrollTop();
	   if (wS > (hT+hH-wH-min)){
	   	$(scrollTarget).fadeIn(3000);
	   }
	});
};
// animateOnScroll('#err', '#err-fade-in'); add this back in when first page is done
animateOnScroll('#gmc', '#gmc-fade-in');
animateOnScroll('#tsm', '#tsm-fade-in');

});