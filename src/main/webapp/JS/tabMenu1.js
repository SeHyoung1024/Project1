/**
 * 
 */

window.onload = function(){
    // 페이지 로드 완료 후 실행할 내용
    
    var tabContentDivs = document.querySelectorAll('#tabContent div');
    var tabItems = document.querySelectorAll('#tab li');
    
    // 첫 번째 탭 메뉴 항목에 선택 클래스 추가
    tabItems[0].classList.add('selectedItem');
    
    // 탭 메뉴 항목 클릭 이벤트 처리
    tabItems.forEach(function(tabItem, idx) {
        tabItem.addEventListener('click', function() {
            // 모든 탭 메뉴 항목에서 선택 클래스 제거
            tabItems.forEach(function(item) {
                item.classList.remove('selectedItem');
            });
            
            // 클릭한 탭 메뉴 항목에 선택 클래스 추가
            tabItem.classList.add('selectedItem');
            
            // 모든 탭 콘텐츠 숨기기
            tabContentDivs.forEach(function(contentDiv) {
                contentDiv.style.display = 'none';
            });
            
            // 클릭한 탭 메뉴 항목에 해당하는 콘텐츠 보이기
            tabContentDivs[idx].style.display = 'block';
        });
    });
};
		