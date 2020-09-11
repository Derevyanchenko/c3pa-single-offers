$(document).ready(function() {

  // show more text on the Single offer page

  $(".singleOffer__details-showMore").on("click", function() {

    let that = $(this),
        content = $(".singleOffer__details-content");

    if( content.hasClass("active") ) {

      that.removeClass("active");
      content.removeClass("active");

    } else {
      that.addClass("active");
      content.addClass("active");
    }

  });
  

  // other offers slider

   $('.singleOffer__other-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: $(".singleOffer__other-prev"),
    nextArrow: $(".singleOffer__other-next"),
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      }
    ]
  }); 



});