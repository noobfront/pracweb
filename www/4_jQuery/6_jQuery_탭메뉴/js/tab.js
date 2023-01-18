//.btn 중 첫 번째 버튼만 색상 변경
$('.btn-1').addClass('check');

//.tab 중 첫 번째 tab만 보이게 설정
$('.tab-2,.tab-3').hide();

/*
.btn-1 클릭하면
1. check class 가진 요소는 check class 제거
2. 클릭한 요소에 check class 추가
3. .tab-2, .tab-3 보이지 않게 or .tab > ul > li
4. .tab-1 보이도록
*/
$('.btn-1').click(function(){
$('.check').removeClass('check');
$(this).addClass('check');
$('.tab-2,.tab-3').hide();
$('.tab-1').show();
});
// css의 선택자 우선순위는 스크립트에서는 무효

/*
.btn-2 클릭하면
1. check class 가진 요소는 check class 제거
2. 클릭한 요소에 check class 추가
3. .tab-1, .tab-3 보이지 않게 or .tab > ul > li
4. .tab-2 보이도록
*/
$('.btn-2').click(function(){
  $('.check').removeClass('check');
  $(this).addClass('check');
  $('.tab-1,.tab-3').hide();
  $('.tab-2').show();
  });


/*
.btn-3 클릭하면
1. check class 가진 요소는 check class 제거
2. 클릭한 요소에 check class 추가
3. .tab-1, .tab-2 보이지 않게 or .tab > ul > li
4. .tab-3 보이도록
*/
$('.btn-3').click(function(){
  $('.check').removeClass('check');
  $(this).addClass('check');
  $('.tab-1,.tab-2').hide();
  $('.tab-3').show();
  });