export const json = (file_name, fallback) => {
	$.ajax({
		async: false,
		dataType: "json",
		url: file_name,
		success: function(data) {
			fallback(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
        	alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    	}  
	});
}