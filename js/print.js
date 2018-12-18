$(document).ready(function() {
	$('#footer').parent().after('<a id="print" onclick="window.print();"><span> Print this page</span></a><a id="scroll" href="#top"><span> Go back to the top</span></a>');
	$("a[href^='http'],a.external").attr('target', '_blank');
	$('#header .container').prepend($('h2'));
	$('#header').before($('#map'));
	var flash = $('#flashMessage');
	if (flash.length > 0) {
		// window.location = "#flashMessage";
		$('html, body').animate({
			scrollTop: flash.offset().top
		}, 'slow');
	}
});
