/**
 *  slideShow.js
 */

 $(function(){ // 정적 생성 태그 요소 준비 후 js 실행
		//이동한 이미지의 index값 저장 변수(현재 위치 이미지의 idx)
		var movedIndex=0; //첫번째 이미지의 idx
		
		//슬라이드 패널을 움직여 주는 함수
		//index값을 전달 받아서 해당 인덱스로 이동
		//이전 , 이후 버튼 전부 이 함수를 호출
		function moveSlide(index){ // 왼쪽 이동거리 : index*1280
				movedIndex = index;
				//슬라이드 이동거리 : 왼쪽(왼쪽 여백을 줄이겠다)으로 이동거리
				var moveLeft= -(1280*index)
				$('#slidePanel').animate({'left':moveLeft},'slow');
		}
		//prev 버튼 클릭하면 앞 이미지로 이동 첫번째 이미지(idx 0)라면 이동할 곳이 없으므로 idx변환 x
		$('#prevButton').on('click',function(){
				if(movedIndex!=0){ //첫번째 이미지가 아니면 (움직일 곳이 있으니까)
						movedIndex=movedIndex-1; // 인덱스 값을 1 감소
				}
				moveSlide(movedIndex);
		});
		//next 버튼 클릭하면 뒤 이미지로 이동 마지막 이미지(idx 4)라면 이동할 곳이 없으므로 idx 변환 x
		$('#nextButton').on('click',function(){ //마지막 이미지가 아니면
				if(movedIndex!=4){
						movedIndex=movedIndex+1;
				}
				moveSlide(movedIndex);
		});
		
		var randomNumber = Math.floor(Math.random() *5);
		moveSlide(randomNumber);
		//3초마다 슬라이드 자동 이동 - setInterval(실행함수,실행간격); => 실행간격만큼 반복실행
		setInterval(function(){
				//슬라이드 이동코드 idx 4의 이미지면 idx 0으로 복귀
				if(movedIndex !=4){
						movedIndex = movedIndex +1;
				}else{ // movedIndex 가 4면
						movedIndex = 0; // 처음 이미지로 이동
				}
				moveSlide(movedIndex); // 이동해야될 idx 값 전달
		},3000);
		
		
		//컨트롤 패널 내 각 컨트롤 버튼에 대해서 작성
		//컨트롤 버튼 이미지에 동일한 효과 - 배열 형태로 참조해서 각각 버튼에 개별 효과가 들어가도록 each함수
		//선택한 컨트롤 버튼 idx와 보여야 될 이미지 idx 동일
		
		$('.controlButton').each(function(index){
				// 컨트롤 버튼에 마우스 올렸을 때 이미지 변경(hover)
				$(this).hover(
					function(){ //마우스 올렸을때 이미지 변경(button2로 변경)
							$(this).attr('src','image/controlButton2.png')
					},
					function(){ //마우스 뗐을때 이미지 변경(button1로 변경)
							$(this).attr('src','image/controlButton1.png')
					}
				)
				
				//컨트롤 버튼 클릭 했을때 moveSlide() 호출
				$(this).on('click',function(){
						moveSlide(index);
				});
		});
 });
 
 
 