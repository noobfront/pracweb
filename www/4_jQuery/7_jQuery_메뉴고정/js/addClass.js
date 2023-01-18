// css에 다른 클래스를 설정하고 add/remove 실행

// 변수 설정 - #lnb의 위치값을 짧게 부르기 위해
var lnbPos = $('#lnb').offset();

/*
윈도우를 스크롤 할 때 함수 실행
1-1. 만약 윈도우를 스크롤하여 세로로 이동한 값이 #lnb의 세로위치값보다 크면 
- #lnb에 fixed class 추가
1-2. 아니면 
- #lnb의 fixed class 제거
*/

$(window).scroll(function () {
  if ($(this).scrollTop() >= lnbPos.top) {
    $('#lnb').addClass('fixed');
  } else {
    $('#lnb').removeClass('fixed');
  };
});