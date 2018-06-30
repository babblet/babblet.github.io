const root                  = document.getElementById('root');
const welcome               = document.querySelector('.welcome');
const top_page              = document.querySelector('.top_page');
const top_page__navigation  = document.querySelector('.top_page__navigation');

export const bindButtons = () => {
    const buttons = document.querySelectorAll('.top_page__navigation a');

    buttons.forEach((nav, key) => {
        nav.addEventListener('click', e => {
            e.preventDefault();
            //Implement
        });
    });
}

export const listen = () => {
    welcome.setAttribute('data-state', 'start');

    welcome.querySelector(".welcome_top").addEventListener('animationend', e => {
        if(e.animationName === "welcome_top_slide" ){
            root.removeChild(welcome);
            top_page.setAttribute('data-state', 'start');
        }
    });
}