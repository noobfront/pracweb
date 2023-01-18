// 함수 작성 (이벤트 없음)

/*
함수명 scrolling 이라는 함수를 설정
- 각각의 section의 위치가 top:0의 위치로 이동하는 시간을 0.5s 설정
*/

// 함수 안에 있는 변수의 필요값을 인수로 사용 - p. 94
function scrolling(sec) {
  var pos = $(sec).offset().top - 40;
  // section의 위치값 top - 40px
  $('html,body').animate({
    scrollTop: pos
  }, 500);
};


// 하이퍼링크를 실행할 때 함수 실행

/*
#lnb>ul>li>a 클릭하면 
- a 태그의 하이퍼링크를 매개변수로 설정
- 매개변수 (to) 와 함께 scrolling 함수를 실행
*/
$('#lnb>ul>li>a').click(function () {
  var to = $(this).attr('href');
  scrolling(to);
});

/*
 attr(attribute) 은 요소의 속성을 가져오거나 변경 또는 삭제 
 - p.226

1. $('선택자').attr('속성명'); - 속성값을 가져오기
2. $('선택자').attr('속성명','속성값'); - 속성값을 변경
3. $('선택자').removeAttr('속성명'); - 속성을 제거
*/