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
const cardheader = document.querySelector(".grid-card");
const sectioncard = document.querySelector(".formulaire");

function createdcardanimals(name, classification, behavior, imgalt, imgsrc) {
	const card = document.createElement("div");
	card.classList.add("mobSpecs");

	const header = document.createElement("div");
	header.classList.add("mobSpecsHeader");

	const nameSpan = document.createElement("span");
	nameSpan.textContent = name;
	nameSpan.style.fontWeight = "bold";

	header.appendChild(nameSpan);
	card.appendChild(header);

	const main = document.createElement("div");
	main.classList.add("mobSpecsMain");

	const img = document.createElement("img");
	img.src = imgsrc;
	img.alt = imgalt;

	img.style.width = "100px";
	img.style.height = "100px";
	img.style.objectFit = "cover";

	main.appendChild(img);
	card.appendChild(main);

	const values = document.createElement("div");
	values.classList.add("mobSpecsValues");

	const bottomRow = document.createElement("div");
	bottomRow.style.display = "flex";
	bottomRow.style.justifyContent = "space-between";

	const classificationLink = document.createElement("a");
	classificationLink.href = "#";
	classificationLink.textContent = classification;
	classificationLink.style.color = "#4f8c69";

	const behaviorSpan = document.createElement("span");
	behaviorSpan.textContent = behavior;

	bottomRow.appendChild(classificationLink);
	bottomRow.appendChild(behaviorSpan);

	values.appendChild(bottomRow);
	card.appendChild(values);

	const footer = document.createElement("div");
	footer.classList.add("mobSpecsFooter");

	const button = document.createElement("button");
	button.textContent = "SEE MORE";

	button.addEventListener("click", () => {
		window.location.href = "../html/pageanimals.html";
	});
	footer.appendChild(button);

	card.appendChild(footer);

	cardheader.appendChild(card);

	return cardheader;
}

menu.addEventListener("click", () => {
	createmenu();
	document.documentElement.style.overflow = "hidden";
});

logoall.addEventListener("click", () => {
	window.location.href = "../index.html";
});

const inputSearch = document.querySelector(".input-tqt");
const btnSearch = document.querySelector("#search");
const inputarmor = document.querySelector("#numbrearmor");
const inputhealth = document.querySelector("#numberheal");
const inputdamage = document.querySelector("#numberdamage");
const select = document.getElementById("select");
let resselect = "";
select.addEventListener("change", () => {
	const selectedValue = select.value;
	resselect = selectedValue;
	console.log(resselect);
});
const type = document.getElementById("select5");
let restype = "";
type.addEventListener("change", () => {
	const typevalue = type.value;
	restype = typevalue;
	console.log(restype);
});

document.addEventListener("DOMContentLoaded", async () => {
	let url = `http://51.38.232.174:3000/v1/entities`;
	const response = await fetch(url);
	const data = await response.json();
	for (let j = 0; j < data.length; j++) {
		createdcardanimals(
			data[j].name,
			data[j].classification,
			data[j].type,
			data[j].images,
			data[j].image
		);
	}
});

btnSearch.addEventListener("click", async () => {
	let inputvalue = inputSearch.value.trim().toLowerCase();
	let inputarmorvalue = inputarmor.value.trim();
	let inputhealthvalue = inputhealth.value.trim();
	let url = `http://51.38.232.174:3000/v1/entities`;

	const response = await fetch(url);
	const data = await response.json();

	let filteredData = [];
	for (let i = 0; i < data.length; i++) {
		let animal = data[i];
		if (animal.name.toLowerCase().includes(inputvalue)) {
			if (
				(inputarmorvalue === "" || animal.armor == inputarmorvalue) &&
				(inputhealthvalue === "" || animal.health == inputhealthvalue)
			) {
				filteredData.push(animal);
			}
		}
	}

	inputSearch.value = "";
	inputarmor.value = "";
	inputhealth.value = "";
	cardheader.innerHTML = "";

	for (let j = 0; j < filteredData.length; j++) {
		let a = filteredData[j];
		createdcardanimals(a.name, a.classification, a.type, a.images, a.image);
	}
});
