// Select all elements
const navLinks = document.querySelectorAll('nav ul li a');
const projectCards = document.querySelectorAll('.project-card');
const learnMoreButton = document.querySelector('.hero button');
const contactForm = document.querySelector('#contact form');
const contactInputs = contactForm.querySelectorAll('input, textarea');

// Add event listeners
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

projectCards.forEach(card => {
  card.addEventListener('click', event => {
    card.classList.toggle('expanded');
  });
});

learnMoreButton.addEventListener('click', event => {
  const heroSection = document.querySelector('.hero');
  heroSection.scrollIntoView({ behavior: 'smooth' });
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  console.log(formData);
  // You can send the form data to your server or API here
  alert('Form submitted successfully!');
});

contactInputs.forEach(input => {
  input.addEventListener('focus', event => {
    input.classList.add('focused');
  });
  input.addEventListener('blur', event => {
    input.classList.remove('focused');
  });
});