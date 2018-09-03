const root                      = document.getElementById('root');
const welcome                   = document.querySelector('.welcome');
const top_page                  = document.querySelector('.top_page');
const top_page__navigation      = document.querySelector('.top_page__navigation');
const top_page__background      = document.querySelector('.top_page__background');
const top_page__sidebar         = document.querySelector('.top_page__sidebar');
const page                      = document.querySelector('.page');
const page_project              = document.getElementById('project');
const page_guides               = document.getElementById('guides');
const page_archive              = document.getElementById('archive');
const page_blog                 = document.getElementById('blog');
const background_image 		    = document.querySelector('.background-image');

export const startTransition = (state, id) => {
    top_page__navigation.setAttribute('data-state', state);
    top_page__background.setAttribute('data-state', state);
    top_page__sidebar.setAttribute('data-state', state);
    page.setAttribute('data-state',state);
    if(id !== 'back-button') page.querySelector('.sub-section').innerHTML = id.toUpperCase();
} 

export const bindNavigationButtons = () => {
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
}

export const setBackgroundImage = () => {
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(width, background_image.width);
    background_image.setAttribute("style", "left:" + (((width - background_image.width)/2) - 20) + "px;");
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
