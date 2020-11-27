// main.js

// gnb
$(function(){
    $('#gnb .depth1 > li').hover(
        function(){
            $('.bg').stop().slideDown(400);
            $('.depth2').stop().slideDown(400);
        },
        function(){
            $('.bg').stop().slideUp(400);
            $('.depth2').stop().slideUp(400);
        }
    )
})

// main_visual swiper
new Swiper( '.swiper-container', {

	effect : 'fade',

    loop : true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
	pagination : {
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션 설정
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});
$(function(){
    new Swiper( '.swiper-container', {
        effect : 'fade',
        loop : true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination : {
            el : '.swiper-pagination',
            clickable : true,
        },
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        }
    });
  })