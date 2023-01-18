/* 공통 */
//.btn>li 중 첫번째 li에 배경색
$('.btn>li').first().addClass('check');
//전역 변수 설정
var nth = 0;
var pos = 0;
var max = $('.btn>li').length - 1;
var timer = 0;

//자동 - autoSlide 설정

//만약 변수(timer)가 0이면 자동실햄함수를 변수에 넣음
function autoSlide() {
  if (timer == 0) {
    timer = setInterval(function () {
      nth++;
      if (nth > max) nth = 0;
      $('.img').animate({
        left: '-100%'
      }, 500, function () {
        $('.img').append($('.img>li:first')).css('left', 0);
        $('.btn>li').removeClass('check').eq(nth).addClass('check');
      });
    }, 5000);
  };
};
autoSlide();//함수실행

//자동 멈춤&재실행 - .prev,.next,.btn>li 마우스 오버하면 - 변수(timer)의 자동실행함수(setInterval) 삭제, 변수에 다시 0을 넣어줌
//.prev,.next,.btn>li - 마우스 아웃하면 autoSlide재실행
$('.prev,.next,.btn>li').mouseover(function(){
  clearInterval(timer);
  timer = 0;
}).mouseout(function(){
  autoSlide();
});



//next 버튼
$('.next').click(function () {
  nth++;
  if (nth > max) nth = 0;
  $('.img').animate({
    left: '-100%'
  }, 500, function () {
    $('.img').append($('.img>li:first')).css('left', 0);
    $('.btn>li').removeClass('check').eq(nth).addClass('check');
  });
});

//prev 버튼
$('.prev').click(function () {
  nth--;
  if (nth < 0) nth = max;
  $('.img').prepend($('.img>li:last')).css('left', '-100%').animate({
    left: 0
  });
  $('.btn>li').removeClass('check').eq(nth).addClass('check');
});

//check 버튼
$('.btn>li').click(function () {
  var checkBtn = $(this).index();
  var result = checkBtn - nth;
  nth = checkBtn;
  $('.btn>li').removeClass('check').eq(nth).addClass('check');
  if (result > 0) {
    pos = -1 * result * 100 + '%';
    $('.img').animate({
      left: pos
    }, 500, function () {
      $('.img').append($('.img>li:lt(' + result + ')')).css('left', 0)
    });
  } else if (result < 0) {
    pos = result * 100 + '%';
    result = result + max;
    $('.img').prepend($('.img>li:gt(' + result + ')')).css('left', pos).animate({
      left: 0
    }, 500);
  } else {
    return false;
  }
});

//자동실행