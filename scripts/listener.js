const root                      = document.getElementById("root");
const welcome                   = document.querySelector(".welcome");
const top_page                  = document.querySelector(".top_page");

export const listen = () => {
    welcome.setAttribute("data-state", "start");

    welcome.querySelector(".welcome_top").addEventListener("animationend", e => {
        if(e.animationName === "welcome_top_slide"){
            root.removeChild(welcome);
            top_page.setAttribute("data-state", "start");
        }
    });
}
