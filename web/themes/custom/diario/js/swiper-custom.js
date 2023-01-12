(function ($, Drupal) {
  Drupal.behaviors.mainSwiper = {
    attach: function (context, settings) {
      var swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  };
})(jQuery, Drupal);
