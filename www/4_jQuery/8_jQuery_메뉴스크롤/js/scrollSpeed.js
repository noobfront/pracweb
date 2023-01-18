/*
문서를 스크롤 할 때 함수 실행
-header의 scrollTop을 다른 요소 scrollTop에 비해 1/2로 설정
*/
$(document).scroll(function () {
  // 다른요소의 scrollTop을 짧게 부르기 위해
  var all = $(this).scrollTop();
  $('header').css('top', (all / 2));
});