import initHomeGames from "./modules/homegames.js";
import initSearchTitle from "./modules/searchtitle.js";
import initSelectCategory from "./modules/selectcategory.js";
import TextLimit from "./modules/textlimit.js";

initSearchTitle();
initSelectCategory();
initHomeGames();

const textLimit = new TextLimit(".game p", ".game h2");
textLimit.init();
