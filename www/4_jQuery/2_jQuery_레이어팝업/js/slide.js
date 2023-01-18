$('.popup').hide();

$('.on').click(function() {
    $('.popup').slideDown(500);
});


$('.off').click(function() {
    $('.popup').slideUp(500);
});


$('.toggle').click(function() {
    $('.popup').slideToggle(500);
});


$('.close').click(function() {
    $('.popup').slideUp(500);
  });