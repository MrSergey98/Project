var document;
var $;
var $num;
var $even;
var $odd;
var console;
var $slide;
var g;
var g1;
var window;
var ResizeSensor;
var jQuery;

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

function Mobile_menu() {
    var cmm = $("#click-menu-mobile");
    if (cmm.css("display") === "none") {
        cmm.show(300);
    } else {
        cmm.hide(300);
    }
}

function Admin_mobile() {
    var admm = $("#Admin-menu-mobile");
    if (admm.css("display") === "none") {
        admm.show(300);
    } else {
        admm.hide(300);
    }
}

function About_mobile() {
    var abmm = $("#About-menu-mobile");
    if (abmm.css("display") === "none") {
        abmm.show(300);
    } else {
        abmm.hide(300);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var b1;
    var mm;
    var adm;
    var abm;
    var b = document.getElementById("Admin");
    b.addEventListener("mouseover", Admin_menu_on);
    b.addEventListener("mouseleave", Admin_menu_leave);
    b1 = document.getElementById("About");
    b1.addEventListener("mouseover", About_menu_on);
    b1.addEventListener("mouseleave", About_menu_leave);
    mm = document.getElementById("click-mob-menu");
    mm.addEventListener("click", Mobile_menu);
    adm = document.getElementById("Admin-mobile");
    adm.addEventListener("click", Admin_mobile);
    abm = document.getElementById("About-mobile");
    abm.addEventListener("click", About_mobile);
    $("#form_btn").click(function () {
        openForm();
        $(".MyOverlay").show(300);
        $("#dop_form").show(300);
    });
    $(".MyOverlay").click(function () {
        openHome();
        $(".MyOverlay").hide(300);
        $("#dop_form").hide(300);
    });
});


function Mes(name, number, email, message){
    /*Блокировка кнопки*/ 
    changeBtn();


    fetch('https://formcarry.com/s/AWKlN83z8', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify({name: name, number: number, email:email, message: message})
    })
    .then(response => Good(response))
    .catch(error => Err(error))
}

function Good(response){
    console.log(response);

    /*Разблокировка кнопки*/
    changeBtn();
}

function Err(error){
    console.log(error);
    
    /*Разблокировка кнопки*/
    changeBtn();
    alert("Ваше сообщение не отправлено. Попробуйте ещё раз!");

}

function openForm() {
    history.pushState({page: 2}, "Form", "?form");
    return false;
}

function openHome() {
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

addEventListener("popstate", function () {
    openHome();
        $(".MyOverlay").hide(300);
        $("#dop_form").hide(300);
}, false);



$(document).ready(function () {
    var c;
    var a = 0;
    $("#Reviews").css("padding-bottom", $("#Com_1").height());
    $(window).resize(function () {
        new ResizeSensor(jQuery("#Com_1"), function () {
            $("#Reviews").css("padding-bottom", $("#Com_1").height());
        });
    });
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
    c = 1;
    $(".ui-card").click(function () {
        $slide = $(".active").width();
        console.log($(".active").position().left);
        if ($(this).hasClass("next")) {
            $(".container").stop(false, true).animate({left: "-=" + $slide});
            c += 1;
        } else if ($(this).hasClass("prev")) {
            $(".container").stop(false, true).animate({left: "+=" + $slide});
            c -= 1;
        }
        if (c === 0) {
            $("#but_1").css("background", "rgb(241, 77,52)");
            $("#but_1").css("color", "white");
            $("#but_2").css("color", "rgb(241, 77,52)");
            $("#but_2").css("background", "white");
            $("#but_3").css("color", "rgb(241, 77,52)");
            $("#but_3").css("background", "white");
        } else if (c === 1) {
            $("#but_2").css("background", "rgb(241, 77,52)");
            $("#but_2").css("color", "white");
            $("#but_1").css("color", "rgb(241, 77,52)");
            $("#but_1").css("background", "white");
            $("#but_3").css("color", "rgb(241, 77,52)");
            $("#but_3").css("background", "white");
        } else if (c === 2) {
            $("#but_3").css("background", "rgb(241, 77,52)");
            $("#but_3").css("color", "white");
            $("#but_2").css("color", "rgb(241, 77,52)");
            $("#but_2").css("background", "white");
            $("#but_1").css("color", "rgb(241, 77,52)");
            $("#but_1").css("background", "white");
        }

        $(this).removeClass("prev next");
        $(this).siblings().removeClass("prev active next");
        $(this).addClass("active");
        $(this).prev().addClass("prev");
        $(this).next().addClass("next");
    });

    const app = new Vue({
        el: '#app',
        data: {
          errors: [],
          name: null,
          number: null,
          email: null,
          message: null,
          checkbox: null
        },
        mounted() {
            if (localStorage.name) {
              this.name = localStorage.name;
            }
            if(localStorage.number){
                this.number=localStorage.number;
            }
            if(localStorage.email){
                this.email=localStorage.email;
            }
            if(localStorage.message){
                this.message=localStorage.message;
            }
          },
        watch: {
            name(newName) {
              localStorage.name = newName;
            },
            number(newNumber){
                localStorage.number = newNumber;
            },
            email(newEmail){
                localStorage.email = newEmail;
            },
            message(newMessage){
                localStorage.message = newMessage;
            }
        },
        methods: {
          checkForm: function (e) {  
            this.errors = [];
      
            if (!this.name) {
              this.errors.push('Требуется указать имя.');
            }
            if (!this.number) {
              this.errors.push('Требуется указать номер.');
            }
            if (!this.email) {
                this.errors.push('Требуется указать email.');
            }
            if (!this.message) {
                this.errors.push('Требуется написать комменатарий.');
            }
            if (!this.checkbox) {
                this.errors.push('Требуется согласие на обработку песрональных данных.');
            }
            if(this.errors.length>0){
                if(this.errors.length === 1){
                    $("#dop_form").css("height", "84vh");
                    $("#dop_form").css("top", "8vh");
                }
                else if(this.errors.length === 2){
                    $("#dop_form").css("height", "88vh");
                    $("#dop_form").css("top", "6vh");
                }
                else if(this.errors.length === 3){
                    $("#dop_form").css("height", "90vh");
                    $("#dop_form").css("top", "5vh");
                }
                else if(this.errors.length === 4){
                    $("#dop_form").css("height", "92vh");
                    $("#dop_form").css("top", "4vh");
                }
                else if(this.errors.length === 5){
                    $("#dop_form").css("height", "94vh");
                    $("#dop_form").css("top", "3vh");
                }
            }
            if(this.errors.length === 0){
                $("#dop_form").css("height", "70vh");
                $("#dop_form").css("top", "15vh");
            }
            if (this.name && this.number && this.email  && this.message && this.checkbox) {
                Mes(this.name, this.number, this.email, this.message);
                this.name="";
                this.number="";
                this.email="";
                this.message="";
                this.checkbox=null;
            } 
            e.preventDefault();
          }
        }
      });

});
function changeBtn() {
    if ($("#Lete").css("opacity") != 0.2) {
        $("#Lete").css("pointer-events", "none");
        $("#Lete").css("opacity", "0.2"); 
    } else { 
        $("#Lete").css("pointer-events", "unset");
        $("#Lete").css("opacity", "1"); 
    }
}
