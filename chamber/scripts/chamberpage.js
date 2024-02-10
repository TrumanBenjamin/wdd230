const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('header nav');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// Dark Mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});
