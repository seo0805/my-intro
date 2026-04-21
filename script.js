// script.js – Scroll animation using Intersection Observer

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach(el => observer.observe(el));
});
