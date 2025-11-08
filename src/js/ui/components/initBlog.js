import blogData from '../../mockData/blogData.js';
import { blogTemplate } from '../templates/blogTemplate.js';

export const initBlog = (element) => {
    element.innerHTML = blogTemplate(blogData);
};
export default initBlog;