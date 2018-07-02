const root                      = document.getElementById('root');
const welcome                   = document.querySelector('.welcome');
const top_page                  = document.querySelector('.top_page');
const top_page__navigation      = document.querySelector('.top_page__navigation');
const top_page__background      = document.querySelector('.top_page__background');
const top_page__sidebar         = document.querySelector('.top_page__sidebar');
const button_page__transition   = document.querySelector('.button-page-transition');
const page_project              = document.getElementById('project');
const page_guides               = document.getElementById('guides');
const page_archive              = document.getElementById('archive');
const page_blog                 = document.getElementById('blog');

export const startTransition = (state) => {
    top_page__navigation.setAttribute('data-state', state);
    top_page__background.setAttribute('data-state', state);
    top_page__sidebar.setAttribute('data-state', state);
    button_page__transition.setAttribute('data-state', state);
} 

export const bindNavigationButtons = () => {
    const buttons = document.querySelectorAll('.top_page__navigation a');
    buttons.forEach((nav, key) => {
        nav.addEventListener('click', e => {
            e.preventDefault();
            startTransition('true');
            console.log('hello');
        });
    });

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', e => {
        e.preventDefault();
    });
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