/*
.next 클릭하면

함수. .slide>ul에 animate를 적용하여 css를 left:-100%로 변경 (실행시간 0.5s)
- 재귀함수1-1. .slide>ul의 첫 번째 li를 맨 뒤로 보냄
- 재귀함수1-2. .slide>ul의 css를 left:0으로(애니메이션의 시작점 확인)
*/

$('.next').click(function () {
  $('.slide>ul').animate({
    left: '-100%'
  }, 500, function () {
    $(this).append($('.slide>ul>li:first'));
    $(this).css({
      left: 0
    });
  });
});


$('.prev').click(function () {
  $('.slide>ul').prepend($('.slide>ul>li:last'));
  $('.slide>ul').css('left', '-100%');
  $('.slide>ul').animate({
    left: 0
  }, 500);

  // 객체가 같으므로 한 줄로 축약 가능

});

//prev 재귀함수 없음 (코드 다시 보기)