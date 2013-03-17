$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------


// all the jQuery in this file can be learned in the free Code School 
// course "Try jQuery" - http://www.codeschool.com/courses/try-jquery 



$('.big').hide();
var current = $('#pics').find('.big').first();
$('#pics').before(current); // puts current before the #pics list
$(current).show().addClass('view');


$('#pics').on('click', '.thumb', function() {
	$(current).remove();
	current = $(this).prev(); // grabs the node before (this) 
	$('#pics').before(current); // puts current before the #pics list 
	// that means the big photo has been moved to a new location in the DOM 
	$(current).show().addClass('view');
});



// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
