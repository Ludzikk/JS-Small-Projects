const toggleBtn = document.querySelectorAll(".main-fag__icon");

function toggleFaq() {
	const btnParent = this.parentElement;
	btnParent.parentElement.classList.toggle("item-faq-is-active");
}

toggleBtn.forEach((button) => {
	button.addEventListener("click", toggleFaq);
});
