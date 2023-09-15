const arrowLeftBtn = document.querySelector(".main-reviews__arrow--left");
const arrowRightBtn = document.querySelector(".main-reviews__arrow--right");
const randomBtn = document.querySelector(".main-reviews__btn");
const personBox = document.querySelectorAll(".main-reviews__person");
const container = document.querySelector(".main-reviews__person");
let currentReview = 0;

const addListeners = () => {
	arrowLeftBtn.addEventListener("click", previousReview);
	arrowRightBtn.addEventListener("click", nextReview);
	randomBtn.addEventListener("click", randomReview);
};

const nextReview = () => {
	currentReview++;

	if (currentReview === 5) {
		currentReview = 0;
	}

	setReview();
};

const previousReview = () => {
	currentReview--;

	if (currentReview === -1) {
		currentReview = 4;
	}

	setReview();
};

const randomReview = () => {
	const randomReview = Math.floor(Math.random() * 5);

	currentReview = randomReview;

	setReview();
};

const setReview = () => {
	personBox.forEach((person) => {
		if (parseInt(person.id) === currentReview) {
			person.classList.remove("hidden");
		} else {
			person.classList.add("hidden");
		}
	});
};

addListeners();
