const nav = document.querySelector(".nav-navbar");
const navBtn = document.querySelector(".nav-navbar__btn");

const toggleNav = () => {
	nav.classList.toggle("open");
};

navBtn.addEventListener("click", toggleNav);
