/* 
.btn 클릭하면
1. .product>li 숨김
2. input요소에 입력한 텍스트를 포함하고 있는 a태그의 부모요소인 li만 보이게 설정
*/

$('.btn').click(function(){
$('.product>li').hide();
$('.product>li>a').filter(':contains(' + $('.text').val() + ')').parent().show();
});

//filter() - 필터링 메소드, 선택자에 ()요소가 하나라도 있는지 확인
//:contains() - jQuery선택자 필터, 선택자의 문자열
//val() - Form 안에 입력받는 창 안의 값(input)을 가져옴

/*
.text에서 키보드를 누르고나면
만약 키코드가 13이면, 즉 누른 키가 Enter키면
1. .product>li 숨김
2. input요소에 입력한 텍스트를 포함하고 있는 a태그의 부모요소인 li만 보임
*/

$('.text').keyup(function(k){
if(k.keyCode == 13) {
  $('.product>li').hide();
  $('.product>li>a').filter(':contains(' + $('.text').val() + ')').parent().show();
}
});