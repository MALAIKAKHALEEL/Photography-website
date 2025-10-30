const scrollArrow = document.querySelector('.scroll-down');
if (scrollArrow) {
  scrollArrow.addEventListener('click', () => {
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
  });
}

// Gallery Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const photos = document.querySelectorAll('.photo');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    photos.forEach(photo => {
      if (filter === 'all' || photo.classList.contains(filter)) {
        photo.style.display = 'block';
      } else {
        photo.style.display = 'none';
      }
    });
  });
});

// Lightbox viewer
photos.forEach(photo => {
  photo.addEventListener('click', () => {
    const src = photo.querySelector('img').src;
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `<div class='overlay'></div><img src='${src}' alt='Photo' class='lightbox-img'>`;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});

// Contact Form Submit
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}, your message has been sent!`);
    form.reset();
  });
}
