//.popup이 보이지 않도록

$('.popup').hide();

//.on 클릭 시 .popup이 서서히 나타나도록(실행시간 0.5s)

$('.on').click(function() {
    $('.popup').fadeIn(500);
});

//.off 클릭 시 .popup이 서서히 사라지도록(실행시간 0.5s)

$('.off').click(function() {
    $('.popup').fadeOut(500);
});



//.toggle 클릭 시 .popup이 on/off를 반복하도록(실행시간 0.5s)

$('.toggle').click(function() {
    $('.popup').fadeToggle(500);
});

//.close 클릭 시 off와 동일(실행시간 0.5s)
$('.close').click(function() {
    $('.popup').fadeOut(500);
  });