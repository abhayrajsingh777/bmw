$(document).on('click', '.map-point-sm', function() {
    var show = $(this).data('show');
        $(show).removeClass("hide").siblings().addClass("hide");
    });
        $('ul').on('click', 'li', function() {
        $('ul li.actiV_li').removeClass('actiV_li');
        $(this).addClass('actiV_li');
    });
        
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
  });

$('a[data-slide]').click(function(e) {
 e.preventDefault();
 var slideno = $(this).data('slide');
 $('.slider-nav').slick('slickGoTo', slideno - 1);
 $('.action a.actiV').removeClass('actiV');
 $(this).addClass('actiV');
});

