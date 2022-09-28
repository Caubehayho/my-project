$('.slider-section-6').slick({
    dots: true,
    infinite: true,
    speed: 700,
    arrows:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // cssEase:'cubic-bezier(0.7, 0, 0.3, 1)',
    // draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    initialSlide: 1,
    prevArrow: '<button type="button" class="slick-ktiep-6"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:  '<button type="button" class="slick-tiep-6"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },{
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  

                  