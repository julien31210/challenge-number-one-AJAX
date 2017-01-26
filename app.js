$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"xml.xml",
		dataType:"xml",
		success: function(xml){ 
	$(xml).find('xml').each(function(){
    	var id = $(this).attr('key');
    	console.log("key")
	    	var client = $(this).find('client').text("0");
	    	var url = $(this).find('url').text("client");
		});
	}
});
});