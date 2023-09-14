const changeBtn = document.querySelector(".main-background__btn");
const input = document.querySelectorAll(".main-background__input");
const randomBtn = document.querySelector("#randomcolor");
const simplergbBtn = document.querySelector("#simplergb");
const mainRadomColor = document.querySelector("#mainrandom");
const mainSimpleRgb = document.querySelector("#mainrgb");
let firstValue = 0;
let secondValue = 0;
let thirdValue = 0;

const changeToRandomColor = () => {
	firstValue = Math.floor(Math.random() * 255);
	secondValue = Math.floor(Math.random() * 255);
	thirdValue = Math.floor(Math.random() * 255);
	let i = 0;

	document.body.style.backgroundColor = `rgb(${firstValue}, ${secondValue}, ${thirdValue})`;

	input.forEach((item) => {
		switch (i) {
			case 0:
				item.value = firstValue;
				break;
			case 1:
				item.value = secondValue;
				break;
			case 2:
				item.value = thirdValue;
				break;
		}
		i++;
	});
};

function changeColorFromInput() {
	switch (this.id) {
		case "0":
			if (this.value <= 255) {
				firstValue = this.value;
			} else {
				this.value = 255;
				firstValue = this.value;
			}
			break;
		case "1":
			if (this.value <= 255) {
				secondValue = this.value;
			} else {
				this.value = 255;
				secondValue = this.value;
			}
			break;
		case "2":
			if (this.value <= 255) {
				thirdValue = this.value;
			} else {
				this.value = 255;
				thirdValue = this.value;
			}
			break;
	}

	document.body.style.backgroundColor = `rgb(${firstValue}, ${secondValue}, ${thirdValue})`;
}

const showSimpleRgb = () => {
	mainRadomColor.classList.add("hidden");
	mainSimpleRgb.classList.remove("hidden");
};

const showRandomColor = () => {
	mainRadomColor.classList.remove("hidden");
	mainSimpleRgb.classList.add("hidden");
};

changeBtn.addEventListener("click", changeToRandomColor);
input.forEach((item) => {
	item.addEventListener("keyup", changeColorFromInput);
});
randomBtn.addEventListener("click", showRandomColor);
simplergbBtn.addEventListener("click", showSimpleRgb);

changeToRandomColor();