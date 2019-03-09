//Url example to GET file content: https://raw.githubusercontent.com/bablet/bubdm/master/README.md

export const json = (file_name, data_type, callback) => {
	$.ajax({
		async: false,
		dataType: data_type,
		url: file_name,
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
