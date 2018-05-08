    $(document).ready(function() {
    $('.logo-top').click(function(){
           $('html, body').animate({scrollTop:$('#top').position().top}, 2000);
    });
    $('.rl').click(function(){
           $('html, body').animate({scrollTop:$('#rest').position().top}, 2000);
    });
    $('.cl').click(function(){
           $('html, body').animate({scrollTop:$('#contact').position().top}, 2000);
    });
  });
