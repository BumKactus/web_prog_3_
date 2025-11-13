export const Title = (title) => {
  return `
    <p class="cta-text-1">
      ${title}
    </p>
  `;
};

export const Description = (description) => {
  return `
    <p class="cta-text-2">
      ${description}
    </p>
  `;
};

export const ButtonText = (buttonText) => {
  return `
    <button class="cta-start">
      ${buttonText}
    </button>
  `;
};
export const ctaTemplate = ({
  title,
  description,
  buttonText,
}) => {
  const titleTemplate = Title(title);
  const descriptionTemplate = Description(description);
  const ButtonTextTemplate = ButtonText(buttonText);

  const resultTemplate = `
        <section class="CTA">
            <div class="container">
                <div class="cta-background">
                    ${titleTemplate}
                    ${descriptionTemplate}
                    <div class="btn-cta">
                        ${ButtonTextTemplate}
                    </div>
                </div>
            </div>
        </section>
    `;

  return resultTemplate;
};
