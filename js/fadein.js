$(function(){
    $(window).scroll(function (){
        $('.js-fade-in').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
            console.log(targetElement,scroll,windowHeight);
        });
    });
});