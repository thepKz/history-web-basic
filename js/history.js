(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var currentPath = location.pathname.replace(/\/$/, '/index.html').toLowerCase();
  var menu = document.querySelector('.mobile-menu');
  var toggle = document.querySelector('.menu-toggle');

  if (!reduced && window.gsap && window.ScrollTrigger) {
    document.documentElement.classList.add('has-motion');
  }

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener('pageshow', function () {
    if (!window.location.hash) window.scrollTo(0, 0);
  });

  document.querySelectorAll('.desktop-nav a,.mobile-menu a').forEach(function (link) {
    var targetPath = new URL(link.href, window.location.href).pathname.replace(/\/$/, '/index.html').toLowerCase();
    if (targetPath === currentPath) link.setAttribute('aria-current', 'page');
  });

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (menu && toggle) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  var topButton = document.createElement('button');
  topButton.type = 'button';
  topButton.className = 'scroll-top';
  topButton.setAttribute('aria-label', 'Cuộn lên đầu trang');
  topButton.textContent = '↑';
  document.body.appendChild(topButton);
  topButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });

  window.addEventListener('load', function () {
    if (!window.gsap || !window.ScrollTrigger) return;

    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    var header = document.querySelector('.site-header');
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -72',
      onEnter: function () { if (header) header.classList.add('is-scrolled'); },
      onLeaveBack: function () { if (header) header.classList.remove('is-scrolled'); }
    });
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -420',
      onEnter: function () { topButton.classList.add('is-visible'); },
      onLeaveBack: function () { topButton.classList.remove('is-visible'); }
    });

    if (reduced) return;

    var heroItems = document.querySelectorAll('.hero__content > *');
    if (heroItems.length) {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero__backdrop', { scale: 1.06, duration: 1.25 })
        .to(heroItems, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.68 }, '-=.72')
        .to('.hero__details', { autoAlpha: 1, x: 0, duration: 0.5 }, '-=.4');
    }

    ScrollTrigger.batch('.reveal-up,.milestone,.triad-item', {
      start: 'top 86%',
      once: true,
      onEnter: function (items) {
        gsap.fromTo(items, { autoAlpha: 0, y: 28 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.62,
          stagger: 0.08,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }
    });

    gsap.utils.toArray('.documentary-story img,.game-cta__image,.feature-image img').forEach(function (image) {
      gsap.fromTo(image, { scale: 1.08 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 0.7 }
      });
    });

    ScrollTrigger.refresh();
  });
}());
