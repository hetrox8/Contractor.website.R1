// Mobile menu toggle
document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});