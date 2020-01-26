import * as _bind from "./bind.js"

// ### Check get.js
function insert_content(parent, _map) {
    for(let map in _map){
        let html_temp = `
            <div class="content-frame" id="` + _map[map].data.path + `">
                <div class="content-header">` + _map[map].data.abbreviation + `</div>
                <div class="content-expand-arrow"></div>
                <div class="content-expanded">
                </div>
            </div>
        `

        let side = "";
        if(map % 2 == 0) side = "left";
        else             side = "right";
        $.get(`/content/${parent}/${_map[map].data.path}/content.html`, function(data) {
            $("#" + parent + "-page #column-" + side).append(html_temp);
            $("#" + _map[map].data.path + " .content-expanded").append(data.toString());
            _bind.contentButton(_map[map].data.path);

        });
    }
    return true;
}


//### Check get.js, remove json implementation to use raw github README.md file
export const insert = (map) => {
     for(let map_index in map) {
        console.log("Inserting", map[map_index]);
        if(!insert_content(map_index, map[map_index])) {
            console.log("Inserting Failed");
            return -1;
        }
        console.log("Inserting Complete");
    }
}
