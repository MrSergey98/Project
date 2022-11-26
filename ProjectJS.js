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
});
