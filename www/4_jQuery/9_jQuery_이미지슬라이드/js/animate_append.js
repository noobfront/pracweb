/*
.next 클릭하면
1. li 3번 -> 2번 위치로 (실행시간 0.5s)
2. li 2번 -> 1번 위치로 (실행시간 0.5s)
3. li 1번 -> 3번 위치로 (실행시간 0.5s)
3. 의 콜백함수  
- .slide>ul의 첫번째 li를 맨 뒤로(li의 순서 재배열)
*/

$('.next').click(function () {
  $('.slide>ul>li:eq(2)').animate({
    left: '300px',
    top: '100px'
  }, 500);
  $('.slide>ul>li:eq(1)').animate({
    left: 0,
    top: 0
  }, 500);
  $('.slide>ul>li:eq(0)').animate({
    left: '600px',
    top: 0
  }, 500, function() {
    $('.slide>ul').append($('.slide>ul>li:first'))
  } );
});

/*
.prev 클릭하면
1. li 1번 -> 2번 위치로 (실행시간 0.5s)
2. li 2번 -> 3번 위치로 (실행시간 0.5s)
3. li 3번 -> 1번 위치로 (실행시간 0.5s)
3. 의 콜백함수  
- .slide>ul의 마지막 li를 맨 앞으로(li의 순서 재배열)
*/
$('.prev').click(function () {
  $('.slide>ul>li:eq(0)').animate({
    left: '300px',
    top: '100px'
  }, 500);
  $('.slide>ul>li:eq(1)').animate({
    left: '600px',
    top: 0
  }, 500);
  $('.slide>ul>li:eq(2)').animate({
    left: 0,
    top: 0
  }, 500, function() {
    $('.slide>ul').prepend($('.slide>ul>li:last'))
  } );
});