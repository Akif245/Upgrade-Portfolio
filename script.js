function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  
const toggle = document.getElementById('switch')
const body =document.querySelector('body')
const nav = document.getElementById('desktop-nav')
toggle.addEventListener('click', function () {
  this.classList.toggle('bi-sun')
  if (this.classList.toggle('bi-moon')) {
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
          } else {
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';

  }

})

