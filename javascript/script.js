// Import the functions
import { activeElement } from "./functions/navbarActive.js";
import { disappearAfterScroll } from "./functions/disappearAfterScroll.js";
import { scrollSmoothTo } from "./functions/scrollSmoothTo.js";
import { projectsTooltip } from "./functions/projectsTooltip.js";
import { responsiveBanner } from "./functions/responsiveBanner.js";
import { openBurgerMenu } from "./functions/openBurgerMenu.js";
import { filterMenu } from "./functions/filterMenu.js";
import { sendEmail } from "./functions/sendEmail.js";
import { toggleBurger } from "./functions/toggleBurger.js";

// Call the functions
activeElement();
disappearAfterScroll();
scrollSmoothTo();
projectsTooltip();
responsiveBanner();
openBurgerMenu();
filterMenu();
sendEmail();
toggleBurger();

