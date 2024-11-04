const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');

burgerIcon.addEventListener('click', () => {
  menu.classList.toggle('hidden'); 
});