const nav = document.querySelector(".nav-sidebar");
const closeBtn = document.querySelector(".nav-sidebar__btn");
const toggleNavBtn = document.querySelector(".sidebar__btn");

const toggleNav = () => {
	nav.classList.toggle("sidebar-active");
};

const closeNav = () => {
	nav.classList.remove("sidebar-active");
};

closeBtn.addEventListener("click", closeNav);
toggleNavBtn.addEventListener("click", toggleNav);
