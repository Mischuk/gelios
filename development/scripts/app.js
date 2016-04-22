$(document).ready(function() {
  $('a[href="#"]').click(function(e){
    e.preventDefault();
  });

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
});