const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');

burgerIcon.addEventListener('click', () => {
  menu.classList.toggle('hidden'); 
});

//Icon nav
const icon = ["logo.png", "logo02.png"]
let index = 0
const changeImage = ()=>{
  const img = document.querySelector("#icon")
  img.src = icon[index]
  index = (index + 1) % icon.length
}
setInterval(changeImage, 5000)