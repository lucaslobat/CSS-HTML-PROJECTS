const toggleMenuButton = document.querySelector('.toggle-button-navbar');
const navbarLinks = document.querySelector('.links');
toggleMenuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('visible');
})