var $jq = jQuery.noConflict();


$jq(document).ready(function() { 
    $jq('.posts-slider__slider-post').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $jq('.posts-slider__controllers-post'),
        dotsClass: 'posts-slick-dots',
        prevArrow: '<div class="slider-arrow-btn slider-arrow-btn-prev"><span class="dashicons dashicons-arrow-left-alt"></span></div>',
        nextArrow: '<div class="slider-arrow-btn slider-arrow-btn-next"><span class="dashicons dashicons-arrow-right-alt"></span></div>',
        responsive: [
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                appendDots: $jq('.posts-slider__dots-post')
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 991.98,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1199.98,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            }
          ]
    });
});
$jq(document).ready(function() { 
  $jq('.posts-slider__slider-event').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows: $jq('.posts-slider__controllers-event'),
      dotsClass: 'posts-slick-dots',
      prevArrow: '<div class="slider-arrow-btn slider-arrow-btn-prev"><span class="dashicons dashicons-arrow-left-alt"></span></div>',
      nextArrow: '<div class="slider-arrow-btn slider-arrow-btn-next"><span class="dashicons dashicons-arrow-right-alt"></span></div>',
      responsive: [
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
              appendDots: $jq('.posts-slider__dots-event')
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
          },
          {
              breakpoint: 1199.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
          }
        ]
  });
});