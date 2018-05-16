$(document).ready(function() {
    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    // $(document).foundation();
    $(window).scroll(function(){
        scroll = $(this).scrollTop();
        if (scroll == 0) {
            $('.header-wrapper').removeClass('header-wrapper_min');
        } else {
            $('.header-wrapper').addClass('header-wrapper_min');
        };
    });
    $('.nav-button').click(function(){
        $('.page-nav').toggleClass('page-nav_visible');
    });

    $('#home-top-slider').lightSlider({
    	item: 1,
    	controls: false,
    	loop: true,
    	auto: true,
        pauseOnHover: true
    });
    $('#logo-slider').lightSlider({
    	item: 5,
    	loop: true,
    	auto: true,
    	prevHtml: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    	nextHtml: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        responsive : [
            {
                breakpoint:1024,
                settings: {
                    item:3
                  }
            },
            {
                breakpoint:640,
                settings: {
                    item:1
                  }
            }]
    });
    $("a[href*='#']").mPageScroll2id();
});