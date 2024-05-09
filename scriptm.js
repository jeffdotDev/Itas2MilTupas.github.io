let iconMe = document.querySelector('#menuIcon');
let navBar = document.querySelector('.nav-bar');

iconMe.onclick = () => {
    iconMe.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};