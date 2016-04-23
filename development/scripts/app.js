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
          onShown: function() {
            // sd
          },
          onContentLoaded: function() {
            $('.ekko-lightbox .modal-header .close').fadeOut(0).delay(100).fadeIn(300).css('opacity', '0.5');
          }
        });
    });
  };
  videoModal();
  // end Video modal player
});