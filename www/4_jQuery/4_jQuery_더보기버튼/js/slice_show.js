//45개 li 중 15번 다음부터 숨김
$('.contents>li').slice(15).hide();

/* 
.more 클릭하면
1. 보이지 않는 li 중 15개를 더 보이도록
2. 만약 보이지 않는 li가 없으면 (length가 0과 같으면) .more 숨김
 */
$('.more').click(function () {
    $('.contents>li:hidden').slice(0, 15).show();
    if ($('.contents>li:hidden').length == 0) {
        $('.more').hide();
    };
});
//length는 주체의 길이($('.contents>li:hidden'))에 대한 정보
//갯수가 0인 것과 길이가 0인 것은 같은 의미