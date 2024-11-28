let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');
    const menuLinks = document.querySelectorAll('.menu-mobile nav ul li a');
    const closeBtn = document.querySelector('.btn-fechar');

    // Fecha o menu ao clicar em um link e mantém a funcionalidade de rolagem suave
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('abrir-menu');
            overlay.style.display = 'none';
        });
    });

    // Fecha o menu ao clicar no botão fechar
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });
});