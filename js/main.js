console.log('mainjs start');


var html = $("html");

var loading_wrapper = ('#loading')
var loading_logo = ('.loading__logo')
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

// timeline.fromTo([loading_wrapper, loading_logo],{
//   duration: 2,
//   opacity: 0,
// },{
//   duration: 2,
//   opacity: 0,
//   display: "none",
// })
// .from([logo, nav, hero_catchcopy, hero_image_wrapper], {
//   duration: 2,
//   opacity: 0,
// })
// .to(html, {
//   duration: 2,
//   overflow: "visible",
//   delay: -2,
// });

gsap.registerPlugin(ScrollTrigger);

// var concept_timeline = gsap.timeline();
var tl = gsap.timeline();
tl.from([concept_title, concept_catchcopy, concept_text],{
  scrollTrigger: {
    trigger: ".concept__inner",
    toggleActions: "restart none none reset",
    markers: true,
  },
    onEnter: () => console.log("えんたーーー"),
    onLeave: () => console.log("りーーぶ"),
    duration: 3,
    opacity: 1,
    y: 100,
})
.from(concept_image, {
  duration: 2,
  scale: 1.5,
  opacity: 0,
  ease: Power2.easeOut,
  delay: -1,
})


console.log('mainjs end');
