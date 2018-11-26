const top_page__navigation      = document.querySelector(".top_page__navigation");
const top_page__background      = document.querySelector(".top_page__background");
const top_page__sidebar         = document.querySelector(".top_page__sidebar");
const page                      = document.querySelector(".page");

export const startTransition = (state) => {
    top_page__navigation.setAttribute("data-state", state);
    top_page__background.setAttribute("data-state", state);
    top_page__sidebar.setAttribute("data-state", state);
    page.setAttribute("data-state",state);
}