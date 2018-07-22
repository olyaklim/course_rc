import sayHello from './lib/sayHello.js';
import 'slick-carousel';

sayHello();

$('.js-news-ban').slick({
  dotsClass: 'news-ban__dots',
  arrows: false,
  dots: true,
  fade: true,
  adaptiveHeight: true,
  autoplay: true,
  speed: 500
});


$(document).ready(function() {

  // modal +
  $('[data-modal]').click(function() {
    var thisId = $(this).attr('data-modal');
    $('body').toggleClass('fixed');
    $('[data-id=' + thisId +']').toggleClass('is-active');

    setTimeout(function() {
      $('[data-id=' + thisId +']').toggleClass('is-open');
      $('.header-page__mobil-close').toggleClass('is-active');
    }, 50);
  });

  $('[data-close]').click(function() {
    setTimeout(function() {
      $('body').removeClass('fixed');
      $('[data-id]').removeClass('is-active');

    }, 500);

    $('[data-id]').removeClass('is-open');
    $('.header-page__mobil-close').removeClass('is-active');
  });
  // modal -

});
