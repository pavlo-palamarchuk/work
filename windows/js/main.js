$(document).ready(function() {
    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    // $(document).foundation();
    $('#other-articles-slider').lightSlider({
    	item: 3,
    	auto: true,
    	loop: true,
    	pause: 2000,
    	speed: 800,
    	controls: false,
        responsive: [
            {
                breakpoint:1024,
                settings: {
                    item:1
                  }
            }
        ]
    });
    $('#certificates-slider').lightSlider({
        controls: false,
        item: 1,
        auto: true,
        loop: true,
        pause: 2000,
        speed: 800,
        mode: 'fade'
    });
    $('.nav-button').click(function(){
        $('.nav').toggleClass('nav_show');
    });

    $('.toggle-tab').click(function(){
        var elements = $(this).siblings('.tab').find('.toggle-visible');
        elements.toggleClass('hidden');
        $(this).children('div').toggleClass('hidden');
        $(this).toggleClass('toggle-tab_active');
    });
});