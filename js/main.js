$(function(){

  $('.our__works-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false, 
    asNavFor: '.our__works-nav'
  });
  $('.our__works-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.our__works-carousel',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    draggable: false,
    
  });

  $('.twtitter__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    centerPadding: '340px',
  });


});