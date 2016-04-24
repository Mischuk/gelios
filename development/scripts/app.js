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