$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 100) {
        $('.drive-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('.drive-nav').removeClass('scrolled-nav');
      } 

    });
    
    
  });