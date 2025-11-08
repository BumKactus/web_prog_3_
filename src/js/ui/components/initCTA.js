import { ctaData } from "../../mockData/ctaData.js";
import { ctaTemplate } from "../templates/ctaTemplate.js";

const initCTA = (sectionNode) => {
    sectionNode.insertAdjacentHTML("beforeend", ctaTemplate(ctaData));
};

export default initCTA;