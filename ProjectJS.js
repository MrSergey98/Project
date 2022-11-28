var document;

function Admin_menu_on() {
    var m = document.getElementById("Admin-menu");
    m.style.display = "block";
}

function Admin_menu_leave() {
    var m = document.getElementById("Admin-menu");
    m.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var b = document.getElementById("Admin");
    b.addEventListener("mouseover", Admin_menu_on);
    b.addEventListener("mouseleave", Admin_menu_leave)
});



$(document).ready(function () {
    var a = 0;
    $('#faq_id').click(function() {
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
 
$('.ui-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
 
  if ($(this).hasClass('next')) {
    $('.container').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.container').stop(false, true).animate({left: '+=' + $slide});
  }
 
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
 
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});
});
