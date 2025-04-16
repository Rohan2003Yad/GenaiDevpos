function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
  document.body.style.overflow = 'auto';
}

document.addEventListener('click', function (event) {
  const modals = document.querySelectorAll('[id$="Modal"]');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
});