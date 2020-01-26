//Url example to GET file content: https://raw.githubusercontent.com/bablet/bubdm/master/README.md

export const json = (path, data_type, callback) => {
	$.ajax({
		async: true,
		dataType: data_type,
		url: path,
		success: function(data) {
			console.log("Falling back")
			callback(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
			alert("Status: " + textStatus); alert("Error: " + errorThrown); 
			console.log("fetching data failed");
    	}  
	});
}
