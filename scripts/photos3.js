$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------


// now we create a div to hold the big photo, which allows us to 
// float the thumbs beside the big photo 


var emptydiv = '<div id="viewer"></div>';
$('#pics').before(emptydiv); // puts emptydiv above the UL 


$('.thumb').show(); // these are hidden by CSS, so we show them here 


$('li span').hide(); // hides all the big photos and captions 
var current = $('#pics').find('li span').first().clone();
$('#viewer').append(current); // puts current inside the #viewer div
$(current).fadeIn();


$('#pics').on('click', '.thumb', function() {
	$(current).remove();
	current = $(this).prev().clone(); // grabs the node before (this)
	$('#viewer').append(current); // puts current inside the DIV 
	$(current).fadeIn();
});



// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
