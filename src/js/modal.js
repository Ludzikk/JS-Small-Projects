const openBtn = document.querySelector(".main-modal__btn");
const closeBtn = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal");

const toggleModal = () => {
	modal.classList.toggle("hidden");
};

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
