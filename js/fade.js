
    $(function(){
        $('.fadein img:gt(0)').hide();
        $('.fadein').offset({ 
            top: $('.phone').offset().top + 38,
            left: $('.phone').offset().left + 14 
        });
        setInterval(function(){
          $('.fadein :first-child').fadeOut()
             .next('img').fadeIn()
             .end().appendTo('.fadein');}, 
          4000);
    });
