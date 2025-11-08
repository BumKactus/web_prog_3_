import sectionFutureData from '../../mockData/sectionFutureData.js';
import { sectionFutureTemplate } from '../templates/sectionFutureTemplate.js';

export const initSectionFuture = (element) => {
    element.innerHTML = sectionFutureTemplate(sectionFutureData);
};
export default initSectionFuture;