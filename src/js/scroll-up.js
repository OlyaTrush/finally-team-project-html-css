(() => {
  var scrollUp = document.querySelector('.scroll-up');

  window.addEventListener('scroll', trackScroll);
  scrollUp.addEventListener('click', backToTop);
  scrollUp.addEventListener('touchstart', backToTop);

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > 0.5 * coords) {
      scrollUp.classList.add('scroll-up--show');
    }
    if (scrolled < 0.5 * coords) {
      scrollUp.classList.remove('scroll-up--show');
    }
  }
})();
