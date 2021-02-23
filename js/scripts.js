function menuopen(){
	if($('body').hasClass('menu-open')){
        $('body').addClass('menu-ani');
        setTimeout(function() {
            $('body').removeClass('menu-ani');
            $('body').removeClass('menu-open');
        }, 300);
	}
	else{
		$('body').addClass('menu-open');
	}
};
function menuclose(){
	if($('body').hasClass('menu-open')){
		$('body').removeClass('menu-open');
	}
};

$(document).ready(function($) {

	var md = window.md;

	$('.nav-trigger').click(function () {
		menuopen();
		return false;
	});

	$('#bg-wrapper').click(function () {
		menuopen();
	});


	if(!md.is(md.mobile())){

	} else {

        $('.footer-menu .footer-menu-trigger').click(function () {
            $(this).parent().toggleClass('footer-menu-open');
            $(this).parent().find('.footer-menu-list').stop().slideToggle(300);
            return false;
        });


	}
	
	$('.n-link-1').click(function () {	
		menuclose();
		var elem = $('#content-video')[0];		
		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#content-video").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-2').click(function () {	
		menuclose();
		var elem = $('#content-1')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#content-1").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-3').click(function () {		
		menuclose();
		var elem = $('#content-2')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#content-2").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-4').click(function () {	
		menuclose();
		var elem = $('#content-3')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#content-3").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-5').click(function () {		
		menuclose();
		var elem = $('#content-team')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#content-team").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-6').click(function () {	
		menuclose();
		var elem = $('#content-legal')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#content-legal").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	
	
	
	
	if(!md.is(md.mobile())){
		$('#content-1').waypoint(function(direction) {
			$("#content-1").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-1').waypoint(function(direction) {
			$("#content-1").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	
	if(!md.is(md.mobile())){
		$('#content-3').waypoint(function(direction) {
			$("#content-3").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-3').waypoint(function(direction) {
			$("#content-3").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	if(!md.is(md.mobile())){
		$('#content-4').waypoint(function(direction) {
			$("#content-4").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-4').waypoint(function(direction) {
			$("#content-4").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	if(!md.is(md.mobile())){
		$('#content-5').waypoint(function(direction) {
			$("#content-5").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-5').waypoint(function(direction) {
			$("#content-5").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	if(!md.is(md.mobile())){
		$('#content-team').waypoint(function(direction) {
			$("#content-team").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-team').waypoint(function(direction) {
			$("#content-team").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	if(!md.is(md.mobile())){
		$('#content-banner-icons').waypoint(function(direction) {
			$("#content-banner-icons").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-banner-icons').waypoint(function(direction) {
			$("#content-banner-icons").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	
	$('#text-toggle').click(function () {
		$(this).parent().toggleClass('text-open');
		return false;
	});	
	
    var options = [
        {
        selector: '#banner-wrapper .container',
        vh: 100
        }
    ];

    var vhFix = new VHChromeFix(options);
	

});
