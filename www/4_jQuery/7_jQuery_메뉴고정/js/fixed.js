//함수를 이용해서 css를 직접 제어

/* 
윈도우를 스크롤 할 때 함수 실행

1-1. 만약 윈도우를 스크롤하여 세로로 이동한 값이 #lnb의 세로위치값보다 크면 - #lnb를 상단에 고정
1-2. 아니면 - #lnb의 위치설정을 원래대로
*/

//변수 설정 - #lnb의 위치값을 짧게 부를 수 있도록
var lnbPos = $('#lnb').offset();

$(window).scroll(function () {
  if ($(this).scrollTop() >= lnbPos.top) {
    $('#lnb').css({
      position: 'fixed',
      top: 0,
      'z-index': 1,
      'background-color': 'tomato'
    })
  } else {
    $('#lnb').css({
      position: 'static',
      'background-color': '#000'
    });
  };
});

//offset() 은 위치값 (#lnb의 초기 위치값은 left:0;top:100vh)
//scroll() 은 윈도우 이벤트 - p.258
//scrollTop() 세로 스크롤 값 - p.282