import * as _animation from "./animation.js"
import * as _content from "./content.js"
import * as _get from "./get.js"

//Make this shit more readable...
export const contentButton = (id) => {
    console.log("Binding content button " + id);
    document.getElementById(id).addEventListener("click", e => {
        e.preventDefault();
        let open = (e.target.parentElement.parentElement.id == "column-left" ? "open-right" : "open-left");
        if(e.target.parentElement.getAttribute("data-state") != open){
            e.target.parentElement.setAttribute("data-state", open);
            if(a == 0) contentColumns[1].children[b].setAttribute("data-state", "under-open");
            else       contentColumns[0].children[b].setAttribute("data-state", "under-open");
            console.log("Opening opening");
        } else {
            e.target.parentElement.setAttribute("data-state","closed");
            if(a == 0) contentColumns[1].children[b].setAttribute("data-state", "default");
            else       contentColumns[0].children[b].setAttribute("data-state", "default");
            console.log("Closing content")
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
            const id = e.target.parentElement.getAttribute("id");
            _animation.startTransition("true", id);
        });
    });

    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.getAttribute("id");
        _animation.startTransition("false", id);
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