$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------


// adds the .clone() method so big photos don't disappear from DOM 
// note .clone() must be used twice here ... 


$('.thumb').show(); // these are hidden by CSS, so we show them here 


$('.big').hide();
var current = $('#pics').find('.big').first().clone();
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
