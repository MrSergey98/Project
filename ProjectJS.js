var document;
var $;
var $num;
var $even;
var $odd;
var console;
var $slide;
var g;
var g1;

function Admin_menu_on() {
    $("#Admin-menu").show(300);
}

function Admin_menu_leave() {
    $("#Admin-menu").hide(300);
}

function About_menu_on() {
    $("#About-menu").show(300);
}

function About_menu_leave() {
    $("#About-menu").hide(300);
}


document.addEventListener("DOMContentLoaded", function () {
    var b = document.getElementById("Admin");
    b.addEventListener("mouseover", Admin_menu_on);
    b.addEventListener("mouseleave", Admin_menu_leave);
    var b1 = document.getElementById("About");
    b1.addEventListener("mouseover", About_menu_on);
    b1.addEventListener("mouseleave", About_menu_leave);

});



$(document).ready(function () {
    var a = 0;
    $("#faq_id").click(function () {
        a = a + 1;
        if (a % 2 !== 0) {
            $("#faq_id").css("color", "rgb(241, 77,52)");
            $("#one").css("border", "3px solid rgb(241, 77,52)");
        } else {
            $("#faq_id").css("color", "black");
            $("#one").css("border", "0px");
        }
    });

    $("#slider_1").slick({
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 6,
        variableWidth: true
    });
    $("#slider_2").slick({
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 6,
        variableWidth: true
    });
    $("#slider_3").slick({
        arrows: true,
        dots: false,
        nextArrow: $("#next"),
        prevArrow: $("#prev"),
        slidesToScroll: 1,
        slidesToShow: 1
    });
    $("#slider_3").on("afterChange", function (event, slick, currentSlide) {
        g = event.type;
        g1 = slick.type;
        $("#numb").text("0" + (currentSlide + 1));
    });


    $num = $(".ui-card").length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;
    if ($num % 2 === 0) {
        $(".ui-card:nth-child(" + $even + ")").addClass("active");
        $(".ui-card:nth-child(" + $even + ")").prev().addClass("prev");
        $(".ui-card:nth-child(" + $even + ")").next().addClass("next");
    } else {
        $(".ui-card:nth-child(" + $odd + ")").addClass("active");
        $(".ui-card:nth-child(" + $odd + ")").prev().addClass("prev");
        $(".ui-card:nth-child(" + $odd + ")").next().addClass("next");
    }
    $(".ui-card").click(function () {
        $slide = $(".active").width();
        console.log($(".active").position().left);
        if ($(this).hasClass("next")) {
            $(".container").stop(false, true).animate({left: "-=" + $slide});
        } else if ($(this).hasClass("prev")) {
            $(".container").stop(false, true).animate({left: "+=" + $slide});
        }
        $(this).removeClass("prev next");
        $(this).siblings().removeClass("prev active next");
        $(this).addClass("active");
        $(this).prev().addClass("prev");
        $(this).next().addClass("next");
    });
});
