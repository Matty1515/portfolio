/* jshint esversion: 6 */

var IntroTimeline = new TimelineMax({});

IntroTimeline.from('.overlay__title', 1, {
  y: 10,
  opacity: 0
})
.from('.hr', 1.5, {
  width: 0
}, "-=1") // title and hr appear
.from('.overlay__subtext', 1, {
  y: -20,
  opacity: 0
}) // sub-text appears
.to('.overlay', 1, {
  y: "-100%",
  display: "none"
}, "+=2") // after a 2 second wait, overlay screen disappears
.from('.both-nav', 1, {
	opacity: 0,
	y: -20
})
.from('.side-screen', 1, {
	opacity: 0,
	x: 20
}, "-=1")
.from('.text-screen', 1, {
	opacity: 0,
	x: -20,
}, "-=1");