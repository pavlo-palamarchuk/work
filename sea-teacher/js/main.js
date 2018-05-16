$(document).ready(function() {
	var ServicesSlider = $('#services-slider').lightSlider({
		item: 3,
		pager: false,
		slideMargin: 5,
		auto: true,
		loop: true,
		pause: 4500,
		responsive : [
            {
                breakpoint:1024,
                settings: {
                	item: 2
                  }
            },
            {
                breakpoint:768,
                settings: {
                	item: 1
                  }
            }
        ]
	});

	$('.services-slider__prev').click(function(){
		ServicesSlider.goToPrevSlide();
	});

	$('.services-slider__next').click(function(){
		ServicesSlider.goToNextSlide();
	});

	$('#slider-reviews').lightSlider({
		item: 1,
		pager: false,
		prevHtml: "<div class='icon-10'></div>",
		nextHtml: "<div class='icon-11'></div>",
		auto: true,
		loop: true,
		responsive : [
            {
                breakpoint:1368,
                settings: {
                	controls: false
                  }
            }
        ]
	});

	function navigation(button, nav){
		$(button).click(function(){
			$(nav).toggleClass(nav.slice(1) + '_visible');
		});
	};
	navigation('.nav-button','.page-nav');

	var CertificateSlider = $('#certificate-slider').lightSlider({
		item: 2,
		controls: false,
		pager: false,
		auto: true,
		loop: true,
		onAfterSlide: function (el) {
        	$('.certificate-description').html(
        		$('#certificate-slider .active .certificate').attr('data-desc')
        	);
    	}
	});
	$('.certificate-slider-controls .prev').click(function(){
		CertificateSlider.goToPrevSlide();
	});
	$('.certificate-slider-controls .next').click(function(){
		CertificateSlider.goToNextSlide();
	});
	$('.certificate').magnificPopup();
	$('.toggle-button').click(function(){
		$(this).siblings('.toggle-visible').toggleClass('hidden');
		$(this).addClass('hidden');
	});
    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    // $(document).foundation();

});