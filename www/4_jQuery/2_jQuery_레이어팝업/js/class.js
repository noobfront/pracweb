//.on 클릭 시 .popup에 view 클래스 추가

$('.on').click(function() {
    $('.popup').addClass('view');
    //addClass의 매개변수는 class명만 입력 가능 - . 생략해야만 함
});



//.off 클릭 시 .popup에 view클래스 제거
$('.off').click(function() {
    $('.popup').removeClass('view');
});


//.toggle 클릭 시 on/off 반복
$('.toggle').click(function() {
    $('.popup').toggleClass('view');
});


//.close는 .off와 동일
$('.close').click(function() {
    $('.popup').removeClass('view');
});
