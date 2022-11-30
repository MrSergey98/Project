var document;
var $;

function Admin_menu_on() {
    $("#Admin-menu").show(300);
}

function Admin_menu_leave() {
  $("#Admin-menu").hide(300);
}


document.addEventListener("DOMContentLoaded", function() {
    var b = document.getElementById("Admin");
    b.addEventListener("mouseover", Admin_menu_on);
    b.addEventListener("mouseleave", Admin_menu_leave);
});



$(document).ready(function () {
    var a = 0;
    $("#faq_id").click(function() {
        a=a+1;
        if(a%2!=0){
            $("#faq_id").css( "color", "rgb(241, 77,52)");
            $("#one").css("border", "3px solid rgb(241, 77,52)");
        }
        else{
            $("#faq_id").css( "color", "black");
            $("#one").css("border", "0px");
        }
    });

    $("#slider_1").slick({
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [
          {
              breakpoint: 560,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 2
              }
          }
        ],
        slidesToScroll: 1,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility: false, 
        variableWidth: true
        
    });
    $("#slider_2").slick({
        arrows: false,
        dots: false,
        responsive: [
          {
              breakpoint: 560,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 3
              }
          }
        ],
        slidesToScroll: 1,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility: false,
        centerMode: true,
        variableWidth: true,
    });
    $("#slider_3").slick({
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: $('#prev'),
        nextArrow: $('#next')
    });
    $("#slider_3").on('afterChange', function(event, slick, currentSlide){
        $("#numb").text("0"+(currentSlide + 1));
     });


     $num = $('.ui-card').length;
     $even = $num / 2;
     $odd = ($num + 1) / 2;
 
if ($num % 2 == 0) {
  $('.ui-card:nth-child(' + $even + ')').addClass('active');
  $('.ui-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.ui-card:nth-child(' + $odd + ')').addClass('active');
  $('.ui-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $odd + ')').next().addClass('next');
}
 
let c = 1;
$('.ui-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  if ($(this).hasClass('next')) {
    $('.container').stop(false, true).animate({left: '-=' + $slide});
    c+=1;
  } else if ($(this).hasClass('prev')) {
    $('.container').stop(false, true).animate({left: '+=' + $slide});
    c-=1;
  }
  if(c==0){
    $("#but_1").css("background", "rgb(241, 77,52)");
    $("#but_1").css("color", "white");
    $("#but_2").css("color", "rgb(241, 77,52)");
    $("#but_2").css("background", "white");
    $("#but_3").css("color", "rgb(241, 77,52)");
    $("#but_3").css("background", "white");
  }else if(c==1){
    $("#but_2").css("background", "rgb(241, 77,52)");
    $("#but_2").css("color", "white");
    $("#but_1").css("color", "rgb(241, 77,52)");
    $("#but_1").css("background", "white");
    $("#but_3").css("color", "rgb(241, 77,52)");
    $("#but_3").css("background", "white");
  }else if(c==2){
    $("#but_3").css("background", "rgb(241, 77,52)");
    $("#but_3").css("color", "white");
    $("#but_2").css("color", "rgb(241, 77,52)");
    $("#but_2").css("background", "white");
    $("#but_1").css("color", "rgb(241, 77,52)");
    $("#but_1").css("background", "white");
  }

  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
 
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});
});
