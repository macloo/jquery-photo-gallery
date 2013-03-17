$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------


// using 'li span' instead of '.big' - we can grab the photo and 
// its caption together 


$('.thumb').show(); // these are hidden by CSS, so we show them here 


$('li span').hide();
var current = $('#pics').find('li span').first().clone();
$('#pics').before(current); // puts current before the #pics list
$(current).show().addClass('view');


$('#pics').on('click', '.thumb', function() {
	$(current).remove();
	current = $(this).prev().clone(); // grabs the node before (this)
	$('#pics').before(current); // puts current before the #pics list
	$(current).show().addClass('view');
});




// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
