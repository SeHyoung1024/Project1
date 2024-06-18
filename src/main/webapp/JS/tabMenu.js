/**
 * 
 */

 $(function(){
		var $tabContent = $('#tabContent div'); 
		
		// 첫번째 메뉴 항목 선택되어 있게
		// 동적으로 css 적용 : 동적 style 추가하지 않고 css 파일에 정적으로 스타일 만들어놓음
		//동적으로 클래스 속성을 태그해 추가하는 방법
		$('#tab li:first-child').addClass('selectedItem');
		// 탭 메뉴 항목 클릭하면 탭 메뉴 항목의 인덱스를 알아와서
		$('#tab li').on('click',function(){
				//클릭한 탭 메뉴 항목의 idx 알아오기
				var idx = $(this).index();
				// 항목 idx에 맞는 이미지로 변경
				
				//기존 탭 메뉴 항목에 반영된 css가 있다면 제거
				//동적으로 클래스를 제거
				$('#tab li').removeClass('selectedItem');
				//클릭한 항목에만 css가 설정된 클래스 추가
				$(this).addClass('selectedItem');
				
				//content의 모든 div 숨기고
				$tabContent.css('display','none');
				//항목 idx의 이미지 컨텐츠만 보이게
				$tabContent.eq(idx).css('display','block');
		});
		
 });