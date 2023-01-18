//주 메뉴 1번에 밑줄 지정
$('#lnb>ul>li').first().addClass('check');

var nth = 0;
var pos = 0;
var max = $('section').length - 1;

//주메뉴 클릭
/*
#lnb>ul>li 클릭하면
1. 클릭한 li의 순번을 nth에 넣어줌
2. nth를 이용하여 지역변수(underBar)의 값을 25% 50% 75% 100% 로 바뀌도록 설정
3. nth를 이용하여 pos의 값이 0/-100vw/-200vw/-300vw로 바뀌도록 설정
4. .bar에 animate를 적용하여 width:underBar
5. main에 animate를 적용하여(0.5s) left:pos로 설정
//width() - 뷰포트 폭, 즉 $(window).width == 100vw
//main에 animate를 적용하여(0.5s) top:pos로 설정
*/
$('#lnb>ul>li').click(function () {
  nth = $(this).index();
  var underBar = (nth + 1) * 25 + '%';
  pos = -1 * nth * $(window).width();
  $('.bar').animate({
    width: underBar
  }, 500);
  $('main').animate({
    left: pos
  }, 500);
});




//스크롤 업&다운
/*
윈도우를 스크롤하면 함수(e)를 실행
1-1. 만약 스크롤 수치가 0보다 크면, 즉 스크롤 방향이 아래쪽이면 - nth++; (만약 nth가 max보다 크거나 같으면 종료)
1-2. 아니면 스크롤 수치가 0보다 작으면, 즉 스크롤 방향이 위쪽이면 - nth--: (만약 nth가 0보다 작거나 같으면 종료)
1-3. 둘 다 아니면 종료
2. nth를 이용하여 pos의 값이 0/-100vw/-200vw/-300vw로 바뀌도록 설정
3. main에 animate를 적용하여(0.5s) width:underBar로 설정
4. .bar 에 animate를 적용하여 width:underBar로 설정
*/
/*
on() - 이벤트 등록 메소드 - p.250
$(선택자).on('이벤트명',function(e){실행문});
*/
//originalEvent - '이벤트명'이 원래 가지고 있는 이벤트, 즉 조금씩 스크롤
//deltaY = 마우스 스크롤 방향, 양수면 아래 음수면 위
//height() - 뷰포트 높이, 즉 $(window).height == 100vh

$(window).on('wheel', function (e) {
  if (e.originalEvent.deltaY > 0) {
    if (nth >= max) return;
    nth++;
  } else if (e.originalEvent.deltaY < 0) {
    if (nth <= 0) return;
    nth--;
  } else return;
  var underBar = (nth + 1) * 25 + '%';
  pos = -1 * nth * $(window).width();
  $('main').animate({
    left:pos
  }, 300);
  $('.bar').animate({
    width:underBar
  })
});