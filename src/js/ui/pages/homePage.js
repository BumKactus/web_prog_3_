import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initBlog from "./../components/initBlog.js";
import initCTA from "./../components/initCTA.js";
import initMyApps from "./../components/initMyApps.js";
import initSectionFuture from "./../components/initSectionFuture.js";
import initStick from "./../components/initStick.js";
const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>


    <section class="section MyApps"></section>
    <section class="section CTA"></section>
    <section class="section Blog"></section>
    <section class="section SectionFuture"></section>
    <section class="section stick"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);
  rootNode.classList.add("page");

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);


  // инициализация блога
  const blogNode = rootNode.querySelector(".Blog");
  initBlog(blogNode);

  // инициализация CTA
  const CTANode = rootNode.querySelector(".CTA");
  initCTA(CTANode);

  // инициализация MyApps
  const myAppsNode = rootNode.querySelector(".MyApps");
  initMyApps(myAppsNode);

  // инициализация SectionFuture
  const sectionFutureNode = rootNode.querySelector(".SectionFuture");
  initSectionFuture(sectionFutureNode);

  // инициализация футера 
  const stickNode = document.createElement('div');
  stickNode.className = 'stick-container';
  rootNode.appendChild(stickNode);
  initStick(stickNode);
  
};

export default homePage;