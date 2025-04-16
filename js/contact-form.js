document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log({ name, email, message });

  alert('Thank you for contacting us! We will get back to you soon.');
  this.reset();
});