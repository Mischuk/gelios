$(document).ready(function() {
  $('a[href="#"]').click(function(e){
    e.preventDefault();
  });


  // Mobile menu
  function mobileMenu() {
    $('.menu-trigger').click(function(){
      $(this).toggleClass('open');
      $('.m_main-nav, .layout').toggleClass('open');
    });
    $('.layout').on('click', function(){
      $(this).removeClass('open');
      $('.m_main-nav, .menu-trigger').removeClass('open');
    });
  };
  mobileMenu();
  // end Mobile menu

  // Lead carousel
  var $leadCarousel = $('.m_lead-carousel');
  if ( $leadCarousel.length ) {
    function leadCarousel() {
      $leadCarousel.on('init', function(event, slick, direction){
        $('.m_loader').fadeIn(0).delay(2000).fadeOut(400);
      });
      $leadCarousel.slick({
        dots: true,
        responsive: [ { breakpoint: 768, settings: { dots: false } } ]
      });
    };
    leadCarousel();
  };
  // end Lead carousel

  // Video modal player
  function videoModal() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
          loadingMessage: '',
          onContentLoaded: function() {
            $('.ekko-lightbox .modal-header .close').fadeOut(0).delay(100).fadeIn(300).css('opacity', '0.5');
          }
        });
    });
  };
  videoModal();
  // end Video modal player

  // Clients carousel
  var $clientsCarousel = $('.clients-carousel');
  if ( $clientsCarousel.length ) {
    function clientsCarousel() {
      $clientsCarousel.slick({
        dots: false,
        arrows: true,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 666,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
    };
    clientsCarousel();
  };
  // end Clients carousel

  // Similar carousel
  var $similarCarousel = $('.similar-carousel');
  if ( $similarCarousel.length ) {
    function similarCarousel() {
      $similarCarousel.slick({
        dots: false,
        arrows: true,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 666,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
    };
    similarCarousel();
  };
  // end similar carousel



  if ( $('#map').length ) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [60.049384, 30.318168],
                zoom: 13,
                controls: ['zoomControl']
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: null,
                balloonContent: null
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../images/marker.png',
                // Размеры метки.
                iconImageSize: [72, 81],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-26, -70]
            });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    });
  };
  if ( $('.m_product').length ){
    var el = $('#imageGallery').lightSlider({
            gallery:true,
            item:1,
            loop:true,
            thumbItem:8,
            slideMargin:0,
            thumbMargin: 10,
            enableDrag: true,
            currentPagerPosition:'left',
            onSliderLoad: function(el) {
                el.lightGallery({
                    selector: '#imageGallery .lslide'
                });
            },
            responsive : [
              {
                  breakpoint:769,
                  settings: {
                      thumbItem:5
                    }
              }
          ]
        });
  };


  $('.modal-form input, .modal-form textarea').on('focus', function(){
    $(this).prev('label').addClass('focus');
  });
  $('.modal-form input, .modal-form textarea').on('blur', function(){
    if (!$(this).val()) {
      $(this).prev('label').show().removeClass('focus');
    } else {
      $(this).prev('label').hide().removeClass('focus');
    }
  });

  $('.m_kp .mouse').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#s0').offset().top
    }, 500);
  });

  $('.kp-nav a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      var windheight = $(window).height();
      if (window_top > div_top - windheight) {
          $('#sticky').addClass('stick');
          $('#sticky-anchor').height(0);
      } else {
          $('#sticky').removeClass('stick');
          $('#sticky-anchor').height($('#sticky').outerHeight());
      }

      var summaryshow = $('.m_kp .lead').height() + $('.m_kp .intro').height() + $('.m_kp .kp-nav').height();
      if ( window_top > summaryshow) {
        $('#sticky').addClass('show');
      } else {
        $('#sticky').removeClass('show');        
      }
  }

  $(function() {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });



  var $breadcrumbs = $('.m_breadcrumbs');
  if ( $breadcrumbs.length ){
    function breadcrumbs() {
      var viewport = $(window).width();
      if ( viewport < 892 ) {
        $breadcrumbs.addClass('compact');
      } else {
        $breadcrumbs.removeClass('compact');
      }
    };
    breadcrumbs();
    $(window).resize(breadcrumbs);
    $(window).load(breadcrumbs);
  }

});