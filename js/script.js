

$(document).ready(function() {
	(function($){
		$(window).on("load",function(){
		    $("#main_menu a,a[rel='m_PageScroll2id']").mPageScroll2id({
						highlightSelector:"#main_menu a"
					});
		    $("a[rel='m_PageScroll2id']").mPageScroll2id({scrollSpeed: 900});
		});
	})(jQuery);
	
	
	$('.karusel_advantages').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
		  {
		    breakpoint: 1750,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 1400,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	$('.sertificates_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
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
		//autoplay: true,
		//autoplaySpeed: 2000,
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
		//autoplay: true,
		//autoplaySpeed: 1500,
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
		//autoplay: true,
		//autoplaySpeed: 2500,
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
	
	
	
	
	

});