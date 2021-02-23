$(document).ready(function($) {   
    
    $('.home-wrap #content-wrapper').waypoint(function(direction) {
		$("#navbar").toggleClass('sticky', direction=='down');
	},{
        offset:'160px'
	});
    
    $('.home-wrap #main-wrapper').waypoint(function(direction) {
		$("#navbar").toggleClass('sticky-ani', direction=='down');
	},{
        offset:'-100px'
	});
    		
		
});

