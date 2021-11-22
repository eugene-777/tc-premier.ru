$(function(){
	let button = $('.header__shops');
	  button.click(function(){
		$('.hidden-shops').slideToggle(1000);
    $('.hidden-service, .hidden-food, .hidden-search-mobileversion').hide();
	});
  let button1 = $('.hidden-search');
  button1.click(function(){
  $('.hidden-search-mobileversion').slideToggle(1000);
  $('.hidden-shops, .hidden-service, .hidden-food').hide();
  });
	let button2 = $('.header__service');
	  button2.click(function(){
		$('.hidden-service').slideToggle(1000);
    $('.hidden-shops, .hidden-food, .hidden-search-mobileversion').hide();
	});
  let button4 = $('.header__food');
    button4.click(function(){
    $('.hidden-food').slideToggle(1000);
    $('.hidden-shops, .hidden-service, .hidden-search-mobileversion').hide();
  });
  let button5 = $('.sub-pricelist__item1');
  button5.click(function(){
  $('.sub-pricelist__sub-item1').slideToggle(1000);
  });
  let button6 = $('.sub-pricelist__item2');
  button6.click(function(){
  $('.sub-pricelist__sub-item2').slideToggle(1000);
  });
  let button7 = $('.sub-pricelist__item3');
  button7.click(function(){
  $('.sub-pricelist__sub-item3').slideToggle(1000);
  });
  let button8 = $('.sub-pricelist__item4');
  button8.click(function(){
  $('.sub-pricelist__sub-item4').slideToggle(1000);
  });
  let button9 = $('.sub-pricelist__item5');
  button9.click(function(){
  $('.sub-pricelist__sub-item5').slideToggle(1000);
  });
  let button10 = $('.sub-pricelist__item6');
  button10.click(function(){
  $('.sub-pricelist__sub-item6').slideToggle(1000);
  });
  let button11 = $('.sub-pricelist__item7');
  button11.click(function(){
  $('.sub-pricelist__sub-item7').slideToggle(1000);
  });
  
  let hiddenMenuButton = $('.hidden-sendwichmenu-container, .sub-hidden-sendwichmenu-container');
    hiddenMenuButton.click(function() {
    $('.hidden-sendwichmenu, .sub-hidden-sendwichmenu').toggleClass('sendwichmenu-active');
      $('.hidden-header-menu-container, .sub-hidden-header-menu-container').slideToggle(600);
      $('.shops-container').toggleClass('hidden-menu-shops-toggle');
  });
    $(hiddenMenuButton).click(function() {
      $('.hidden-shops, .hidden-service, .hidden-food').hide();
  });
    $('.hidden-header__shops').click(function(){
      $('.hidden-shops').slideToggle(1000); 
      $('.hidden-service, .hidden-food, .hidden-search-mobileversion').hide();
  });
    $('.hidden-header__service').click(function(){
      $('.hidden-service').slideToggle(1000);
       $('.hidden-shops, .hidden-food, .hidden-search-mobileversion').hide();
  });
    $('.hidden-header__food').click(function(){
      $('.hidden-food').slideToggle(1000);
      $('.hidden-shops, .hidden-service, .hidden-search-mobileversion').hide();
  });
    $(window).resize(function() {  // Скрывание открытого меню после данного разрешения  
      if($(window).width() > 575) {
      $('.hidden-header-menu-container').hide(); 
      $('.hidden-sendwichmenu').removeClass('sendwichmenu-active');
      $('.shops-container').removeClass('hidden-menu-shops-toggle');
      }
  }); 
  

 var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,  
        },

        1441: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }
    });
    var mySwiper = new Swiper ('.arenda-swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  
    }

    });
   

});

