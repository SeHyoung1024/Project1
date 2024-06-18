/**
 * 
 */

 document.addEventListener('DOMContentLoaded', function() {
	    // 이동한 이미지의 index값 저장 변수(현재 위치 이미지의 idx)
	    let movedIndex = 0; // 첫번째 이미지의 idx 

	    // 슬라이드 패널을 움직여 주는 함수
	    // index값을 전달 받아서 해당 인덱스로 이동
	    // 이전, 이후 버튼 전부 이 함수를 호출
	    function moveSlide(index) {
	        movedIndex = index;
	        // 슬라이드 이동거리 : 왼쪽(왼쪽 여백을 줄이겠다)으로 이동거리
	        const moveLeft = -(1280 * index); 
	        const slidePanel = document.getElementById('slidePanel');
	        slidePanel.style.transition = 'left 0.5s ease-in-out';
	        slidePanel.style.left = moveLeft + 'px';
	    }

	    // prev 버튼 클릭하면 앞 이미지로 이동 첫번째 이미지(idx 0)라면 이동할 곳이 없으므로 idx변환 x
	    const prevButton = document.getElementById('prevButton');
	    prevButton.addEventListener('click', function() {
	        if (movedIndex != 0) { // 첫번째 이미지가 아니면 (움직일 곳이 있으니까)
	            movedIndex = movedIndex - 1; // 인덱스 값을 1 감소
	        }
	        moveSlide(movedIndex);
	    });

	    // next 버튼 클릭하면 뒤 이미지로 이동 마지막 이미지(idx 4)라면 이동할 곳이 없으므로 idx 변환 x
	    const nextButton = document.getElementById('nextButton');
	    nextButton.addEventListener('click', function() {
	        if (movedIndex != 4) {
	            movedIndex = movedIndex + 1;
	        }
	        moveSlide(movedIndex);
	    });
	    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', function() {
        if (movedIndex != 4) {
            movedIndex = movedIndex + 1;
        }
        moveSlide(movedIndex);
    });

    let randomNumber = Math.floor(Math.random() * 5);
    moveSlide(randomNumber);
    
    setInterval(function(){
				//슬라이드 이동코드 idx 4의 이미지면 idx 0으로 복귀
				if(movedIndex !=4){
						movedIndex = movedIndex +1;
				}else{ // movedIndex 가 4면
						movedIndex = 0; // 처음 이미지로 이동
				}
				moveSlide(movedIndex); // 이동해야될 idx 값 전달
		},3000);

    const controlButton = document.querySelectorAll('.controlButton');
    controlButton.forEach(function(button, index) {
        // 마우스 올렸을 때 이미지 변경 (hover)
        button.addEventListener('mouseover', function() {
            this.src = 'image/controlButton2.png';
        });

        // 마우스 뗐을 때 이미지 변경 (hover)
        button.addEventListener('mouseout', function() {
            this.src = 'image/controlButton1.png';
        });

        // 버튼 클릭 시 moveSlide() 호출
        button.addEventListener('click', function() {
            moveSlide(index);
        });
    });
});

	/*document.querySelectorAll('.controlButton').
	controlButton.forEach(function(button, index) {
    // 마우스 올렸을 때 이미지 변경 (hover)
   		 button.addEventListener('mouseover', function() {
     	  	 this.src = 'image/controlButton2.png';
   		 });

    // 마우스 뗐을 때 이미지 변경 (hover)
   		 button.addEventListener('mouseout', function() {
     		   this.src = 'image/controlButton1.png';
  		  });

    // 버튼 클릭 시 moveSlide() 호출
   		 button.addEventListener('click', function() {
      		  moveSlide(index);
   		 });
	});
});*/