(function ($, Drupal) {
  Drupal.behaviors.mainSwiper = {
    attach: function (context, settings) {
      var title = $('body.page-node-type-article h1.page-header').detach();

      $('.field--name-field-tags').after(title);
    },
  };
})(jQuery, Drupal);
