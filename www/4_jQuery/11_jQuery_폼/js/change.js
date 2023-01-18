// .car 의 첫번쨰 li만 보이도록
$('.car>ul>li').hide().eq(0).show();

/*
select 요소의 option을 변경하면
1. 지역변수(photo)에 option의 순번을 입력
2. .car의 li는 숨기고 선택한 option의 순번과 같은 순번의 li만 보이도록
*/
//option 변경 이벤트 : change()
//option 순번 : selectedIndex
//html을 가져올 때 get()

$('.list').change(function(){
var photo = $('.list').get(0).selectedIndex;
$('.car>ul>li').hide().eq(photo).show();
});