$(document).ready(function() {

	playSound("#theme-sound");	


 $('.ryu').mouseenter(function() {

	$('.ryu-still').hide();
	$('.ryu-ready').show();

  })

 .mouseleave(function() {

	$('.ryu-ready').hide();
	$('.ryu-still').show();  
})

.mousedown(function() {

	playSound("#hadouken-sound");

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



$(document).keydown(function(event) {

	if ( event.which == 88 )
	{
		// console.log('x was pressed');
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').show();  

		pauseSound("#theme-sound");	
		playSound("#cool-sound");

	}


})

.keyup(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();  
		$('.ryu-still').show();

		pauseSound("#cool-sound");	

});


});


function playSound(pAudioSelector) {
	var audioElem = $(pAudioSelector)[0];
  	audioElem.volume = 0.5;
  	// audioElem.load();
  	audioElem.play();
}




function pauseSound(pAudioSelector) {
	var audioElem = $(pAudioSelector)[0];
  	audioElem.pause();
}
