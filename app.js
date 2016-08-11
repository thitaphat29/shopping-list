$(document).ready(function(){

	//submit event
	
	$("#js-shopping-list-form").on("submit",function(event) {	
		event.preventDefault();
		
		var newItem = $("#shopping-list-entry").val();

		$('ul').append('<li><span class="shopping-item">' +newItem+'</span>' + 
			'<div class="shopping-item-controls">'+
				'<button class="shopping-item-toggle">'+
	         		'<span class="button-label">check</span>'+
	          	'</button>'+
	          	'<button class="shopping-item-delete">'+
	            	'<span class="button-label">delete</span>'+
	          	'</button>'+
	        '</div></li>');

	

	});

	$("ul").on("click",".shopping-item-toggle",function(event){
		$(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
		//$(this).closest("span").toggleClass("shopping-item__checked");
		
	});

	$("ul").on("click",".shopping-item-delete", function(event){
		$(this).closest("li").remove();
	});


	// enter event
	$("#js-shopping-list-form").keydown(function(event) {
		if(event.keyCode == 13){
			console.log("enter pressed!");
			var newItem = $("#shopping-list-entry").val();

			$('ul').append('<li><span class="shopping-item">' +newItem+'</span>' + 
			'<div class="shopping-item-controls">'+
				'<button class="shopping-item-toggle">'+
	         		'<span class="button-label">check</span>'+
	          	'</button>'+
	          	'<button class="shopping-item-delete">'+
	            	'<span class="button-label">delete</span>'+
	          	'</button>'+
	        '</div></li>');
		}
    
  	});

});

