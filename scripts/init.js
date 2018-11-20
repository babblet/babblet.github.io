import * as _listener from "./listener.js";
import * as _bind from "./bind.js";
import * as _get from "./get.js";

export const backgroundImage = () => {
    const background_image = document.getElementById("background-image");
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(width, 16*background_image.height/9)
    background_image.setAttribute("style", "left:" + (((width - 16*(background_image.height/10))/2) - 20) + "px;"); //16:9 ratio
}


_listener.listen();
//bind.sidebarButtons();
_bind.content();
_bind.navigationButtons();
setTimeout(backgroundImage(), 1000);
