let menu = document.getElementById('menu');
let menuMobile = document.querySelector('.menu-mobile');

function menuBar() {
 if (menuMobile.className === 'menu-mobile inactive') {
    menuMobile.classList.remove('inactive');
    menuMobile.classList.add('active');
  } else if (menuMobile.className === 'menu-mobile active') {
    menuMobile.classList.remove('active');
    menuMobile.classList.add('inactive');
  }
}

console.log(menu);
console.log(menuMobile);

menu.addEventListener('click', menuBar);