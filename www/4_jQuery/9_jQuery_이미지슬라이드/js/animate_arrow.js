// 변수 설정

var nth = 0;
var pos = 0;

/*
.next 를 클릭하면
자동실행함수 설정 (실행시간은 3s)
1. nth는 1씩 증가
2. 만약 nth가 4보다 커지면 0이 될 것
3. nth를 이용하여 pos의 값이 0% -100% -200% -400% 로 바뀌도록 계산식 작성
4. .slide>ul에 animate를 적용하여 css를 left:pos로 설정 (실행시간 0.5s)
*/

$('.next').click(function () {
  nth++;
  if (nth > 4) nth = 0;
  pos = -1 * nth * 100 + '%';
  $('.slide>ul').animate({
    left: pos
  }, 500);
});

$('.prev').click(function () {
  nth--;
  if (nth < 0) nth = 4;
  pos = -1 * nth * 100 + '%';
  $('.slide>ul').animate({
    left: pos
  }, 500);
});