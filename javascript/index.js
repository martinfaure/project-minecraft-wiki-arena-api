const menu = document.querySelector("#menu-burger-mobile");
const logoall = document.querySelector(".logo-all");

function createmenu() {
	const menuburger = document.createElement("div");
	menuburger.classList.add("menuburger");
	menuburger.classList.add("activeburger");
	document.body.appendChild(menuburger);
	const imgclose = document.createElement("img");
	imgclose.src = "../assets/window-close-menu-burger.svg";
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

	img1element.src = "../assets/explore-logo.svg";
	img2element.src = "../assets/arena-logo.svg";
	img3element.src = "../assets/rule-logo.svg";

	img1element.alt = "explore logo";
	img2element.alt = "arena logo";
	img3element.alt = "rules logo";

	firstdivelement.appendChild(img1element);
	seconddivelement.appendChild(img2element);
	thirddivelement.appendChild(img3element);

	const spanelement1 = document.createElement("a");
	const spanelement2 = document.createElement("a");
	const spanelement3 = document.createElement("a");

	spanelement1.href = "../index.html";
	spanelement2.href = "../html/arena.html";
	spanelement3.href = "../html/rules.html";

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
		document.documentElement.style.overflow = "auto";
	});
}

menu.addEventListener("click", () => {
	createmenu();
	document.documentElement.style.overflow = "hidden";
});

logoall.addEventListener("click", () => {
	window.location.href = "../index.html";
});

const inputSearch = document.querySelector("#input-text");
const btnSearch = document.querySelector("#search");

btnSearch.addEventListener("click", async () => {
	const response = await fetch(`http://192.168.1.15:3000/v1/entities`);
	const data = await response.json();
	console.log(data);
});
