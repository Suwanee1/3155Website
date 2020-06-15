$(document).ready(function() {
    $(".popup-youtube").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

/* Using the same accordion function that was used on the information page
   to allow the users to better view the data and not overwhelm them. */
$(function() {
    $("#accordion").accordion();
  })
