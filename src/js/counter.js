const counterText = document.querySelector(".main-counter__counter");
const decreaseBtn = document.querySelector("#dec");
const resetBtn = document.querySelector("#res");
const increaseBtn = document.querySelector("#inc");
let value = 0;

const addListeners = () => {
	decreaseBtn.addEventListener("click", decreaseValue);
	resetBtn.addEventListener("click", resetValue);
	increaseBtn.addEventListener("click", increaseValue);
};

const decreaseValue = () => {
	value--;
	counterText.textContent = value;
	checkValue();
};

const resetValue = () => {
	value = 0;
	counterText.textContent = value;
	checkValue();
};

const increaseValue = () => {
	value++;
	counterText.textContent = value;
	checkValue();
};

const checkValue = () => {
	if (counterText.textContent < 0) {
		counterText.style.color = "red";
	} else if (counterText.textContent >= 10) {
		counterText.style.color = "blue";
	} else {
		counterText.style.color = "green";
	}
};

addListeners();
