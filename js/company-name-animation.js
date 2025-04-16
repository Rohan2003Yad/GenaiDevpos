document.addEventListener('DOMContentLoaded', function () {
  const companyName = document.getElementById('companyName');
  const text = companyName.textContent || "GenaiDevops";
  companyName.innerHTML = '';

  Array.from(text).forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.setProperty('--char-index', index);
    companyName.appendChild(span);
  });

  const video = document.querySelector('video');
  if (video) {
    video.play().catch(err => console.error("Video play failed:", err));
  }
});