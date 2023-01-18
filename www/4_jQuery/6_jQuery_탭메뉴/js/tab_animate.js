//계산식 이용하여 .tab>ul의 left 값을 0%/-100%/-200%로 변경

//.btn>li 중 첫번째 li에 check class 추가
$('.btn>li').eq(0).addClass('check');

// 변수 설정
var num = 0; // 순번 확인용
var pos = 0; // num을 이용하여 left값을 계산

/*
.btn>li 클릭하면
1. 클릭한 li의 순번을 확인하여 변수(num)에 넣음
2. .btn>li에 check class 제거, num의 순번에 해당하는 li만 check class 추가
3. 변수(num)을 이용하여 변수 pos(psetIntervalosition)의 값을 0%/-100%/-200%로 변경
4. .tab>ul 의 css를 left:pos로 설정
*/

$('.btn>li').click(function(){
num = $(this).index();
$('.btn>li').removeClass('check').eq(num).addClass('check');
pos = -1 * num * 100 + '%';
$('.tab>ul').animate({left:pos},1000);
});

/* 
animate 입력 방법 - p.270
1. animate ({css속성:속성값});
2. animate ({css속성:속성값},실행시간); - 1/1000초(500 -> 0.5s)
3. animate ({css속성:속성값},실행시간,재귀함수);
- 재귀(콜백)함수는 함수를 실행완료 후 실행하는 함수
*/
