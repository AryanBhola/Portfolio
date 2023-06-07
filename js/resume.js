

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.cards .card', {
  delay: 200,
  distance: '100px',
  duration: 1000,
 // interval: 500,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});
ScrollReveal().reveal('.cards .card .card-buttons', {
  delay: 200,
  distance: '100px',
  duration: 1000,
  interval: 500,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});

ScrollReveal().reveal('.skill-card', {
  delay: 100,
  distance: '100px',
  duration: 1000,
  interval: 500,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});
ScrollReveal().reveal('h1', {
  delay: 500,
  distance: '100px',
  duration: 1000,
  interval: 500,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});
ScrollReveal().reveal('.flex-list li', {
  delay: 200,
  distance: '100px',
  duration: 1000,
  interval: 500,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});




});

      