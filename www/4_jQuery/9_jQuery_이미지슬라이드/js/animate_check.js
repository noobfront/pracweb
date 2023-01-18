// eq() 선택자를 사용하여 .btn>li 중 첫번째 li에 check class 추가

$('.btn>li').eq(0).addClass('check');

var nth = 0;
var pos = 0;

/*
.btn>li 클릭하면

1. 클릭한 li의 순번을 확인하여 nth에 넣어줌 - index()
2. nth를 이용하여 pos의 값이 0% -100% -200% -300% -400% 로 바뀌도록
3. .slide>ul에 animate를 적용하여 css를 left:pos로 설정 (실행시간 0.5s)
4. .btn>li 에 check class 제거, nth 번째 li 만 check class 를 추가
*/

$('.btn>li').click(function () {
  nth = $(this).index();
  pos = -1 * nth * 100 + '%';
  $('.slide>ul').animate({
    left: pos
  }, 500);
  $('.btn>li').removeClass('check').eq(nth).addClass('check');
});