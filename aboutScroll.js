	// $("#about-photo-div").toggle();
$(document).ready(function(){
	var theWindow = $(window);

	function bindScroll() {
    $("#about-photo-div").toggle($(this).scrollTop() > 350);
	}

	function checkWidth() {
    var windowsize = theWindow.width();
        if (windowsize > 985) {
        	theWindow.bind('scroll', bindScroll);
        } else {
        	theWindow.unbind('scroll');
        }
    };

    checkWidth();
    $(window).resize(checkWidth);
});
