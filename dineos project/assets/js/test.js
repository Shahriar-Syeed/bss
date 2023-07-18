/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
  "use strict";

  var imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      imJs.counterUp();
      imJs.stickyHeader();
      imJs.wowActive();
      imJs.swiperJs();
      imJs.salActive();
      imJs.datePicker();
      imJs.timePicker();
      imJs.vedioActivation();
      imJs.searchOption();
      imJs.metismenu();
      imJs.sideMenu();
      imJs.backToTopInit();
      imJs.filterPrice();
      imJs.isotope();
      imJs.preloader();
      imJs.slideNav();
      imJs.onePageNav();
      imJs.megnifyingPopup();
    },
    // counter up
    counterUp: function (e) {
      $(".counter").counterUp({
        delay: 10,
        time: 1000,
      });
      $(".counter").addClass("animated fadeInDownBig");
      $("h3").addClass("animated fadeIn");
    },
    // sticky header activation
    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },
    // waw js activation
    wowActive: function () {
      new WOW().init();
    },
    // All swiper js
    swiperJs: function () {
      $(document).ready(function () {
        var menu = ["Design and Build", "Roof Remodeling", "Bridge Remodeling"];
        var mySwiper = new Swiper(".swiper-container", {
          // If we need pagination
          effect: "fade",
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 7000,
          },
          // Navigation arrows
          navigation: false,
        });
      });
      $(document).ready(function () {
        var mySwiper = new Swiper(".swiper-container-h2", {
          // If we need pagination
          effect: "slide",
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 7000,
          },
          // Navigation arrows
          navigation: false,
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".case-three", {
          slidesPerView: 2.1,
          spaceBetween: 30,
          slidesPerGroup: 1,
          centeredSlides: true,
          parallax: true,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
        var swiper = new Swiper(".swiper-container-h1", {
          direction: "horizontal",
          effect: "slide",
          autoplay: false,
          parallax: true,
          speed: 1600,
          rtl: true,
          loop: true,
          loopFillGroupWithBlank: !0,
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true",
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".rts-team-slider", {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 1,
          centeredSlides: false,
          speed: 1600,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-nexts",
            prevEl: ".swiper-button-prevs",
          },
          breakpoints: {
            1500: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".rts-team-slider2", {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 1,
          centeredSlides: false,
          speed: 1600,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-nexts",
            prevEl: ".swiper-button-prevs",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".project-home-nine", {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-blog", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: false,
          autoplay: false,
          pagination: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-brand", {
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true,
          autoplay: false,
          pagination: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 5,
            },
            1199: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".service-six", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          // autoplay: {
          //   delay: 3000,
          // },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".case-tab-swipers", {
          slidesPerView: 2.4,
          spaceBetween: 30,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-paginations",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".swiper-vision", {
          direction: "horizontal",
          effect: "slide",
          parallax: true,
          speed: 1600,
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          autoplay: false,
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            autoplay: false,
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".swiper-testimonials-1", {
          slidesPerView: 1,
          slidesPerGroup: 1,
          parallax: true,
          speed: 1600,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-paginations",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".swiper-banner-eight", {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 7000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-paginations",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
    // sal animatioin activation
    salActive: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },
    // date picker
    datePicker: function () {
      jQuery(document).ready(function () {
        jQuery("#datepicker").datepicker({
          format: "dd-mm-yyyy",
          startDate: "+1d",
        });
      });
    },
    timePicker: function () {
      $(function () {
        $("#timepicker").timepicker({
          //timeFormat: 'h:mm p',
          dynamic: false,
          dropdown: true,
          scrollbar: true,
        });
      });
    },
    // vesio activation
    vedioActivation: function (e) {
      $("#play-video, .play-video").on("click", function (e) {
        e.preventDefault();
        $("#video-overlay, .video-overlay").addClass("open");
        $("#video-overlay, .video-overlay").append(
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/6stlCkUDG_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
      });

      $(".video-overlay, .video-overlay-close").on("click", function (e) {
        e.preventDefault();
        close_video();
      });

      $(document).keyup(function (e) {
        if (e.keyCode === 27) {
          close_video();
        }
      });

      function close_video() {
        $(".video-overlay.open").removeClass("open").find("iframe").remove();
      }
    },

    // search popup
    searchOption: function () {
      $(document).on("click", "#search", function () {
        $(".search-input-area").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on("click", "#close", function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on("click", "#anywhere-home", function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },
    // metismenu
    metismenu: function () {
      $("#mobile-menu-active").metisMenu();
    },
    // side menu desktop
    sideMenu: function () {
      $(document).on("click", "#menu-btn", function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on("click", ".close-icon-menu", function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on("click", "#anywhere-home", function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on("click", ".onepage .mainmenu li a", function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },

    slideNav: function () {
      window.slide = new SlideNav();
    },

    onePageNav: function (e) {
      $(document).ready(function () {
        var nav = $("#nav");
        if (nav.length) {
          $("#nav").onePageNav();
        }
      });
    },

    backToTopInit: function () {
      $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
          "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
          "stroke-dashoffset 10ms linear";
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength) / height;
          progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on("scroll", function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery(".progress-wrap").addClass("active-progress");
          } else {
            jQuery(".progress-wrap").removeClass("active-progress");
          }
        });
        jQuery(".progress-wrap").on("click", function (event) {
          event.preventDefault();
          jQuery("html, body").animate({ scrollTop: 0 }, duration);
          return false;
        });
      });
    },
    filterPrice: function () {
      var filter_price = $(".filter-price");
      if (filter_price.length) {
        var lowerSlider = document.querySelector("#lower");
        var upperSlider = document.querySelector("#upper");

        document.querySelector("#two").value = upperSlider.value;
        document.querySelector("#one").value = lowerSlider.value;

        var lowerVal = parseInt(lowerSlider.value);
        var upperVal = parseInt(upperSlider.value);

        upperSlider.oninput = function () {
          lowerVal = parseInt(lowerSlider.value);
          upperVal = parseInt(upperSlider.value);

          if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
            if (lowerVal == lowerSlider.min) {
              upperSlider.value = 4;
            }
          }
          document.querySelector("#two").value = this.value;
        };

        lowerSlider.oninput = function () {
          lowerVal = parseInt(lowerSlider.value);
          upperVal = parseInt(upperSlider.value);
          if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
              lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
          }
          document.querySelector("#one").value = this.value;
        };
      }
    },
    isotope: function () {
      // Isotope
      var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 0,
          gutter: 0,
        },
      });
      // filter items on button click
      $(".portfolio-menu ").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });
      $(".portfolio-menu button").on("click", function (event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
      });
    },
    preloader: function () {
      var preload = $("#dinenos-load");

      if (preload.length) {
        window.addEventListener("load", function () {
          document.querySelector("#dinenos-load").classList.add("loaded");
        });
      }
    },

    megnifyingPopup: function () {
      $("#open-popup").magnificPopup({
        items: [
          {
            src: "assets/images/gallery/gallery-img-01.jpg",
            title: "Gallery 01",
          },
          {
            src: "assets/images/gallery/gallery-img-02.jpg",
            title: "Gallery 02",
          },
          {
            src: "assets/images/gallery/gallery-img-03.jpg",
            title: "Gallery 03",
          },
          {
            src: "assets/images/gallery/gallery-img-04.jpg",
            title: "Gallery 04",
          },
        ],
        gallery: {
          enabled: true,
        },
        type: "image", // this is a default type
      });
      $("#open-popupa").magnificPopup({
        items: [
          {
            src: "assets/images/gallery/gallery-img-02.jpg",
            title: "Gallery 02",
          },
          {
            src: "assets/images/gallery/gallery-img-03.jpg",
            title: "Gallery 03",
          },
          {
            src: "assets/images/gallery/gallery-img-04.jpg",
            title: "Gallery 04",
          },
          {
            src: "assets/images/gallery/gallery-img-01.jpg",
            title: "Gallery 01",
          },
        ],
        gallery: {
          enabled: true,
        },
        type: "image", // this is a default type
      });
      $("#open-popupb").magnificPopup({
        items: [
          {
            src: "assets/images/gallery/gallery-img-03.jpg",
            title: "Gallery 03",
          },
          {
            src: "assets/images/gallery/gallery-img-04.jpg",
            title: "Gallery 04",
          },
          {
            src: "assets/images/gallery/gallery-img-01.jpg",
            title: "Gallery 01",
          },
          {
            src: "assets/images/gallery/gallery-img-02.jpg",
            title: "Gallery 02",
          },
        ],
        gallery: {
          enabled: true,
        },
        type: "image", // this is a default type
      });
      $("#open-popupc").magnificPopup({
        items: [
          {
            src: "assets/images/gallery/gallery-img-04.jpg",
            title: "Gallery 04",
          },
          {
            src: "assets/images/gallery/gallery-img-01.jpg",
            title: "Gallery 01",
          },
          {
            src: "assets/images/gallery/gallery-img-02.jpg",
            title: "Gallery 02",
          },
          {
            src: "assets/images/gallery/gallery-img-03.jpg",
            title: "Gallery 03",
          },
        ],
        gallery: {
          enabled: true,
        },
        type: "image", // this is a default type
      });
      $("#open-popupd").magnificPopup({
        items: [
          {
            src: "assets/images/gallery/gallery-img-05.webp",
            title: "Gallery 04",
          },
          {
            src: "assets/images/gallery/gallery-img-06.webp",
            title: "Gallery 01",
          },
          {
            src: "assets/images/gallery/gallery-img-07.webp",
            title: "Gallery 02",
          },
          {
            src: "assets/images/gallery/gallery-img-08.webp",
            title: "Gallery 03",
          },
        ],
        gallery: {
          enabled: true,
        },
        type: "image", // this is a default type
      });
      $("#open-popupe").magnificPopup({
        items: [
          {
            src: "assets/images/gallery/gallery-img-06.webp",
            title: "Gallery 04",
          },
          {
            src: "assets/images/gallery/gallery-img-07.webp",
            title: "Gallery 01",
          },
          {
            src: "assets/images/gallery/gallery-img-08.webp",
            title: "Gallery 02",
          },
          {
            src: "assets/images/gallery/gallery-img-05.webp",
            title: "Gallery 03",
          },
        ],
        gallery: {
          enabled: true,
        },
        type: "image", // this is a default type
      });
      $("#open-popupf").magnificPopup({
        items: [
          {
            src: "assets/images/gallery/gallery-img-07.webp",
            title: "Gallery 04",
          },
          {
            src: "assets/images/gallery/gallery-img-08.webp",
            title: "Gallery 01",
          },
          {
            src: "assets/images/gallery/gallery-img-05.webp",
            title: "Gallery 02",
          },
          {
            src: "assets/images/gallery/gallery-img-06.webp",
            title: "Gallery 03",
          },
        ],
        gallery: {
          enabled: true,
        },
        type: "image", // this is a default type
      });
      $("#open-popupg").magnificPopup({
        items: [
          {
            src: "assets/images/gallery/gallery-img-08.webp",
            title: "Gallery 04",
          },
          {
            src: "assets/images/gallery/gallery-img-05.webp",
            title: "Gallery 01",
          },
          {
            src: "assets/images/gallery/gallery-img-06.webp",
            title: "Gallery 02",
          },
          {
            src: "assets/images/gallery/gallery-img-07.webp",
            title: "Gallery 03",
          },
        ],
        gallery: {
          enabled: true,
        },
        type: "image", // this is a default type
      });
    },
  };

  imJs.m();
})(jQuery, window);
