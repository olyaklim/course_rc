import sayHello from './lib/sayHello.js';

sayHello();


$(document).ready(function() {

  // mob-menu
  if ($(window).width() < 1024) {
    $('.js-parent .main-menu__link').removeAttr('href');

    $('.js-parent .main-menu__link').click(function() {
      $(this).closest('.js-parent').find('.main-menu__submenu').slideToggle(300);
    });
  }

  // modal +
  $('[data-modal]').click(function() {
    var thisId = $(this).attr('data-modal');
    $('body').toggleClass('fixed');
    $('[data-id=' + thisId +']').toggleClass('active');

    setTimeout(function() {
      $('[data-id=' + thisId +']').toggleClass('open');
    }, 50);
  });

  $('[data-close]').click(function() {
    setTimeout(function() {
      $('body').removeClass('fixed');
      $('[data-id]').removeClass('active');
    }, 500);

    $('[data-id]').removeClass('open');
  });
  // modal -

});



