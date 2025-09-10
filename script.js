// Basic JS for small interactive touches

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');

const msg = document.getElementById('formMsg');

form.addEventListener('submit', function (e) {

  e.preventDefault();

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const phone = document.getElementById('phone').value.trim();

  // simple validation

  if (!name || !email || !phone) {

    msg.style.color = 'crimson';

    msg.textContent = 'Please fill all fields.';

    return;

  }

  // fake send (you can integrate email API later)

  msg.style.color = 'green';

  msg.textContent = 'Message ready to send ✅ (this demo does not actually send email).';

  // clear message after a short pause

  setTimeout(() => {

    msg.textContent = '';

  }, 3000);

});