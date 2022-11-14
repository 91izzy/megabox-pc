// 사이트맵 열기/닫기
//	$('#header .header_icon_left .menu_sitemap').on('click', function(e) {
//		e.preventDefault();
//		$('#layer_header_sitemap').removeClass('on');
//		$('#layer_header_sitemap').toggleClass('on');
//		$('#layer_header_sitemap').toggleClass('on');
//	});
//
//	document.querySelector('#header .header_icon_left .menu_sitemap').addEventListener('click', function() {
//		document.querySelector('.header_icon_left .menu_sitemap').classList.toggle('on');
//	});

	
	// 사이트맵 열기/닫기
	$('#header .header_icon_left .menu_sitemap').on('click', function() {
		$('#layer_header_sitemap').toggleClass('on');
	});

	document.querySelector('#header .header_icon_left .menu_sitemap').addEventListener('click', function() {
		document.querySelector('.header_icon_left .menu_sitemap').classList.toggle('on');
	});
	

// 검색창 열기/닫기
	$('#header .header_icon_left .menu_search').on('click', function(e) {
		e.preventDefault();
		$('#layer_header_search').toggleClass('on');
	});

	document.querySelector('#header .header_icon_left .menu_search').addEventListener('click', function() {
		document.querySelector('.header_icon_left .menu_search').classList.toggle('on');
	}, false);

// 검색창 호버효과
	$('.rank-cont .cont ol.tit li a').on('mouseenter', function() {
		let index = $('.rank-cont .cont ol.tit li').index($(this).parent());
		$('.rank-cont .cont ol.poster li, .rank-cont .cont ol.tit li').removeClass('on');
		$('.rank-cont .cont ol.poster li:eq('+index+'), .rank-cont .cont ol.tit li:eq('+index+')').addClass('on');
	});
	

	// 로그인 열기/닫기
	$('#header .header_icon_right .menu_mypage').on('click', function(e) {
		e.preventDefault();
		$('#layer_header_mypage').toggleClass('on');
	});

	document.querySelector('#header .header_icon_right .menu_mypage').addEventListener('click', function() {
		document.querySelector('.header_icon_right .menu_mypage').classList.toggle('on');
	});
	

	// 푸터 극장찾기 열기
	$('#footer .footer-top .looking_theater').on('click', function(e) {
		e.preventDefault();
		$('#layer_footer_looking_theater').toggleClass('on');
	});

	document.querySelector('#layer_footer_looking_theater a.close').addEventListener('click', function() {
		document.querySelector('#layer_footer_looking_theater').classList.remove('on');
	});
	


/*
// 헤더 서브메뉴 열기
$('#header nav.gnb > ul.gnb-left > li a').on('mouseenter', function() {
  $('#header').removeClass('open');
  $('#header').addClass('open');
  $('#header nav.gnb > ul.gnb-left > li').removeClass('open');
  $(this).parent().addClass('open');
});
  
$('#header nav.gnb > ul.gnb-right > li a').on('mouseenter', function() {
  $('#header').removeClass('open');
  $('#header').addClass('open');
  $('#header nav.gnb > ul.gnb-right > li').removeClass('open');
  $(this).parent().addClass('open');
});
*/
 
	
// 헤더 서브메뉴 열기
 $('#header nav.gnb > ul > li > a').on('mouseenter', function() {
  $('#header').addClass('open');
  $('#header nav.gnb > ul > li').removeClass('open');
  $(this).parent('li').addClass('open');
});  
  
// 헤더 서브메뉴 닫기
$('#header').on('mouseleave', function() {
  $('#header').removeClass('open');
  $('#header nav.gnb > ul > li').removeClass('open');
});


// 검색창 탭메뉴	
	const tabBtn = document.querySelectorAll('.search-tab ul li');
	const contents = document.querySelectorAll('.rank-cont .cont');
	let activeCont = ''; // 현재 활성화 된 컨텐츠
	
	for(let i = 0; i < tabBtn.length; i++) {
		tabBtn[i].querySelector('.search_tab_btn').addEventListener('click', function(e) {
			e.preventDefault();
			
			for(let j = 0; j < tabBtn.length; j++) {
				tabBtn[j].classList.remove('on'); // 나머지 버튼 클래스 제거
				contents[j].style.display = 'none'; // 나머지 컨텐츠 안보이게
			}
			// 버튼 이벤트
			this.parentNode.classList.add('on');
			
			// 버튼 클릭시 컨텐츠 전환
			activeCont = this.getAttribute('href');
			document.querySelector(activeCont).style.display = 'block';
		});
	}
	
	
