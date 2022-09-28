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
	        items:3.5
	      },
		  1920:{
			items:5
		  }
	    }
		});

	};

	carousel(
		
	);

})(jQuery);

//----------section-6---------------//
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
		$('.featured-carousel-6').owlCarousel({
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
			items:2
		  },
	      1200:{
	        items:3
	      },
		  1920:{
			items:3
		  }
	    }
		});

	};

	carousel(
		
	);

})(jQuery);