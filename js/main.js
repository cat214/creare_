console.log('mainjs start');


var html = $("html");

var loadingWrapper = ('#loading')
var loadingLogo = ('.loading__logo')
var logo = $('.header-logo');
var nav = $('.gnav');
var heroCatchcopy = $('.hero-catchcopy');
var heroImageWrapper = $('.hero-image__wrapper');

var timeline = gsap.timeline();

timeline.from([loadingWrapper, loadingLogo],{
  duration: 2,
  opacity: 0,
})
.to([loadingWrapper, loadingLogo], {
  duration: 2,
  opacity: 0,
  display: "none",
})
.from([logo, nav, heroCatchcopy, heroImageWrapper], {
  duration: 2,
  opacity: 0,
})
.to(html, {
  duration: 2,
  overflow: "visible",
  delay: -2,
});


console.log('mainjs end');
