export const EarlyAccess = (earlyAccess) => {
  return `
    <p class="my-apps-text-1">
      ${earlyAccess}
    </p>
  `;
};

export const Title = (title) => {
  return `
    <p class="my-apps-title">
      ${title}
    </p>
  `;
};

export const Description = (description) => {
  return `
    <p class="my-apps-text-1">
      ${description}
    </p>
  `;
};

export const EarlyAccessBottom = (earlyAccessBottom) => {
  return `
    <p class="my-apps-desc">
      ${earlyAccessBottom}
    </p>
  `;
};


export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};
export const myAppsTemplate = ({
  earlyAccess,
  title,
  description,
  earlyAccessBottom,
  illustration,
}) => {
  const earlyAccessTemplate = EarlyAccess(earlyAccess);
  const titleTemplate = Title(title);
  const earlyAccessBottomTemplate = EarlyAccessBottom(earlyAccessBottom);
  const descriptionTemplate = Description(description);
  const illustrationTemplate = createIllustrationTemplate(illustration);

  const resultTemplate = `
        <section class="my-apps">
            <div class="container">
                <div class="my-apps-image">
                    ${illustrationTemplate}
                </div>
                <div class="my-apps-wrapper">
                    ${earlyAccessTemplate}
                    ${titleTemplate}
                    ${earlyAccessBottomTemplate}
                    ${descriptionTemplate}
                </div>
            </div>
        </section>
    `;

  return resultTemplate;
};
