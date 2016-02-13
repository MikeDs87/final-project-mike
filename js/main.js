
// function who control the selector button in portfolio
/*$(document).ready(function() {

	jQuery(':button').click(function () {

	    if ($(this).hasClass("all-button")) {

	       if ($('a').hasClass("print") || $('a').hasClass("web"))  {
	        	$('a')
	        	.removeClass("deactive")
	        	.click(function() { return false; });
	        };

	    } else if ($(this).hasClass("print-button")) {
	    	if ($('a').hasClass("web"))  {
	        	
	        	$('a.web').addClass(" deactive")
	        	$('a.web').removeAttr("href");
	        	$('a.print').removeClass("deactive");
	        };
	
	    } else if ($(this).hasClass("web-button")) {
	    	 	if ($('a').hasClass("print"))  {
	        	$('a.print')
	        	.addClass(" deactive")
	        	.click(function() { return false; });
	        	$('a.web').removeClass("deactive");
	        };

	        
	    }
	});

});*/

$(function(){
	workBelt()
	workLoad()
});

function workBelt(){
	$('.project').click(function() {
		$('.work-belt').css('left','-100%');
		$('.work-container').show();
	});

	$('.back-to-work').click(function() {
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});
}

function workLoad(){

	$.ajaxSetup({ cache: true });

	$('.project').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			newHTML = '../works/work-6.html';
		$('.project-load').html(spinner).load(newHTML);

	});

};







