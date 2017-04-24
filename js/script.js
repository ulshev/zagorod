

$(document).ready(function() {
	(function($){
		$(window).on("load",function(){
		    $("#main_menu a,a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"#main_menu a"
		    });
		    $("a[rel='m_PageScroll2id']").mPageScroll2id({scrollSpeed: 900});
		});
	})(jQuery);
	
	
	$('.sertificates_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		  {
		    breakpoint: 1600,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 1300,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 450,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	$('.reviews_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 2,
		slidesToScroll: 2,
		//fade: true,
		//adaptiveHeight: true,
		draggable: false,
		vertical: true,
		verticalSwiping: true,
		responsive: [
		  {
		    breakpoint: 1100,
		    settings: {
		      draggable: true,
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      vertical: false,
		      verticalSwiping: false,
		      fade: true,
		    }
		  }
		]
	});
	
	$('.slider_action').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		//fade: true,
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
	});
	
	
	$('.slider').slick({
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
	});
	
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.slider-container:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	
	$(window).on('load resize', function(){
		if ( window.innerWidth>800 && $('#catalog .tabs_container .slider-container').hasClass('slick-initialized') ) {
		  $('#catalog .tabs_container .slider-container').slick('unslick');
		} else if ( window.innerWidth<=800 && !$('#catalog .tabs_container .slider-container').hasClass('slick-initialized') ) {
		  $('#catalog .tabs_container .slider-container').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 1,
		    responsive: [{
		      breakpoint: 590,
		      settings: { 
			slidesToShow: 1,
			adaptiveHeight: true
		      }
		    }]
		  });
		}
		
		 
		if ( window.innerWidth>800 && $('#turnkey_work  .turnkey_work_stages').hasClass('slick-initialized') ) {
		  $('#turnkey_work  .turnkey_work_stages').slick('unslick');
		} else if ( window.innerWidth<=800 && !$('#turnkey_work  .turnkey_work_stages').hasClass('slick-initialized') ) {
		  $('#turnkey_work  .turnkey_work_stages').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    //fade: true,
		    speed: 1500,
		    slidesToShow: 2,
		    responsive: [{
		      breakpoint: 590,
		      settings: { 
			slidesToShow: 1,
			adaptiveHeight: true
		      }
		    }]
		  });
		}
		
		if ( window.innerWidth>591 && $('#about .about_container').hasClass('slick-initialized') ) {
		  $('#about .about_container').slick('unslick');
		} else if ( window.innerWidth<=591 && !$('#about .about_container').hasClass('slick-initialized') ) {
		  $('#about .about_container').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    fade: true,
		    speed: 1500,
		    slidesToShow: 1,
		    responsive: [{
		      breakpoint: 590,
		      settings: { 
			slidesToShow: 1,
			adaptiveHeight: true
		      }
		    }]
		  });
		}
		
		if ( window.innerWidth>1300 && $('#other_jobs .other_jobs_slider').hasClass('slick-initialized') ) {
		  $('#other_jobs .other_jobs_slider').slick('unslick');
		} else if ( window.innerWidth<=1300 && !$('#other_jobs .other_jobs_slider').hasClass('slick-initialized') ) {
		  $('#other_jobs .other_jobs_slider').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    //fade: true,
		    speed: 1500,
		    slidesToShow: 3,
		    responsive: [
		     {
		      breakpoint: 1000,
		      settings: { 
			slidesToShow: 2,
			adaptiveHeight: true
		      }
		     },
		     {
		      breakpoint: 610,
		      settings: { 
			slidesToShow: 1,
			adaptiveHeight: true
		      }
		     },
		    ]
		  });
		}
	});

	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	
	/*jQuery(document).ready(function() {
		jQuery('.post').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
		});
	});*/
	
	var mainBodyScroll = function(event){
		
		var windowHeight = $(window).height();
		var loadingElements = {
			"#advantages": {
				position: 0,
				loaded: false,
				interval: 300,
			},
			"#advantages .adv_tree_left_items .adv_tree_item:nth-child(1)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_left_items .adv_tree_item:nth-child(2)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_left_items .adv_tree_item:nth-child(3)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_left_items .adv_tree_item:nth-child(4)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_left_items .adv_tree_item:nth-child(5)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_right_items .adv_tree_item:nth-child(1)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_right_items .adv_tree_item:nth-child(2)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_right_items .adv_tree_item:nth-child(3)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_right_items .adv_tree_item:nth-child(4)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#advantages .adv_tree_right_items .adv_tree_item:nth-child(5)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			
			"#equipment .h1": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#equipment .text": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#equipment .equ_main_block": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#equipment #qualities": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#catalog": {
				position: 0,
				loaded: false,
				interval: 300,
			},
			"#action": {
				position: 0,
				loaded: false,
				interval: 300,
			},
			"#working": {
				position: 0,
				loaded: false,
				interval: 300,
			},
			"#turnkey_work": {
				position: 0,
				loaded: false,
				interval: 400,
			},
			"#standards": {
				position: 0,
				loaded: false,
				interval: 400,
			},
			"#sertificates": {
				position: 0,
				loaded: false,
				interval: 200,
			},
			"#about .h1": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#about .about_item:nth-child(1)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#about .about_item:nth-child(2)": {
				position: 0,
				loaded: false,
				interval: 200,
			},
			"#about .about_item:nth-child(3)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#about .about_item:nth-child(4)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#other_jobs": {
				position: 0,
				loaded: false,
				interval: 300,
			},
			"#reviews": {
				position: 0,
				loaded: false,
				interval: 400,
			},
			"#contacts": {
				position: 0,
				loaded: false,
				interval: 300,
			},
		};
		
		$.each(loadingElements, function(id, nextElement){
			var $nextElement = $(id);
			loadingElements[id].position = $nextElement.offset().top - windowHeight;
		});

		if($(window).scrollTop() > 0){
			$.each(loadingElements, function(id, nextElement){
			  if($(window).scrollTop() > loadingElements[id].position + loadingElements[id].interval){
			    $(id).addClass("animated");
			  }
			});
		}

	};
	
	$(window).on("load scroll", mainBodyScroll);
	
	/*$(window).on('load scroll', function(e) {
		console.log($(window).scrollTop());
		console.log($('.main_section').offset().top - 500);
		console.log('***********************************************');
		if($('.main_section').length && $(window).scrollTop() >= $('.main_section').offset().top - 500){
		  $('.main_section').addClass('animated');
		}
	});*/

});