jQuery(function() {
  jQuery('#toggle').on('click', function() {
    jQuery('#menu, #content1').toggleClass('active');
  });
})