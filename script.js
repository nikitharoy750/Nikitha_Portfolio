const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

reveals.forEach(el => observer.observe(el));

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thanks! I will get back to you soon.';
  form.reset();
});