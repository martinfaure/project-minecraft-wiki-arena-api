const menu = document.querySelector("#menu-burger-mobile");

function createmenu() {
	const menuburger = document.createElement("div");
	menuburger.classList.add("menuburger");
	document.body.appendChild(menuburger);
	const imgclose = document.createElement("img");
	imgclose.src = "./assets/window-close-menu-burger.svg";
	imgclose.alt = "close menu burger";
	imgclose.classList.add("close-menu");
	menuburger.appendChild(imgclose);

	const midelement = document.createElement("div");
	midelement.classList.add("mid-element");
	menuburger.appendChild(midelement);
	const firstdivelement = document.createElement("div");
	const seconddivelement = document.createElement("div");
	const thirddivelement = document.createElement("div");

	firstdivelement.classList.add("menu-burger-item");
	seconddivelement.classList.add("menu-burger-item");
	thirddivelement.classList.add("menu-burger-item");

	const img1element = document.createElement("img");
	const img2element = document.createElement("img");
	const img3element = document.createElement("img");

	img1element.src = "./assets/explore-logo.svg";
	img2element.src = "./assets/arena-logo.svg";
	img3element.src = "./assets/rule-logo.svg";

	img1element.alt = "explore logo";
	img2element.alt = "arena logo";
	img3element.alt = "rules logo";

	firstdivelement.appendChild(img1element);
	seconddivelement.appendChild(img2element);
	thirddivelement.appendChild(img3element);

	const spanelement1 = document.createElement("span");
	const spanelement2 = document.createElement("span");
	const spanelement3 = document.createElement("span");

	spanelement1.classList.add("text-burger");
	spanelement2.classList.add("text-burger");
	spanelement3.classList.add("text-burger");

	spanelement1.textContent = "EXPLORE";
	spanelement2.textContent = "ARENA";
	spanelement3.textContent = "RULES";

	firstdivelement.appendChild(spanelement1);
	seconddivelement.appendChild(spanelement2);
	thirddivelement.appendChild(spanelement3);

	midelement.appendChild(firstdivelement);
	midelement.appendChild(seconddivelement);
	midelement.appendChild(thirddivelement);

	imgclose.addEventListener("click", () => {
		menuburger.remove();
	});
}

menu.addEventListener("click", () => {
	createmenu();
});
