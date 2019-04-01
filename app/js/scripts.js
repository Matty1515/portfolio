/* jshint esversion: 6 */
$(document).ready(() => {

const animateOnScroll = function(scrollDiv, scrollTarget) {
	$(window).scroll(function() {
	   var hT = $(scrollDiv).offset().top,
	       hH = $(scrollDiv).outerHeight(),
	       wH = $(window).height(),
	       min = 10,
	       wS = $(this).scrollTop();
	   if (wS > (hT+hH-wH-min)){
	    $(scrollTarget).fadeIn(3000);
	   }
	});
};
// animateOnScroll('#err', '#err-fade-in'); add this back in when first page is done
animateOnScroll('#gmc', '#gmc-fade-in');
animateOnScroll('#tsm', '#tsm-fade-in');

console.log('JavaScript is working!');
});