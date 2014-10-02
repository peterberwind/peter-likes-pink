var commonFunctions = function () {	

	// Common Vars
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var headerHeight = $('#header').height();
	var contentHeight = $('.content').height();
	var workWidth = $('#work').width();
	var itemHeight = $('.item').height();
	var itemWidth = $('.item').width();
	var margins = 18;


	// Item Overlay Height
	$('.overlay').height(itemHeight);
	$('.overlay').width(itemWidth);

	$('.overlay').each(function() {

		dataMargin = $(this).find('.project-data').height();
		$(this).find('.project-data').css( 'margin-top', (-dataMargin/2) - (margins) );

	});


	// Canvas Size
	$('canvas').height(windowHeight).width(windowWidth);


	// Two Thirds block
	$('.thirds').height(windowHeight);
	//$('.thirds').height( (windowHeight / 3) * 2 );


	//Welcome Position
	var welcomeWidth = $('#welcome').width();
	var welcomeHeight = $('#welcome').height();
	
	$('#welcome').css({

		'margin-left' 	: -welcomeWidth/2,
		'margin-top'	: (-welcomeHeight/2) - 18

	});


	// Content Min-Height
	$('.content').css({

		'min-height' 	: windowHeight

	});


	// Data width
	$('.data').width(workWidth - margins - 9);


	// Portfolio Imgs width
	$('.portfolio-imgs').width(workWidth - margins);


	// Work & Items Size
	if( (windowWidth < 1025) && (windowWidth > 641) ) {

		var workWidth = windowWidth - (margins*2);
		var itemWidth = (workWidth/2) - (margins);

		console.log(workWidth);

		$('#work, #center-bar').width(workWidth);
		$('.item, .overlay').width(itemWidth);

	} else if ( (windowWidth < 641) ) {

		var workWidth = windowWidth - (margins*2);
		var work = $('#work').width();

		$('#work, #center-bar').width(workWidth);
		$('.item, .overlay').width(work - 18);

	}


	// Top Click
    $('.top').on('click', function() {
    	$('html, body').animate({ scrollTop: 0 }, 1200, 'easeInOutQuint');
    });


    // Images Loaded
	$('.item').imagesLoaded(function() {
		$('.item img').delay(1500).animate({opacity : 1}, 400);
	});

};


// On iPad orientation change
$(window).bind('orientationchange', function(event) {

	//alert('new orientation:' + event.orientation);

	// Common Vars
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var headerHeight = $('#header').height();
	var contentHeight = $('.content').height();
	var workWidth = $('#work').width();
	var itemHeight = $('.item').height();
	var itemWidth = $('.item').width();
	var margins = 18;


	// Item Overlay Height
	$('.overlay').height(itemHeight);
	$('.overlay').width(itemWidth);

	$('.overlay').each(function() {

		dataMargin = $(this).find('.project-data').height();
		$(this).find('.project-data').css( 'margin-top', (-dataMargin/2) - (margins) );

	});


	// Canvas Size
	$('canvas').height(windowHeight).width(windowWidth);


	// Two Thirds block
	$('.thirds').height(windowHeight);
	//$('.thirds').height( (windowHeight / 3) * 2 );


	//Welcome Position
	var welcomeWidth = $('#welcome').width();
	var welcomeHeight = $('#welcome').height();
	
	$('#welcome').css({

		'margin-left' 	: -welcomeWidth/2,
		'margin-top'	: (-welcomeHeight/2) - 18

	});


	// Content Min-Height
	$('.content').css({

		'min-height' 	: windowHeight

	});


	// Data width
	$('.data').width(workWidth - margins - 9);


	// Portfolio Imgs width
	$('.portfolio-imgs').width(workWidth - margins);


	// Work & Items Size
	if( (windowWidth < 1025) && (windowWidth > 641) ) {

		var workWidth = windowWidth - (margins*2);
		var itemWidth = (workWidth/2) - (margins);

		$('#work, #center-bar').width(workWidth);
		$('.item, .overlay').width(itemWidth);

	} else if ( (windowWidth < 641) ) {

		var workWidth = windowWidth - (margins*2);
		var work = $('#work').width();

		$('#work, #center-bar').width(workWidth);
		$('.item, .overlay').width(work - 18);

	}

});



