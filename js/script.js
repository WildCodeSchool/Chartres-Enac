
	$('#bgvid').hide();
	$('.fondgris').hide();
	 window.onload = function(){
		 setTimeout(function()
	  	{
	    	$("#bgvid").fadeIn('slow', 0);
	    	$('.fondgris').fadeIn('slow', 0);
	  	}, 0);
	};
	$(document).scroll(function(){
		$('#bgvid, .fondgris').fadeOut('slow', 0);
	});
	$(document).click(function(){
		$('#bgvid, .fondgris').fadeOut('slow', 0);
	});

		$(".contactpop").hide();
		$("#contact").click(function()
			{
				$(".contactpop").fadeIn('slow',0);
			});
		
			$('.boutonfermer').click(function()
			{
				$('.contactpop').fadeOut('slow', 0);
			});
	$('#name').click(function(){
		$(this).select();
	});
	$('#email').click(function(){
		$(this).select();
	});
	$('#commentaire').click(function(){
		$(this).select();
	});
