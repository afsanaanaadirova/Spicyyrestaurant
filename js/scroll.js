// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('.main666').fadeIn(200);    // Fade in the arrow
    } else {
        $('.main666').fadeOut(200);   // Else fade out the arrow
    }
});
$('.main666').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


