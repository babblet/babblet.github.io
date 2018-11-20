import * as _bind from "./bind.js"

function inserting(category, arr) {
    $(document).ready(function(){
        for(let index in arr){
            let side = "";
            if(index % 2 == 0) side = "left";
            else             side = "right";
            $.get("./" + category + "/" + arr[index] + "/index.html", function(data) {
                $("#" + category + "-page #column-" + side).append(data.toString());
                _bind.contentButton(arr[index]);

            });
        }
    });
    return true;
}

export const insert = (json) => {
     for(let category in json) {
        console.log("Inserting", category);
        if(!inserting(category, json[category])) {
            console.log("Inserting Failed");
            return -1;
        }
        console.log("Inserting Complete");
    }
}