$(document).ready(commonFunctions);
$(window).resize(commonFunctions);


$(document).ready(function() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var itemHeight = $('.item').height();
	var itemWidth = $('.item').width();
	var margins = 18;


	function afterAjax() {
		
		$('.image').imagesLoaded(function() {
			$('.image img').delay(1500).animate({opacity : 1}, 400);
		});

		$('.item').imagesLoaded(function() {
			$('.item img').delay(1500).animate({opacity : 1}, 400);
		});

		// Top Click
	    $('.top').on('click', function() {
	    	$('html, body').animate({ scrollTop: 0 }, 1200, 'easeInOutQuint');
	    });

	    // Item Overlay Height
		$('.overlay').height(itemHeight);
		$('.overlay').width(itemWidth);

		$('.overlay').each(function() {

			dataMargin = $(this).find('.project-data').height();
			$(this).find('.project-data').css( 'margin-top', (-dataMargin/2) - (margins) );

		});

		// Item Hover
		$('.item').mouseenter(function() {
			$(this).find('.overlay').stop().animate({opacity : 1}, 400);
		});

		$('.item').mouseleave(function() {
			$(this).find('.overlay').stop().animate({opacity : 0}, 400);
		});

		// Portfolio Slide Images Loaded
		$('.portfolio-slide').imagesLoaded(function() {
			$('.portfolio-slide ul li img').delay(1000).animate({opacity : 1}, 400);
		});

	}


	// AJAX|HISTORY LOAD
	function loadURL(url) {

    	$('#work').fadeOut(800, function() {
	    	$(this).empty().load(url).ajaxComplete(function() {

	    		$(this).fadeIn(800, function() {
		    		// Add class to objects
		    		afterAjax();
		    		$('.top-bar, .image').addClass('project-background-color');
		    		$('.color, .item-selected').addClass('project-color');
		    		$('html, body').css('overflow-y', 'auto');
		    	});
		    	
	    	});	
    	});

    	if( $('#menu').hasClass('active') ) {

    		$('#menu').animate({ width: 0 }, 400, 'easeInOutQuint').removeClass('active');
    		$('.content, .fixed').animate({ left: 0 }, 400, 'easeInOutQuint');

    	}

    	if( url == 'about.php' ) {

    		$('#footer').fadeOut(600);

    	} else {

    		$('#footer').fadeIn(600);

    	}

    }
    
    $.address.init(function(event) {

    	// I make the link with the event path URL
    	var linkGenerator = event.path + '.php';
    	var link = linkGenerator.replace('/', '');

    	//alert(link);
    	
    	if ( event.path == '/work' ) {

    		$('#intro').fadeOut(400, function() {
    		
	    		$('.content').animate({ opacity: 1}, 400, function() {

	    			$('canvas#p5can, #intro').remove();

	    			$('html, body').css('overflow-y', 'auto');

	    		});

    		});

    	} else if ( event.path == '/fierro-hotel' ) {
	    	
	    	$('#intro').fadeOut(400, function() {
    		
	    		$('.content').animate({ opacity: 1}, 400, function() {

	    			$('canvas#p5can, #intro').remove();

	    			// Project Color
	    			var projectColor = '#eda3b1';

	    			// Create CSS Class
			    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
					$('html > head').append(style);

	    			loadURL(link);

	    		});

    		});
    	
    	} else if ( event.path == '/arcos-dorados' ) {
	    	
	    	$('#intro').fadeOut(400, function() {
    		
	    		$('.content').animate({ opacity: 1}, 400, function() {

	    			$('canvas#p5can, #intro').remove();

	    			// Project Color
	    			var projectColor = '#aad7eb';

	    			// Create CSS Class
			    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
					$('html > head').append(style);

	    			loadURL(link);

	    		});

    		});
    	
    	} else if ( event.path == '/nicolas-trombetta' ) {
	    	
	    	$('#intro').fadeOut(400, function() {
    		
	    		$('.content').animate({ opacity: 1}, 400, function() {

	    			$('canvas#p5can, #intro').remove();

	    			// Project Color
	    			var projectColor = '#c5e3e5';

	    			// Create CSS Class
			    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
					$('html > head').append(style);

	    			loadURL(link);

	    		});

    		});
    	
    	} else if ( event.path == '/la-morada-de-los-andes' ) {
	    	
	    	$('#intro').fadeOut(400, function() {
    		
	    		$('.content').animate({ opacity: 1}, 400, function() {

	    			$('canvas#p5can, #intro').remove();

	    			// Project Color
	    			var projectColor = '#e9c2a3';

	    			// Create CSS Class
			    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
					$('html > head').append(style);

	    			loadURL(link);

	    		});

    		});
    	
    	} else if ( event.path == '/time-to-color' ) {
	    	
	    	$('#intro').fadeOut(400, function() {
    		
	    		$('.content').animate({ opacity: 1}, 400, function() {

	    			$('canvas#p5can, #intro').remove();

	    			// Project Color
	    			var projectColor = '#a1dcc0';

	    			// Create CSS Class
			    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
					$('html > head').append(style);

	    			loadURL(link);

	    		});

    		});
    	
    	} else if ( event.path == '/tienda-ludus' ) {
	    	
	    	$('#intro').fadeOut(400, function() {
    		
	    		$('.content').animate({ opacity: 1}, 400, function() {

	    			$('canvas#p5can, #intro').remove();

	    			// Project Color
	    			var projectColor = '#cce3b1';

	    			// Create CSS Class
			    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
					$('html > head').append(style);

	    			loadURL(link);

	    		});

    		});
    	
    	}
    	
	}).change(function(event) {
		
    	$('.item a, ul.submenu li a, #about a').click(function(){

	    	// Grab Work's color
	    	var projectColor = $(this).data('color');

	    	// Create CSS Class
	    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
			$('html > head').append(style);

			// Load Work
	    	loadURL($(this).attr('href'));

    	});

	}).externalChange(function(event) {

		// I make the link with the event path URL
    	var linkGenerator = event.path + '.php';
    	var link = linkGenerator.replace('/', '');

    	// If the path is not home or work then load project
    	if ( (event.path != '/') && (event.path != '/work') ) {

    		// If Browser's back-button
    		if ( (event.path == '/nicolas-trombetta') ) {

				// Project Color
				var projectColor = '#c5e3e5';

				// Create CSS Class
		    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
				$('html > head').append(style);

				loadURL(link);

	    	} else if ( (event.path == '/fierro-hotel') ) {

				// Project Color
    			var projectColor = '#eda3b1';

    			// Create CSS Class
		    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
				$('html > head').append(style);

    			loadURL(link);

	    	} else if ( (event.path == '/arcos-dorados') ) {

				// Project Color
    			var projectColor = '#aad7eb';

    			// Create CSS Class
		    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
				$('html > head').append(style);

    			loadURL(link);

	    	} else if ( (event.path == '/tienda-ludus') ) {

				// Project Color
    			var projectColor = '#cce3b1';

    			// Create CSS Class
		    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
				$('html > head').append(style);

    			loadURL(link);

	    	} else if ( (event.path == '/time-to-color') ) {

				// Project Color
    			var projectColor = '#a1dcc0';

    			// Create CSS Class
		    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
				$('html > head').append(style);

    			loadURL(link);

	    	} else if ( (event.path == '/la-morada-de-los-andes') ) {

				// Project Color
    			var projectColor = '#e9c2a3';

    			// Create CSS Class
		    	var style = $('<style>.portfolio-slide ul li{background-color: '+projectColor+' !important;} .top:hover, a:hover{color:'+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-color {color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;} .project-background-color {background-color: '+projectColor+' !important; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -ms-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}</style>')
				$('html > head').append(style);

    			loadURL(link);

	    	} else {

	    		$('#intro').fadeOut(400, function() {
		    		
		    		$('.content').animate({ opacity: 1}, 400, function() {

		    			$('canvas#p5can, #intro').remove();

		    			loadURL(link);

		    		});

		    	});

		    }	

		}   

		if ( (event.path == '/work') ) {

			/*
			window.location.href = 'http://manuelsofia.com/test/work';
			*/
    	} 

	}).internalChange(function(event) {


	});


    // Back to Top Click
    $('.top').on('click', function() {
    	$('html, body').animate({ scrollTop: 0 }, 1200, 'easeInOutQuint');
    });


    // Menu Show & Hide
    $('#menu-ico').on('click', function() {

    	if( $('#menu').hasClass('active') ) {

    		$('#menu').animate({ width: 0 }, 400, 'easeInOutQuint').removeClass('active');
    		$('.content, .fixed').animate({ left: 0 }, 400, 'easeInOutQuint');

    	} else {

    		if(windowWidth < 641) {

    			$('#menu').animate({ width: 246 }, 400, 'easeInOutQuint').addClass('active');
    			$('.content, .fixed').animate({ left: 246 }, 400, 'easeInOutQuint');
    		
    		} else {

    			$('#menu').animate({ width: 286 }, 400, 'easeInOutQuint').addClass('active');
    			$('.content, .fixed').animate({ left: 286 }, 400, 'easeInOutQuint');

    		}

    	}

    });


    //Intro
    $('#welcome').on('click', function() {

    	$('#intro').fadeOut(400, function() {
    		
    		$('.content').animate({ opacity: 1}, 400, function() {

    			$('canvas#p5can, #intro').remove();

    			$('html, body').css('overflow-y', 'auto');

    		});

    	});

    });


    // Menu Item Click
	$('#work-menu.menu-item').on('click', function() {

		// Open or Close Submenu
		$(this).next('ul.submenu').slideToggle(400, 'easeInOutQuint');
		
		// If Menu was open remove selected color
		if( $(this).hasClass('item-selected') ) {

			$(this).removeClass('item-selected');
			$(this).removeClass('project-color');

		} else {

			$(this).addClass('item-selected');
			$(this).addClass('project-color');

		}

	});


	// If mobile avoid hover effect on items
	function isAppleDevice(){
	    return (
	        (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
	        (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
	        (navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
	    );
	}


	var result = isAppleDevice();
	

	// If it is not mobile
	if(result == false) {

		// Item Hover
		$('.item').mouseenter(function() {
			$(this).find('.overlay').stop().animate({opacity : 1}, 400);
		});

		$('.item').mouseleave(function() {
			$(this).find('.overlay').stop().animate({opacity : 0}, 400);
		});

	} else {

		// Item Hover
		$('.item').on('tap', function() {
			$(this).find('.overlay').stop().animate({opacity : 1}, 400);
		});

	}
	 		

});


$(window).load(function() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var itemHeight = $('.item').height();
	var itemWidth = $('.item').width();
	var margins = 18;

	// Item Overlay Height
	$('.overlay').height(itemHeight);
	$('.overlay').width(itemWidth);

	$('.overlay').each(function() {

		dataMargin = $(this).find('.project-data').height();
		$(this).find('.project-data').css( 'margin-top', (-dataMargin/2) - (margins) );

	});

	// Work & Items Size
	var margins = 18;

	if( (windowWidth < 1025) && (windowWidth > 641) ) {

		var workWidth = windowWidth - (margins*2);
		var itemWidth = (workWidth/2) - (margins);

		$('#work, #center-bar').width(workWidth);
		$('.item, .overlay').width(itemWidth);

	} else if ( (windowWidth < 641) ) {

		var workWidth = windowWidth - (margins*2);
		var work = $('#work').width();

		$('#work, #center-bar').width(workWidth);
		$('.item, .overlay').width(work - 18);

	}

	$('#intro').delay(600).animate({ opacity: 1 }, 600);

});