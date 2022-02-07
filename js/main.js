console.log('main.js is started');

$(function(){
  $('.l-hamburger-button').on('click', function() {
    $(this).toggleClass('l-hamburger-button-active');
    $('.l-sidemenu-wrapper').toggleClass('l-sidemenu-wrapper__open')
    // return false;
  });
});

console.log('js finish');
