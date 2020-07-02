import burgerFive from "./modules/responsive-burger.js";
import theory from "./modules/theory.js";
import responsiveMenu from "./modules/responsive-menu.js";

// BURGER ICON 5

burgerFive();

//MENU FOR MOBILES

responsiveMenu('.menuFive', '.five-wrapper', '.menu-ul-responsive', 'toggleFive', 'toggleMenu');