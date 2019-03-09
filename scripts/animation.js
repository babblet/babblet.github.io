const top_page_navigation      = document.querySelector(".top_page__navigation");
const top_page_background      = document.querySelector(".top_page__background");
const top_page_sidebar         = document.querySelector(".top_page__sidebar");
const pag                      = document.querySelector(".page");

export const startTransition = (state) => {
	top_page_navigation.setAttribute("data-state", state);
	top_page_background.setAttribute("data-state", state);
	top_page_sidebar.setAttribute("data-state", state);
	page.setAttribute("data-state",state);
}
