export const myAppsTemplate = (data) => {
    return `
        <section class="my-apps">
            <div class="container">
                <div class="my-apps-image">
                    <img src="${data.image.src}" alt="${data.image.alt}">
                </div>
                <div class="my-apps-wrapper">
                    <p class="my-apps-text-1">${data.content.earlyAccess}</p>
                    <p class="my-apps-title">${data.content.title}</p>
                    <p class="my-apps-text-1">${data.content.description}</p>
                    <p class="my-apps-desc">${data.content.earlyAccessBottom}</p>
                </div>
            </div>
        </section>
    `;
};