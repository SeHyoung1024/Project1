/**
 *  subMenu.js
 * 
 */

 $(function(){ //$(document).ready(function()); 의 축약 코드
		//[전체보기] 클릭했을때 모든 메뉴 항목 보이게하고 메뉴 text를 메뉴닫기로 변경
		//[메뉴닫기] 클릭했을때 subMenu 항목 안보이게 하고 메뉴 text를 전체보기로 변경
		$('#showAllMenu').on('click',function(){
				if($(this).text()=='전체보기 ▼'){
						$('#subMenuBox').css('visibility' , 'visible');
						$(this).text('메뉴닫기 ▲').css('color','blue');
				}else{
						$('#subMenuBox').css('visibility' , 'hidden');
						$(this).text('전체보기 ▼').css('color','black');
				}
		}); 
 });