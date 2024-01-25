const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('header nav');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
});