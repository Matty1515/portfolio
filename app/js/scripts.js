/* jshint esversion: 6 */
$(document).ready(() => {

// identifies which page the user is looking at and scrolls up/down to the next one
let buttonScroll = function() {
	$(window).scroll(function() {
		currentPosition = $(this).scrollTop();
		oneHeight = $('#one').offset().top;
		twoHeight = $('#two').offset().top;
		threeHeight = $('#three').offset().top;
		fourHeight = $('#four').offset().top;
		fiveHeight = $('#five').offset().top;
		if (currentPosition >= -10 && currentPosition < twoHeight) {
			$('#scrollUp').on('click', () => {
				window.scrollTo(0, 0);
			});
			$('#scrollDown').on('click', () => {
				window.scrollTo(0, $('#two').offset().top + 5);
			});
		} else if (currentPosition >= twoHeight && currentPosition < threeHeight) {
			$('#scrollUp').on('click', () => {
				window.scrollTo(0, $('#one').offset().top + 5);
			});
			$('#scrollDown').on('click', () => {
				window.scrollTo(0, $('#three').offset().top + 5);
			});
		} else if (currentPosition >= threeHeight && currentPosition < fourHeight) {
			$('#scrollUp').on('click', () => {
				window.scrollTo(0, $('#two').offset().top + 5);
			});
			$('#scrollDown').on('click', () => {
				window.scrollTo(0, $('#four').offset().top + 5);
			});
		} else if (currentPosition >= fourHeight && currentPosition < fiveHeight) {
			$('#scrollUp').on('click', () => {
				window.scrollTo(0, $('#three').offset().top + 5);
			});
			$('#scrollDown').on('click', () => {
				window.scrollTo(0, $('#five').offset().top + 5);
			});
		} else if (currentPosition >= fiveHeight) {
			$('#scrollUp').on('click', () => {
				window.scrollTo(0, $('#four').offset().top + 5);
			});
			$('#scrollDown').on('click', () => {
				window.scrollTo(0, $('#five').offset().top + 5);
			});
		}
	});
};
window.scrollTo(0, 1);
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
// animateOnScroll('#one', '#one-fade-in'); add this back in when first page is done
animateOnScroll('#two', '#two-fade-in');
animateOnScroll('#three', '#three-fade-in');
animateOnScroll('#four', '#four-fade-in');

});