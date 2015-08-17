
(function($) {
    "use strict"; // Start of use strict

   

    $(function () {
        $('#ordDateTime').datetimepicker({ keepOpen: false, widgetPositioning: { vertical: 'bottom'} });
    });


    $(".carousel-inner").css("min-height", ( ($(window).height()+20) - $("#mainNav").height())+"px");

    $(".holla-header").css("border-left-width", $(window).width());

    $(window).resize(function () {
        $(".holla-header").css("border-left-width", $(window).width());
        new WOW().init();
    });

   
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    /*$("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );*/

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // closing
    $(document).on("click", "a.open-white-board", function (e) {
        e.preventDefault();
        $(this).addClass("hide").removeClass("show");
        $(".users-names, a.close-white-board").addClass("show").removeClass("hide");
        $(".white-area").addClass("open");
    });

    // closing
    $(document).on("click", "a.close-white-board", function (e) {
        e.preventDefault();
        $(this).addClass("hide").removeClass("show");
        $("a.open-white-board").addClass("show");
        $(".users-names").addClass("hide").removeClass("show");
        $(".white-area").removeClass("open");
    });

    $(".btn-portfolio").click(function (e) {
        e.preventDefault();
        $("section#what-we-do").toggleClass("show hide");
        $("section#portfolio").toggleClass("hide show");

        $('html, body').stop().animate({
            scrollTop: ($("section#portfolio").offset().top - $("#mainNav").height())
        }, 1250, 'easeInOutExpo');
    });

    $(".btn-back").click(function (e) {
        e.preventDefault();
        $("section#what-we-do").toggleClass("hide show");
        $("section#portfolio").toggleClass("show hide");

        $('html, body').stop().animate({
            scrollTop: ($("section#what-we-do").offset().top - $("#mainNav").height())
        }, 1250, 'easeInOutExpo');

    });

    $(".btn-proceed").click(function (e) {
        e.preventDefault();
        $("section#portfolio").toggleClass("hide show");
        $("section#order-form").toggleClass("hide show");

        $('html, body').stop().animate({
            scrollTop: ($("section#order-form").offset().top - $("#mainNav").height())
        }, 1250, 'easeInOutExpo');
    });

    //cart
    $(".btn-proceed-collection").click(function (e) {
        e.preventDefault();
        $("section#portfolio").toggleClass("show hide");
        $("section#order-form").toggleClass("hide show");

        $(".cart").html("");
        $("#cart").val("");
        var _wishList = "";
        $("section#portfolio input[type='checkbox']:checked").parent().parent().parent().parent().find("h3 span.car-name").each(function (_index, _ele) {
            _wishList += ',"'+ $(_ele).text() +'"'; 
        });
        _wishList = _wishList.substring(1);
        $(".cart").html(_wishList);
        $("#cart").val(_wishList);

        $('html, body').stop().animate({
            scrollTop: ($("section#order-form").offset().top - $("#mainNav").height())
        }, 1250, 'easeInOutExpo');
    });
	
	$(".btn-proceed-order").click(function(e) {
        e.preventDefault();
		$("section#what-we-do").toggleClass("show hide");
        $("section#order-form").toggleClass("hide show");

        $(".cart").html("");
        $("#cart").val("");
		
		$('html, body').stop().animate({
            scrollTop: ($("section#order-form").offset().top - $("#mainNav").height())
        }, 1250, 'easeInOutExpo');
	});
	
	$(".btn-back-2-what-we-do").click(function (e) {
        e.preventDefault();
        $("section#what-we-do").toggleClass("hide show");
        $("section#order-form").toggleClass("show hide");

        $('html, body').stop().animate({
            scrollTop: ($("section#what-we-do").offset().top - $("#mainNav").height())
        }, 1250, 'easeInOutExpo');

    });
	
	$(window).load(function(){
		$("#preloader").fadeOut();
	});

})(jQuery); // End of use strict
