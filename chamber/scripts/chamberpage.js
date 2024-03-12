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

// Banner
const banner = document.getElementById('banner');

const today = new Date();
const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
if (dayOfWeek >= 1 && dayOfWeek <= 3) {

    setTimeout(function() {
        banner.style.display = 'flex';
        setTimeout(function() {
            banner.classList.add('show');
        }, 50); 
    }, 2000);

    function closeBanner() {
        banner.classList.remove('show');
        setTimeout(function() {
            banner.style.display = 'none';
        }, 1500); 
    }
}
