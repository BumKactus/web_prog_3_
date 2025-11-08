export const sectionFutureTemplate = (data) => {
    return `
        <section class="section-future">
            <div class="container">
                <div class="section-future-content">
                    <h2 class="section-future-title">${data.title}</h2>
                    <a href="#!" class="section-future-button">${data.buttonText}</a>
                    <div class="information-future">
                        <div class="footer-column">
                            <img src="${data.companyInfo.logo}" alt="GPT-4 Logo" class="future-img">
                            <p class="light-text">${data.companyInfo.address}<br><br>${data.companyInfo.copyright}</p>
                        </div>
                        <div class="straight-columns">
                            <div class="footer-column-link">
                                <h3>${data.links.title}</h3>
                                ${data.links.items.map(item => `<a>${item}</a>`).join('')}
                            </div>
                            <div class="footer-column-link">
                                <h3>${data.company.title}</h3>
                                ${data.company.items.map(item => `<a>${item}</a>`).join('')}
                            </div>
                            <div class="footer-column-link">
                                <h3>${data.contacts.title}</h3>
                                ${data.contacts.items.map(item => `<a>${item}</a>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>    
        </section>
    `;
};