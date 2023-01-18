// .popup이 보이지 않도록
$('.popup').hide();

// .on 클릭하면 .popup 보이도록(실행시간은 0.5초)
$('.on').click(function() {
  $('.popup').show(500);
  // (500)은 실행시간 1/1000초 단위
});

// .off 클릭하면 .popup 보이지 않도록(실행시간은 0.5초)
$('.off').click(function() {
$('.popup').hide(500);
});

// .toggle 클릭하면 .popup이 on/off를 반복하도록(실행시간은 0.5초)
$('.toggle').click(function() {
  $('.popup').toggle(500);
});



// .close 클릭하면 .off와 동일(실행시간은 0.5초)
$('.close').click(function() {
  $('.popup').hide(500);
});

