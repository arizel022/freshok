$(function () {

	const link = $('button[data-basket="true"]'),
        basket = $('.basket'),
        overlay = $('.overlay'),
        fixedBody = $('body'),		
        closeBasket = $('button[data-close="true"]');

    const openMenu= $('button[data-menu="open"]'),
          sideMenu=$('.side'),
          closeMenu=$('button[data-menu="close"]');

    const openFilter= $('.shop-content__filter-btn'),
          filterMenu=$('.filter-side'),
          closeFilter=$('button[data-filter="side"]');

          openFilter.on('click', function () {
            overlay.show();
            filterMenu.toggleClass('active');
            fixedBody.toggleClass('active');
        });

        closeFilter.on('click', function () {
          overlay.hide();
          filterMenu.toggleClass('active');
          fixedBody.toggleClass('active');
        });

          openMenu.on('click', function () {
            overlay.show();
            sideMenu.toggleClass('active');
            fixedBody.toggleClass('active');
        });

          closeMenu.on('click', function () {
            overlay.hide();
            sideMenu.toggleClass('active');
            fixedBody.toggleClass('active');
        });
          

	link.on('click', function () {
		overlay.show();
		basket.toggleClass('active');
    fixedBody.toggleClass('active');
	});

    closeBasket.on('click',function () {
      overlay.hide();
      basket.toggleClass('active');
      fixedBody.toggleClass('active');
	});

  $('.product-tabs__link').on('click', function(e) {
      e.preventDefault();
      $('.product-tabs__link').removeClass('active');
      $(this).addClass('active');

      $('.product-tabs__content-item').removeClass('active');
      $($(this).attr('href')).addClass('active');
  });
   
	// overlay.on('click',function () {
	// 	overlay.hide();
	// 	basket.toggleClass('active');
  //   fixedBody.toggleClass('active');
	// });


    $('.search-btn').on('click', function() {
        $('.search-form').toggleClass('active');
    })

    $('button[data-menu="true"]').on('click', function() {
        $('.menu-btn__list').toggleClass('active');
    });

    $('button[data-menu="side"]').on('click', function() {
        $('button[data-menu="side"] .menu-btn__list').toggleClass('active');
    });

    $('button[data-shop="category"]').on('click', function() {
      $('.filter-category__list').toggleClass('active');
      $('button[data-shop="category"] .filter-btn__img').toggleClass('active');
  });

    $('button[data-shop="offer"]').on('click', function() {
      $('.filter-offer__form').toggleClass('active');
      $('button[data-shop="offer"] .filter-btn__img').toggleClass('active');
  });

    $('button[data-shop="brand"]').on('click', function() {
      $('.filter-brand__form').toggleClass('active');
      $('button[data-shop="brand"] .filter-btn__img').toggleClass('active');
  });

    $('button[data-shop="price"]').on('click', function() {
      $('.filter-price__form').toggleClass('active');
      $('button[data-shop="price"] .filter-btn__img').toggleClass('active');
  });

  $('.shop-content__grid-btn').on('click', function() {
    $('.shop-content__grid-btn').removeClass('active');
    $(this).addClass('active');
});

  $('.button-column').on('click', function() {
    $('.shop-content__inner').addClass('active');
    $('.shop .card').addClass('card--column');
});

  $('.button-grid').on('click', function() {
    $('.shop-content__inner').removeClass('active');
    $('.shop .card').removeClass('card--column');
});


  $(".filter-price__input").ionRangeSlider({
    type: "double",
     postfix: "₽",
     onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
     onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
  });

  $('.shop-content__filter-sort').styler();


    $('.intro__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/icons/arrows-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/icons/arrows-right.svg" alt="arrow-right"></button>',
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });


    $('.brands__list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ]
    });

    const productSlider = $('.product-item__slider');

    productSlider.slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="./images/icons/arrows-left.svg" alt="arrow-left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./images/icons/arrows-right.svg" alt="arrow-right"></button>',
      dots: false,
    });

    const bottomSlider = $('.product-bottom__slider');

    bottomSlider.slick({
      dots: false,
      arrows: false,
      centerPadding: '40px',
      slidesToShow: 4,
      slidesToScroll: 2,
      // responsive: [
      //   {
      //     breakpoint: 992,
      //     settings: {
      //       slidesToShow: 4,
      //       slidesToScroll: 3,
      //     }
      //   },
      //   {
      //     breakpoint: 576,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //     }
      //   },
      // ]
  });

  $('#product-bottom-prev').on('click', function() {
    bottomSlider.slick('slickPrev');
  });

  $('#product-bottom-next').on('click', function() {
    bottomSlider.slick('slickNext');
  });
 

  const modalSlider = $('.modal-slider__box');

  modalSlider.slick({
    dots: true,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     }
    //   },
    // ]
});

  $('#modal-slider-prev').on('click', function() {
    modaltSlider.slick('slickPrev');
  });

  $('#modal-slider-next').on('click', function() {
    modalSlider.slick('slickNext');
  });
 

    $('.star__icon').rateYo({
        starWidth: "16px",
        normalFill: "#c1c1c1",
        ratedFill: "#FFB800",
        numStars: 1
      });

    $('.product-item__star-icon').rateYo({
        starWidth: "16px",
        normalFill: "#c1c1c1",
        ratedFill: "#FFB800",
        numStars: 5
      });

    $('.comments__star').rateYo({
        starWidth: "16px",
        normalFill: "#c1c1c1",
        ratedFill: "#FFB800",
        numStars: 5
      });


    $('.card__minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value >= 1) {
            value = value - 1;
        } else {
            value = 0;
        }
     
      $input.val(value);
     
    });
     
    $('.card__plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value >= 0) {
            value = value + 1;
        } else {
            value = 100;
        }
     
        $input.val(value);
    });

    
    const openSlider = $('.product-item__slide'),
          goodsSlider=$('.modal-slider'),
          closeSlider = $('button[data-slider="close"]');

          openSlider.on('click', function (e) {
          goodsSlider.toggleClass('active');
          fixedBody.toggleClass('active');
        });

          closeSlider.on('click', function () {
          goodsSlider.toggleClass('active');
          fixedBody.toggleClass('active');
        });


    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
   
    var config = {
      controls: {
        scope: 'local'
      }
    };
   
    var mixer1 = mixitup(containerEl1, config );
    var mixer2 = mixitup(containerEl2, config );

});

