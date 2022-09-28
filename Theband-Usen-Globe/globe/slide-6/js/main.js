(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			// $('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop: false,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 4,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      768:{
	        items:2
	      },
		  1024:{
			items:3
		  },
	      1200:{
	        items:4
	      },
		  1920:{
			items:1
		  }
	    }
		});

	};

	carousel(
		
	);

})(jQuery);