//주 메뉴 1번에 밑줄 지정
$('#lnb>ul>li').first().addClass('check');

var nth = 0;
var pos = 0;
var max = $('section').length - 1;

//주메뉴 클릭
/*
#lnb>ul>li 클릭하면
1. 클릭한 li의 순번을 nth에 넣어줌
2. #lnb>ul>li에 check class 제거, nth번째 li만 check class 추가
3. nth를 이용하여 pos의 값이 0/100vh/200vh/300vh로 바뀌도록 설정
3-1. height() - 뷰포트 높이, 즉 $(window).height == 100vh
4. html과 body에 animate를 적용하여(0.5s) scrollTop:pos로 설정
*/
$('#lnb>ul>li').click(function () {
  nth = $(this).index();
  $('#lnb>ul>li').removeClass('check').eq(nth).addClass('check');
  pos = nth * $(window).height();
  $('html,body').animate({
    scrollTop: pos
  }, 500);
});




//스크롤 업&다운
/*
윈도우를 스크롤하면 함수(e)를 실행
1-1. 만약 스크롤 수치가 0보다 크면, 즉 스크롤 방향이 아래쪽이면 - nth++; (만약 nth가 max보다 크거나 같으면 종료)
1-2. 아니면 스크롤 수치가 0보다 작으면, 즉 스크롤 방향이 위쪽이면 - nth--: (만약 nth가 0보다 작거나 같으면 종료)
1-3. 둘 다 아니면 종료
2. nth를 이용하여 pos의 값이 0/100vh/200vh/300vh로 바뀌도록 설정
3. html과 body에 animate를 적용하여(0.5s) scrollTop:pos로 설정
4. #lnb>ul>li에 check class 제거, nth번째 li만 check class 추가
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
  pos = nth * $(window).height();
  $('html,body').animate({
    scrollTop: pos
  }, 300);
  $('#lnb>ul>li').removeClass('check').eq(nth).addClass('check');
});