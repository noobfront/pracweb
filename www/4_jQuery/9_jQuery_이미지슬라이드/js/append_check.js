$('.btn>li').first().addClass('check');

// 전역변수 설정
var nth = 0;
var pos = 0;
var max = $('.btn>li').length - 1;
//.btn>li의 최대 eq값


$('.btn>li').click(function () {
  var checkBtn = $(this).index();
  var result = checkBtn - nth;
  nth = checkBtn;
  $('.btn>li').removeClass('check').eq(nth).addClass('check');
  if (result > 0) {
    pos = -1 * result * 100 + '%';
    $('.slide>ul').animate({
      left: pos
    }, 500, function () {
      $('.slide>ul').append($('.slide>ul>li:lt(' + result + ')'));
      $('.slide>ul').css('left', 0);
    });
  } else if (result < 0) {
    pos = result * 100 + '%';
    result = result + max;
    $('.slide>ul').prepend($('.slide>ul>li:gt(' + result + ')'));
    $('.slide>ul').css(
      'left', pos);
    $('.slide>ul').animate({
      left: 0
    }, 500);
  } else {
    return false;
  }
});


/*
.btn>li 클릭하면
1. 지역변수(checkBtn)에 클릭한 li의 순번을 넣어줌 checkBtn = 4
2. 지역변수(result)에 checkBtn에서 nth를 뺀 값을 넣어줌 result = 4 - 0 = 4
3. 변수(nth)에 클릭한 li의 순번(checkBtn) nth = 4
4. .btn>li에 check class 제거, 클릭한 li만 check class 추가
5. 만약
5-1. (result > 0) 즉, 다음 방향의 체크버튼을 클릭했으면
- 변수(result)를 이용하여 pos의 값이 0% -100% -200% -300% -400% 바뀌도록 계산식 작성
- 함수 실행 .slide>ul에 animate를 적용하여 css를 left:pos로 설정 (실행시간은 0.5s) // pos = -400%
-재귀함수 1. resule의 순번보다 앞에 있는 li를 맨 뒤로 이동
-재귀함수 2. .slide>ul의 css를 left:0으로 (애니메이션 시작점 확인)
checkBtn = 4
result = 4
nth = 4
pos = -400%

5-2 아니면 (result < 0) 즉, 이전 방향의 체크버튼을 클릭했으면
- 변수(result)를 이용하여 pos의 값이 0% -100% -200% -300% -400% 바뀌도록 계산식 작성
- 변수(result)에 최대 eq(4)를 더해서 result의 순번을 반전시킴(max)
- .slide>ul의 li중 result 순번보다 뒤에 있는 li를 맨 앞으로 이동
- .slide>ul의 css를 left:pos로 설정(애니메이션 시작점)
- .slide>ul에 animate를 적용하여 css를 left:0으로 실행시간 0.5s

nth = 4
checkBtn = 0
result = 0 - 4  = -4
pos = -400%
result = result - .btn>li의 eq 최대값 = -4 + 4 = 0

5-3 둘 다 아니면 즉, 현재 위치의 체크버튼을 클릭했으면 - 아무것도 실행하지 않음(return false)
*/