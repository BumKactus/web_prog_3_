import  {myAppsData}  from '../../mockData/myAppsData.js';
import {myAppsTemplate} from "../templates/myAppsTemplate.js";

const initMyApps = (sectionNode) => {
    sectionNode.insertAdjacentHTML("beforeend", myAppsTemplate(myAppsData));
};

export default initMyApps;