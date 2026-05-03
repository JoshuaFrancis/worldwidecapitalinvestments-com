(function(){
  const nav = document.querySelector('[data-nav]');
  if(!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, {passive: true});
})();
