$(document).ready(function(){
  $('.main8main').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});
$('.dishsSlider').slick({
  infinite: true,
  dots:true,
  slidesToShow: 3,
});
$('.ShefSlider').slick({
  infinite: true,
  slidesToShow: 3,
  arrows:false,
  slidesToScroll: 3,
});
$('.main11').slick();({
  dots: true,
  arrows:true,
});
$('.responsive').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
});
$('.youtubebtn').click(function() {
  $(".YouTubePopUp-Wrap").show("slow")
});
// $('.counter').counterUp({
//   delay: 10,
//   time: 1000
// });
if( $('.YouTubePopUp-Wrap').hasClass('YouTubePopUp-animation') ){
  setTimeout(function() {
      $('.YouTubePopUp-Wrap').removeClass("YouTubePopUp-animation");
  }, 600);
}

$(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function(){
  $(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() { $(this).remove(); });
});

$(".color").click(function(){
    var mycolor=$(this).css("background-color");
    $("button.random").css("background",mycolor);
    $("div.random").css("background",mycolor);
    $("span.randomback").css("background",mycolor);
    $("span.random").css("color",mycolor );
    $("i.random").css("color",mycolor);
    $("a.random").css("color",mycolor);
    $("div.fourth .slick-dots li.slick-active").css("background",mycolor);
    $("hr.random").css("background",mycolor);
    $("a.randomback").css("background",mycolor);
    $("div.eightteen .col-md-12 li.active a").css("background",mycolor);


});
//Scoll
$(window).scroll(function(){
    if ($(this).scrollTop() > 400) 
    {
        $('.firstpage').fadeIn();
    } 
    else 
    {
        $('.firstpage').fadeOut();
    }
});
$('.firstpage').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
});
var timepicker = $('.timepicker').wickedpicker(); console.log(timepickers.wickedpicker('time')); 