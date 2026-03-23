let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code
const typed = new Typed('.multiple-text', {
    strings: ['Bienestar', 'Calidad Humana', 'Profesores Capacitados', 'Comodidad y Variedad', 'Atención Personalizada'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
    });