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
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility: false, 
    });
    $("#slider_2").slick({
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility: false,
        centerMode: true,
        variableWidth: true,
    });
});
