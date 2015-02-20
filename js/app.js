$(document).ready(function() {

 $('.ryu').mouseenter(function() {

	$('.ryu-still').hide();
	$('.ryu-ready').show();

  })

 .mouseleave(function() {

	$('.ryu-ready').hide();
	$('.ryu-still').show();  
})

.mousedown(function() {

	playHadouken();
	
	$('.ryu-ready').hide();
	$('.ryu-throwing').show();

	// Show, animate, and hide hadouken:

$('.hadouken').finish().show().animate(
  {'left': '1150px'},
  500,
  function() {   // this is the callback function
    $(this).hide();
    $(this).css('left', '650px');   // reset to original left
  }
);
  })

 .mouseup(function() {

	$('.ryu-throwing').hide();
	$('.ryu-ready').show();  

});


});



function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}