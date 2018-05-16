$(document).ready(function () {
    $('#lightslider').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 5,
        thumbMargin: 0,
        controls: false
    });

    $('.page-nav-button').click(function () {
        $('.page-nav').toggleClass('page-nav_visible');
    });

    $('.display-more').click(function () {
        $(this).siblings('.toggle-visible').toggleClass('hidden');
        $(this).children('span').toggleClass('hidden');
    });
});