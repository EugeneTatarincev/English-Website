import active from "./modules/active.js";
import burger from "./modules/burger-icon.js";
import menu from "./modules/side-menu.js";

//making nav links avtive
active('.nav-link', '.navbar', 'active');

// burger menu stuff 
burger();

//side menu stuff
menu('.menuTwo', '.menu', 'toggle', '.side-menu', 'side-menu-toggle');