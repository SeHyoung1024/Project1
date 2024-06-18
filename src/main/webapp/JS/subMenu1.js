/**
 * 
 */

 window.onload =function() {
		 var showAllMenu = document.getElementById('showAllMenu');
		 var subMenuBox = document.getElementById('subMenuBox');

	  showAllMenu.addEventListener('click', function() {
		     if(showAllMenu.textContent === '전체보기 ▼') {
		         subMenuBox.style.visibility = 'visible';
		         showAllMenu.textContent = '메뉴닫기 ▲';
		         showAllMenu.style.color = 'blue';
		     }else{
		         subMenuBox.style.visibility = 'hidden';
		         showAllMenu.textContent = '전체보기 ▼';
		         showAllMenu.style.color = 'black';
		     }
	 });
};