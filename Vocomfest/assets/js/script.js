$(document).ready(function() {
    
    var $item = $('div.item'), //Cache your DOM selector
        visible = 2, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 1; //End index
    
    $('div#arrowR').click(function(){
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=300px'});
        }
    });
    
    $('div#arrowL').click(function(){
        if(index > 0){
          index--;            
          $item.animate({'left':'+=300px'});
        }
    });
    
});

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#btnTop').fadeIn();
		} else {
			$('#btnTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#btnTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});