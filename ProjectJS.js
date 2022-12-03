var document;
var $;
var $num;
var $even;
var $odd;
var console;
var $slide;
var g;
var g1;


(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.ResizeSensor = factory();
  }
}(this, function() {

  // Make sure it does not throw in a SSR (Server Side Rendering) situation
  if (typeof window === "undefined") {
    return null;
  }
  // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
  // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
  // would generate too many unnecessary events.
  var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(fn) {
      return window.setTimeout(fn, 20);
    };

  /**
   * Iterate over each of the provided element(s).
   *
   * @param {HTMLElement|HTMLElement[]} elements
   * @param {Function}                  callback
   */
  function forEachElement(elements, callback) {
    var elementsType = Object.prototype.toString.call(elements);
    var isCollectionTyped = ('[object Array]' === elementsType ||
      ('[object NodeList]' === elementsType) ||
      ('[object HTMLCollection]' === elementsType) ||
      ('[object Object]' === elementsType) ||
      ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
      ||
      ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
    );
    var i = 0,
      j = elements.length;
    if (isCollectionTyped) {
      for (; i < j; i++) {
        callback(elements[i]);
      }
    } else {
      callback(elements);
    }
  }

  /**
   * Class for dimension change detection.
   *
   * @param {Element|Element[]|Elements|jQuery} element
   * @param {Function} callback
   *
   * @constructor
   */
  var ResizeSensor = function(element, callback) {
    /**
     *
     * @constructor
     */
    function EventQueue() {
      var q = [];
      this.add = function(ev) {
        q.push(ev);
      };

      var i, j;
      this.call = function() {
        for (i = 0, j = q.length; i < j; i++) {
          q[i].call();
        }
      };

      this.remove = function(ev) {
        var newQueue = [];
        for (i = 0, j = q.length; i < j; i++) {
          if (q[i] !== ev) newQueue.push(q[i]);
        }
        q = newQueue;
      }

      this.length = function() {
        return q.length;
      }
    }

    /**
     *
     * @param {HTMLElement} element
     * @param {Function}    resized
     */
    function attachResizeEvent(element, resized) {
      if (!element) return;
      if (element.resizedAttached) {
        element.resizedAttached.add(resized);
        return;
      }

      element.resizedAttached = new EventQueue();
      element.resizedAttached.add(resized);

      element.resizeSensor = document.createElement('div');
      element.resizeSensor.className = 'resize-sensor';
      var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
      var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

      element.resizeSensor.style.cssText = style;
      element.resizeSensor.innerHTML =
        '<div class="resize-sensor-expand" style="' + style + '">' +
        '<div style="' + styleChild + '"></div>' +
        '</div>' +
        '<div class="resize-sensor-shrink" style="' + style + '">' +
        '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
        '</div>';
      element.appendChild(element.resizeSensor);

      if (element.resizeSensor.offsetParent !== element) {
        element.style.position = 'relative';
      }

      var expand = element.resizeSensor.childNodes[0];
      var expandChild = expand.childNodes[0];
      var shrink = element.resizeSensor.childNodes[1];
      var dirty, rafId, newWidth, newHeight;
      var lastWidth = element.offsetWidth;
      var lastHeight = element.offsetHeight;

      var reset = function() {
        expandChild.style.width = '100000px';
        expandChild.style.height = '100000px';

        expand.scrollLeft = 100000;
        expand.scrollTop = 100000;

        shrink.scrollLeft = 100000;
        shrink.scrollTop = 100000;
      };

      reset();

      var onResized = function() {
        rafId = 0;

        if (!dirty) return;

        lastWidth = newWidth;
        lastHeight = newHeight;

        if (element.resizedAttached) {
          element.resizedAttached.call();
        }
      };

      var onScroll = function() {
        newWidth = element.offsetWidth;
        newHeight = element.offsetHeight;
        dirty = newWidth != lastWidth || newHeight != lastHeight;

        if (dirty && !rafId) {
          rafId = requestAnimationFrame(onResized);
        }

        reset();
      };

      var addEvent = function(el, name, cb) {
        if (el.attachEvent) {
          el.attachEvent('on' + name, cb);
        } else {
          el.addEventListener(name, cb);
        }
      };

      addEvent(expand, 'scroll', onScroll);
      addEvent(shrink, 'scroll', onScroll);
    }

    forEachElement(element, function(elem) {
      attachResizeEvent(elem, callback);
    });

    this.detach = function(ev) {
      ResizeSensor.detach(element, ev);
    };
  };

  ResizeSensor.detach = function(element, ev) {
    forEachElement(element, function(elem) {
      if (!elem) return
      if (elem.resizedAttached && typeof ev == "function") {
        elem.resizedAttached.remove(ev);
        if (elem.resizedAttached.length()) return;
      }
      if (elem.resizeSensor) {
        if (elem.contains(elem.resizeSensor)) {
          elem.removeChild(elem.resizeSensor);
        }
        delete elem.resizeSensor;
        delete elem.resizedAttached;
      }
    });
  };

  return ResizeSensor;

}));





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
    
    $("#Reviews").css("padding-bottom", $('#Com_1').height());
    
    $(window).resize(function(){
      new ResizeSensor(jQuery('#Com_1'), function(){
        $("#Reviews").css("padding-bottom", $('#Com_1').height());
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
