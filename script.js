// script.js
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;

  if (name && lastname && email) {
    alert('¡Gracias por completar el formulario de contacto!');
    contactForm.reset();
  } else {
    alert('Por favor, complete todos los campos.');
  }
});
