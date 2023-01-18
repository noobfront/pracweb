// 변수 설정 (버튼/전체영역)
var btn = document.getElementById('button');
var all = document.getElementById('wrap');

// 함수 설정
// 모든 요소의(all) css속성 중 color속성의 속성값을 각각 red/gray/blue로 설정
function red() {
  all.style.color = 'red';
};

function gray() {
  all.style.color = 'gray';
};

function blue() {
  all.style.color = 'blue';
};

// 이벤트(마우스 오버 / 클릭 / 마우스 아웃) 지정
// 변수의(btn) (마우스 오버 / 클릭 / 마우스 아웃) 이벤트가 생기면 각각 함수 red() / gray() / blue() 를 실행 - 오버 클릭 아웃 순

btn.addEventListener('mouseover', red);
btn.addEventListener('click', gray);
btn.addEventListener('mouseout', blue);