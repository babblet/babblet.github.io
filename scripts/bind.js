import * as _animation from "./animation.js"
import * as _content from "./content.js"
import * as _get from "./get.js"
//Make this shit more readable...
export const contentButton = (id) => {
    console.log("Binding content button " + id);

    document.getElementById(id).querySelector(".content-expand-arrow").addEventListener("click", e => {
        e.preventDefault();

        let open = (e.target.parentElement.parentElement.id == "column-left" ? "open-right" : "open-left");

        if(e.target.parentElement.getAttribute("data-state") != open){

            if(true) {

            } else {

            }
            e.target.parentElement.querySelector(".content-expanded").setAttribute("data-state" , "show");
            e.target.parentElement.setAttribute("style", "height: 300px; width:800px;");

            console.log("Opening content");
        } else {
            e.target.parentElement.setAttribute("data-state","closed");
            if(true) {
            } else {
            }
            e.target.parentElement.querySelector(".content-expanded").setAttribute("data-state" , "hide");
            
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
            content[index].setAttribute("style", "height: 80px; width: 400px;");
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