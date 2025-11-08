export const ctaTemplate = (data) => {
    return `
        <section class="CTA">
            <div class="container">
                <div class="cta-background">
                    <p class="cta-text-1">${data.title}</p> 
                    <p class="cta-text-2">${data.description}</p>
                    <div class="btn-cta">
                        <button class="cta-start">${data.buttonText}</button>
                    </div>
                </div>
            </div>
        </section>
    `;
};