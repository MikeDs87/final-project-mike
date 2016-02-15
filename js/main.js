
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
		var offset = 20; //Offset of 20px

		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);

    	$('html, body').animate({
        	scrollTop: $("#portfolio").offset().top + offset
   		}, 500);
	});
}

function workLoad(){

	$.ajaxSetup({ cache: true });

	$('.project').click(function(){

		var $this = $(this),
			spinner = '<div class="loader">Loading...</div>',
			newFolder = $this.data('folder'),
			newHTML = 'works/'+ newFolder +'.html',
			newTitle = $this.find('.description').text();
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);

	});

};







