/*
nav>ul>li>a 클릭하면 
1. 모든 .sub 슬라이드 업
2-1. 만약 this(클릭 한 요소)가 active class를 갖고 있을 경우 
(즉, 클릭 한 a 태그의 .sub가 펼쳐진 상태면)
-active class 제거
- 클릭한 요소의 자녀요소인 .btn의 rotate클래스 제거
2-2. 아니면 (즉, 클릭한 a태그의 .sub가 접혀있는 상태면)
- 다른 모든 요소의 active 상태를 종료
- 클릭한 요소의 active 상태 유지
- 클릭한 요소의 동생요소인 .sub를 slideDown
- rotate 클래스를 가진 요소들은 rotate 클래스를 제거
- 클릭한 요소의 자녀요소인 .btn만 rotate 클래스 추가
*/

$('.sub').hide();

$('nav>ul>li>a').click(function () {
  $('.sub').slideUp(500);
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).children('.btn').removeClass('rotate');
  } else {
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(this).next('.sub').slideDown(500);
    $('.rotate').removeClass('rotate');
    $(this).children('.btn').addClass('rotate');
  };
  return false;
});
//children()는 자녀요소 (관계 이동 메소드 -p.244)
