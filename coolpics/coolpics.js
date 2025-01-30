const menuButton = document.getElementById('menu');
const navLinks = document.querySelector('nav');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}
