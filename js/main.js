$(document).ready(function(){

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
      });

      $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav2'
      });
      $('.slider-nav2').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider-for2',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
      });
});