jQuery(window).on('scroll', function () {
    　if (1000 < jQuery(this).scrollTop()) {
    　　jQuery('.hamburger-button').addClass('change-color');
    　} else {
    　　jQuery('.hamburger-button').removeClass('change-color');
    　}
});