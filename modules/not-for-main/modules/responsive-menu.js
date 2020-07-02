export default function responsiveMenu (toggleButton, aimToggle, menuToggle, classToggle1, classToggle2) {
    const button = document.querySelector(toggleButton),
        aim = document.querySelector(aimToggle),
        menu =document.querySelector(menuToggle);

    button.addEventListener('click', (e) => {
        if(e.target) {
            aim.classList.toggle(classToggle1);
            menu.classList.toggle(classToggle2);
        }
    });
}