document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.cards .card', {
  delay: 400,
  distance: '100px',
  duration: 2000,
  interval: 500,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});

ScrollReveal().reveal('.projects', {
  delay: 600,
  distance: '50px',
  duration: 1500,
  easing: 'ease-out',
  interval: 300,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});

ScrollReveal().reveal('.skill-card', {
  delay: 800,
  distance: '80px',
  duration: 1800,
  easing: 'ease-in-out',
  interval: 400,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});

ScrollReveal().reveal('.contact', {
  delay: 1000,
  distance: '120px',
  duration: 2000,
  easing: 'ease-in-out',
  interval: 500,
  beforeReveal: function (el) {
    el.classList.add('active');
  }
});

});