//앞표지 (#sec1) 펼치기
$('#sec1').addClass('next');

/*
Z값 설정
섹션 초기 css  addClass   removeClass
#sec1   0.1     유지        유지
#sec2   0.2     1           유지
#sec3   0.3     유지         0.3
#sec4   0.4     -1          유지
*/

/*
css 변경 방법 - p.227
$('선택자').css('속성','속성값');
$('선택자').css({속성:'속성값',속성:'속성값'}); - 속성값이 숫자 또는 변수만 있을 경우 '' 불필요
*/

/*
#sec2>.btn 클릭하면
1. #sec3의 Z값을 원래대로
2. #sec2에 next 클래스 토글
*/
$('#sec2>.btn').click(function () {
    $('#sec3').css({'z-index':0});
    $('#sec2').toggleClass('next');
});



/* 
#sec3>.btn 클릭하면
1. #sec3의 Z값을 1로
2. #sec3에 next클래스 토글
*/

$('#sec3>.btn').click(function () {
    $('#sec3').css('z-index',1);
    $('#sec3').toggleClass('next');
});