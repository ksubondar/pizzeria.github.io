$(function () {
    $(`.gallery-container`).slick(
        {
        dots:true,
        arrows:false,
        speed:3000,
        slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true
    });
 
        $(".menuToggle").click(function() {
          $(this).toggleClass("active");
          $('.header-nav-menu').slideToggle(300, function(){
            if($(this).css('display') === "none"){
              $(this).removeAttr('style');
            }
          });
        });
      
        $(".menuToggle").click(function() {
          $(this).toggleClass("active");
          $('.concept-menu-ul').slideToggle(300, function(){
            if($(this).css('display') === "none"){
              $(this).removeAttr('style');
            }
          });
        });
      



});