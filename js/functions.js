$(function() {
  openMenu();
  scrollMenu();

});



// OPEN MOBILE menu

function openMenu() {
  $('.mobile-nav-toggle').click(function() {
    $('.mobile-wrapper').toggleClass('active');
  });

  $('.mobile-wrapper a').click(function() {
    $('.mobile-wrapper').toggleClass('active');
  });
}


// SMOOTH SCROLL LINKS WHEN DOCUMENT IS READY AND ACTIVE LINKS ON SECTIONS

function scrollMenu(){
  var sections = $('section')
    , nav = $('nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top, // 50 is the nav height aprox, it says when each section becomes active
          bottom = top + 50;

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('.scroll').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  nav.find('.scroll').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 1500);
    return false;
  });

}
