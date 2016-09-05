
	
 $(window).scroll(function(){
      
      var PositionScroll = $(window).scrollTop();

      //recuperer la position de #presentation

      var PositionInfo = $('#intro').offset().top;
      var hauteurEcran = $(window).height();
       //SI LE POSITION DU SCROLL EST> 1000
      if(PositionScroll > PositionInfo-hauteurEcran ){
       $('#intro').animate({'opacity':'1', 'margin-top': '0px'}, 1000);
    }
      
      var PositionFond = PositionScroll / 5;
      $('#intro').css({'background-position-y' : PositionFond+10+'%'});



  }); 

 $(window).scroll(function(){
      
      var PositionScroll = $(window).scrollTop();

      //recuperer la position de #presentation

      var PositionInfo = $('.img1').offset().top;
      var hauteurEcran = $(window).height();
       //SI LE POSITION DU SCROLL EST> 1000
      if(PositionScroll > PositionInfo-hauteurEcran ){
       $('.img1').animate({'opacity':'1', 'margin-top': '0px'}, 1000);
    }
      
      var PositionFond = PositionScroll / 15;
      $('.img1').css({'background-position-y' : PositionFond+'%'});



  }); 
 $(window).scroll(function(){
      
      var PositionScroll = $(window).scrollTop();

      //recuperer la position de #presentation

      var PositionInfo = $('.img2').offset().top;
      var hauteurEcran = $(window).height();
       //SI LE POSITION DU SCROLL EST> 1000
      if(PositionScroll > PositionInfo-hauteurEcran ){
       $('.img2').animate({'opacity':'1', 'margin-top': '0px'}, 1000);
    }
      
      var PositionFond = PositionScroll / 17;
      $('.img2').css({'background-position-y' : PositionFond+0+'%'});



  }); 

