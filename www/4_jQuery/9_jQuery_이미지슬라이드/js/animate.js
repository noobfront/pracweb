var nth = 0;
var pos = 0;

setInterval(function () {
  nth++;
  if (nth > 4) nth = 0;
  pos = -1 * nth * 100 + '%';
  $('.slide>ul').animate({
    left: pos
  }, 1000, function () {
    $('.btn>li').removeClass('check').eq(nth).addClass('check');
  })
}, 5000);

$('.next').click(function () {
  nth++;
  if (nth > 4) nth = 0;
  pos = -1 * nth * 100 + '%';
  $('.slide>ul').animate({
    left: pos
  }, 1000);
  $('.btn>li').removeClass('check').eq(nth).addClass('check');
});

$('.prev').click(function () {
  nth--;
  if (nth < 0) nth = 4;
  pos = -1 * nth * 100 + '%';
  $('.slide>ul').animate({
    left: pos
  }, 1000);
  $('.btn>li').removeClass('check').eq(nth).addClass('check');
});

$('.btn>li').eq(0).addClass('check');

$('.btn>li').click(function () {
  nth = $(this).index();
  pos = -1 * nth * 100 + '%';
  $('.slide>ul').animate({
    left: pos
  }, 1000);
  $('.btn>li').removeClass('check').eq(nth).addClass('check');
});