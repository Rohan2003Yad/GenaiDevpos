document.getElementById('learnMoreBtn').addEventListener('click', function () {
  document.getElementById('aboutModal').classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('aboutModal').classList.add('hidden');
});

document.getElementById('aboutModal').addEventListener('click', function (e) {
  if (e.target === this) {
    this.classList.add('hidden');
  }
});