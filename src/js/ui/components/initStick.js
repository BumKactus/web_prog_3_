import  stickData  from "../../mockData/stickData.js";
import { stickTemplate } from "../templates/stickTemplate.js";

const initStick = (stickNode) => {
  stickNode.insertAdjacentHTML("beforeend", stickTemplate(stickData));
};

export default initStick;