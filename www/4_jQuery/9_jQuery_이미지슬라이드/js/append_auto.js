/*
자동실행함수를 이용하여 슬라이드 1컷의 시간(3s) 설정

함수. .slide>ul에 animate를 적용하여 css를 left:-100%로 변경 (실행시간 0.5s)
- 재귀함수1-1. .slide>ul의 첫 번째 li를 맨 뒤로 보냄
- 재귀함수1-2. .slide>ul의 css를 left:0으로(애니메이션의 시작점 확인)
*/

setInterval(function () {
  $('.slide>ul').animate({
    left: '-100%'
  }, 500, function () {
    $(this).append($('.slide>ul>li:first'));
    $(this).css({
      left: 0
    });
  });
}, 3000);
