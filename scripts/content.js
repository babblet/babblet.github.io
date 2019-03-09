import * as _bind from "./bind.js"

// ### Check get.js
function inserting(category, arr) {
    $(document).ready(function(){
        for(let index in arr){

            let html_temp = `
                <div class="content-frame" id="` + arr[index].name + `">
                    <div class="content-header">` + arr[index].ab + `</div>
                    <div class="content-expand-arrow"></div>
                    <div class="content-expanded">
                    </div>
                </div>
            `

            let side = "";
            if(index % 2 == 0) side = "left";
            else             side = "right";
            $.get("./" + category + "/" + arr[index].name + "/index.html", function(data) {
                $("#" + category + "-page #column-" + side).append(html_temp);
                $("#" + arr[index].name + " .content-expanded").append(data.toString());
                _bind.contentButton(arr[index].name);

            });
        }
    });
    return true;
}


//### Check get.js, remove json implementation to use raw github README.md file
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
