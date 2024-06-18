/**
 * 
 */

 $(function(){
		// 윈도우에 스크롤 시 메인 메뉴 고정
		$(window).on('scroll',function(){
				//스크롤 바가 #headerBox를 지나면 
				if($(document).scrollTop() >= $('#headerBox').height()){
						//고정 & 그림자 표시
						$('#mainMenuBox').addClass('mainMenuFixed mainMenuShadow');
				}else{ //headerBox 보이면
						//메인메뉴 제자리 & 그림자 제거
						$('#mainMenuBox').removeClass('mainMenuFixed mainMenuShadow');
				}
				
		});
		
		//moveToTop 이미지 클릭시 스크롤바를 top으로 이동 (scrollTop=0;)
		$('#moveToTop').on('click',function(){
				$('html,body').animate({scrollTop:0},500)
		});
 });