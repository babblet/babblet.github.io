export const json = (file_name, fallback) => {
	$.ajax({
		async: false,
		dataType: "json",
		url: file_name,
		success: function(data) {
			console.log("Falling back")
			fallback(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
			alert("Status: " + textStatus); alert("Error: " + errorThrown); 
			console.log("fetching data failed");
    	}  
	});
}