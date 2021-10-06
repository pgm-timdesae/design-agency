/* eslint-disable no-undef */
(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.btnToTopElement = document.querySelector('.btn-to-top');
      this.$nav = document.querySelector('.nav__list');
      this.$ham = document.querySelector('.ham-menu');
    },
    registerEventListeners () {
      this.$ham.addEventListener('click', () => {
        this.$ham.classList.toggle('open');
      });
      if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
    },
  };
  app.initialize();
})();
