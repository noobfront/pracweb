//eq ()는 jQuery 선택자(Element Queue) -p.212 (자세한 내용은 슬라이드에서)
//eq(n) 은 형제요소 중 n번쨰, 순서를 지정, 0부터
//index() 는 순번, 순서를 검색, 0부터

//.btn>li 중 첫번째 li에만 check class 추가
$('.btn>li').eq(0).addClass('check');

//.tab>ul>li 중 첫번째 li만 보이도록
$('.tab>ul>li').hide();
$('.tab>ul>li').eq(0).show();
/*
$('.tab>ul>li').hide().eq(0).show(); - 주어(객체) 같으므로 1줄 축약 가능
*/

/* 
.btn > li 클릭하면
1. 클릭한 li의 순번을 변수(num)에 넣음
2. .btn > li 에 check class 제거, 클릭한 순번의 li에만 check class 추가
3. .tab > ul > li 를 보이지 않게, num에 해당하는 순번의 li만 보이도록
*/
$('.btn>li').click(function () {
  var num = $(this).index();
  $('.btn>li').removeClass('check').eq(num).addClass('check');
  $('.tab>ul>li').hide().eq(num).show('check');
});

/*
$('.btn>li').removeClass('check').eq(num).addClass('check');
*/