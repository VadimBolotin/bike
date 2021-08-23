// nav menu
// document.querySelector('.menu-icon-wrapper').onclick = function(){
//   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
// }

$(document).ready(function(){

  // nav menu
  document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  }

  // owl-carousel
  $(".owl-carousel").owlCarousel({
    items:1
  });

  // scroll to Top
  // находим кнопку и записываем в переменную
  const scrollBtn =  $('.scroll-to-top-btn');

  //можно скрыть тут ,а можно через Css
  // scrollBtn.hide();

  //по скроллу скрываем или показываем кнопку
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500){
      scrollBtn.fadeIn();
    } else {
      scrollBtn.fadeOut();
    }
  })

  //клик по кнопке
  scrollBtn.click(function(){
    $('html, body').animate({scrollTop: 0}, 360);
    return false;
  })

  // mixitup
  var mixer = mixitup('.products__row');


});

