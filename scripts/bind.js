import * as _animation from "./animation.js"
import * as _content from "./content.js"
import * as _get from "./get.js"
//Make this shit more readable...
export const contentButton = (id) => {
    console.log("Binding content button " + id);
    
    //element
    let element = document.getElementById(id);
    let element_index = 0;
    while((element=element.previousSibling) != null)
        if(element.className == "content-frame") 
            element_index++;

    console.log("Got index for " + id + ":" + element_index);

    document.getElementById(id).querySelector(".content-expand-arrow").addEventListener("click", e => {
        e.preventDefault();
        let parent = e.target.parentElement;

        let side_element_column = parent.parentElement.id == "column-right" ? "#column-left" :  "#column-right";
        let side_element = parent.parentElement.parentElement.querySelector(side_element_column).querySelectorAll(".content-frame")[element_index];

        if(parent.getAttribute("data-state") != "open"){
            parent.setAttribute("data-state","open");
            parent.querySelector(".content-expanded").setAttribute("data-state" , "show");
            if(parent.parentElement.id == "column-left"){
                parent.setAttribute("style", "height: 300px; width:800px;");
            } else {
                parent.setAttribute("style", "height: 300px; width:800px; left: -405px;");
            }
            side_element.setAttribute("data-state", "down");
            side_element.setAttribute("style", "margin-top: 310px");
            console.log("Opening content");
        } else {
            parent.setAttribute("data-state","closed");
            parent.querySelector(".content-expanded").setAttribute("data-state" , "hide");
            parent.setAttribute("style", "height: 80px; width:100%;");
            if(parent.parentElement.id == "column-left") {
                parent.setAttribute("style", "height: 80px; width:100%;");
            } else {
                parent.setAttribute("style", "height: 80px; width:100%; left: 0px;");
            }
            side_element.setAttribute("data-state", "up");
            side_element.setAttribute("style", "margin-top: 0px");
            console.log("Closing content");
        }
    });
    console.log("Binding complete");
}

export const navigationButtons = () => {
    console.log("Binding navigations buttons");
    const buttons = document.querySelectorAll(".top_page__navigation .button");
    buttons.forEach((nav, key) => {
        nav.addEventListener("click", e => {
            e.preventDefault();
            
            _animation.startTransition("true");

            let id = e.target.parentElement.getAttribute("id");
            document.querySelector(".page").setAttribute("content", id);
            document.getElementById(id + "-page").style.display = "block";
        });
    });

    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", e => {
        e.preventDefault();
        
        _animation.startTransition("false");

        let id = document.querySelector(".page").getAttribute("content");
        let page = document.getElementById(id + "-page");
        page.style.display = "none";

        let content = page.querySelectorAll(".page .page-frame .content-frame");
        for(let index in content) {
            content[index].setAttribute("data-state", "closed");
            content[index].setAttribute("style", "height: 80px; width: 100%;");
            if(index == content.length - 1) break;
        }

        
    });
    console.log("Binding complete");
}

export const sidebarButtons = () => {
    console.log("Binding sidebar buttons");
    const buttons = document.querySelectorAll(".top_page__sidebar .shadow section");
    buttons.forEach((nav, key)=> {
        nav.addEventListener("click", e => {
            e.preventDefault();
            console.log(e.target.getAttribute("id"));
            //window.location = e.target.id;
        });
    });
    console.log("Binding complete");
}

export const content = () => {
    console.log("Binding content");
    _get.json("./content.json", _content.insert);
    console.log("Complete binding");
}