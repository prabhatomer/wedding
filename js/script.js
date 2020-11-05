
$(document).ready(function(){


	/* ---- Countdown timer ---- */

	//	$('#counter').countdown({
//		timestamp : (new Date()).getTime() + 08*10*60*60*1000
//	});
	$('#counter').countdown({
		timestamp : (new Date(2021, 04, 22, 00, 00))
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);




});
