$(document).ready(function(){
	var y;
	var tabnum = [];
	$.ajax({
		type:"GET",
		url:"xml.xml",
		dataType:"xml",
		success: function(xml){ 

		var client_list = $(xml).find('client');

			client_list.each(function(){
				y = $(this).attr('id')
				tabnum.push(y);
				nom = $(this).find('nom').text();
				$('#Div_XML').append($('<option>', {value:y, text: nom}));
				console.log((nom));
			});
				$("select").change(function(){
				//client = $("option").data('id');
				var client_id = $( "#Div_XML option:selected" ).val();
				client = client_list[client_id],
				$ (".reception").html([client]),
				console.log(client)
			});
		}
	});
});

//$(document).ready(function(){
//	$.ajax({
//		type:"GET",
//		url:"xml.xml",
//		dataType:"xml",
//		success: function(xml){ 
//				var id = $(this).attr('key');
//				console.log("key")
//				var client = $(this).find('client').text("0");
//				var url = $(this).find('url').text("client");
//			});
//		}
//	});
//}); 
				//console.log(x[0])
				// $(this).find("client").each(function(){
				// 	console.log($(this).find("nom").html())
					// console.log($(this).find("prenom").html())
					// console.log($(this).find("âge").html())
					// console.log($(this).find("profession").html())
					// console.log($(this).find("email").html())
					// console.log($(this).find("téléphone").html())




			//});


// 				$(".reception").each(function(){
// 					var x= $(this).find("xml");
// 					console.log(this);
// 				})
// 			})
// 		}
// 	});

// });