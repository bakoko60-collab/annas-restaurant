// === IMAGE LIGHTBOX ===
const images = document.querySelectorAll('.card img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
const lightboxImage = document.createElement('img');
lightbox.appendChild(lightboxImage);
document.body.appendChild(lightbox);

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImage.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// === CATEGORY FILTER ===
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    cards.forEach(card => {
      if (card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
