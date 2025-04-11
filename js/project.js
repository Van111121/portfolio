const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll('.project-card').forEach(card => {
  const video = card.querySelector('video');

  card.addEventListener('mouseenter', () => {
    video.play();
    customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    customCursor.style.transform = 'translate(-50%, -50%) scale(0)';
  });
});