export const stickTemplate = (stickData) => {
    return `
      <footer class="section">
        <p class="footer-text">© ${stickData.a} ${stickData.b}. ${stickData.c}</p>
      </footer>
    `;
};