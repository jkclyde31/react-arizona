$(function() {
	var pull = $('#pull');
	menu = $('nav ul');
	menuHeight = menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
		console.log("respo button pressed")

	});
	$(window).resize(function() {
		if($(window).width() > 2000) $('nav ul').removeAttr('style');
	});

});