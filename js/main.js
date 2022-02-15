console.log('mainjs start');


var html = $("html");

var loadingWrapper = ('#loading')
var loadingLogo = ('.loading__logo')
var logo = $('.header-logo');
var nav = $('.gnav');
var hero_catchcopy = $('.hero-catchcopy');
var hero_image_wrapper = $('.hero-image__wrapper');
var concept_title = (".concept__title");
var concept_catchcopy = (".concept__catchcopy");
var concept_text = ('.concept__bottom-text');
var concept_image = ('.concept-image');
var concept_image_wrapper = ('.concept-image__wrapper');

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
.from([logo, nav, hero_catchcopy, hero_image_wrapper], {
  duration: 2,
  opacity: 0,
})
.to(html, {
  duration: 2,
  overflow: "visible",
  delay: -2,
});


console.log('mainjs end');
