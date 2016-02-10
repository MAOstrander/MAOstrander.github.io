	// $("#about-photo-div").toggle();
$(document).ready(function(){
	var theWindow = $(window);

	function bindScroll() {
    $("#about-photo-div").toggle($(this).scrollTop() > 400);
	}

	function checkWidth() {
    var windowsize = theWindow.width();
        if (windowsize > 550) {
        	theWindow.bind('scroll', bindScroll);
        } else {
        	theWindow.unbind('scroll');
        }
    };

    checkWidth();
    $(window).resize(checkWidth);
});
