const root                      = document.getElementById('root');
const welcome                   = document.querySelector('.welcome');
const top_page                  = document.querySelector('.top_page');
const top_page__navigation      = document.querySelector('.top_page__navigation');
const top_page__background      = document.querySelector('.top_page__background');
const top_page__sidebar         = document.querySelector('.top_page__sidebar');
const page                      = document.querySelector('.page');
const page_project              = document.getElementById('projects');
const page_guides               = document.getElementById('guides');
const page_archive              = document.getElementById('archive');
const page_blog                 = document.getElementById('blog');

const startTransition = (state, id) => {
    top_page__navigation.setAttribute('data-state', state);
    top_page__background.setAttribute('data-state', state);
    top_page__sidebar.setAttribute('data-state', state);
    page.setAttribute('data-state',state);
    if(id !== 'back-button') page.querySelector('.sub-section').innerHTML = id.toUpperCase();
} 

export const bindSidebarButtons = () => {
    console.log("Binding sidebar buttons");
    const buttons = document.querySelectorAll('.top_page__sidebar .shadow section');
    buttons.forEach((nav, key)=> {
        nav.addEventListener('click', e => {
            e.preventDefault();
            console.log(e.target.getAttribute("id"));
            //window.location = e.target.id;
        });
    });
    console.log("Binding complete");
}

export const bindNavigationButtons = () => {
    console.log("Binding navigations buttons");
    const buttons = document.querySelectorAll('.top_page__navigation .button');
    buttons.forEach((nav, key) => {
        nav.addEventListener('click', e => {
            e.preventDefault();
            const id = e.target.parentElement.getAttribute('id');
            startTransition('true', id);
        });
    });

    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', e => {
        e.preventDefault();
        const id = e.target.getAttribute('id');
        startTransition('false', id);
    });
    console.log("Binding complete");
}

export const bindContentButtons = () => {
    console.log("Binding content buttons");
    
    const contentColumns = document.querySelectorAll('.page .page-frame .column');
    console.log(contentColumns);

    contentColumns.forEach((col, a) => {
        let buttons = col.querySelectorAll('.content-frame .content-expand-arrow');
        console.log(buttons);
        buttons.forEach((nav, b) => {
            nav.addEventListener('click', e => {
                e.preventDefault();
                if(e.target.parentElement.getAttribute("data-state") != "open"){
                    e.target.parentElement.setAttribute("data-state","open");
                    if(a == 0){
                        contentColumns[1].children[b].setAttribute("data-state", "under-open");
                    } else {
                        contentColumns[0].childElement[b].setAttribute("data-state", "under-open");
                    }
                    console.log("Opening content");
                } else {
                    e.target.parentElement.setAttribute("data-state","closed");
                    if(a == 0) {
                        contentColumns[1].children[b].setAttribute("data-state", "default");
                    }
                    else {
                        contentColumns[0].childElement[b].setAttribute("data-state", "default");
                    }
                    console.log("Closing content")
                }
            });
        });
    });
    console.log("Binding complete");
}

export const setBackgroundImage = () => {
    const background_image = document.getElementById('background-image');
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(width, 16*background_image.height/9)
    background_image.setAttribute("style", "left:" + (((width - 16*(background_image.height/10))/2) - 20) + "px;"); //background is 16:9 ratio
}

export const listen = () => {
    welcome.setAttribute('data-state', 'start');

    welcome.querySelector('.welcome_top').addEventListener('animationend', e => {
        if(e.animationName === 'welcome_top_slide'){
            root.removeChild(welcome);
            top_page.setAttribute('data-state', 'start');
        }
    });
}
