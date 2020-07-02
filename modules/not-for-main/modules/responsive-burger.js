export default function burgerFive() {
    const menuFive = document.querySelector('.menuFive');

    function addClassFunFive() {
        this.classList.toggle("clickMenuFive");
    }

    menuFive.addEventListener('click', addClassFunFive);
}