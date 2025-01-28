// JavaScript for Gallery and Modal Functionality

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.querySelector('.close');

// Dummy images for gallery
const images = [
  'images/Commercial/IMG_9475.JPG',
  'images/Commercial/DSCF0232.JPG',
  'images/Commercial/DSCF0239.JPG',
  'images/Commercial/DSCF0253.JPG',
  'images/Commercial/FOUND.JPG',
  'images/Commercial/IMG_0010.JPG',
  'images/Commercial/IMG_9983.JPG',
  'images/Commercial/IMG_0017.JPG',
  'images/Commercial/IMG_0024.JPG',
  'images/Commercial/IMG_0026.JPG',
  'images/Commercial/IMG_0032.JPG',
  'images/Commercial/IMG_8332.JPG',
  'images/Commercial/IMG_8420.JPG',
  'images/Commercial/IMG_8563.JPG',
  'images/Commercial/IMG_8569.JPG',
  'images/Commercial/IMG_8585.JPG',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER1.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER2.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER3.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER4.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER5.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER6.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER7.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER8.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER9.jpg',
  'images/Commercial/LAYOVERPASSPORT copy/LAYOVER10.jpg',
  'images/Commercial/passport-frontback aligned copy/black back 1 .jpg',
  'images/Commercial/passport-frontback aligned copy/dark brown back 1 .jpg',
  'images/Commercial/passport-frontback aligned copy/dark green back.jpg',
  'images/Commercial/passport-frontback aligned copy/light brown back 1.jpg',
  'images/Commercial/passport-frontback aligned copy/grey back 1.jpg',
  'images/Commercial/passport-frontback aligned copy/white back.jpg',
  'images/Commercial/passport-frontback aligned copy/avo green back.jpg',
  'images/Commercial/passport-frontback aligned copy/orange back 1.jpg',
  'images/Commercial/passport-frontback aligned copy/light blue back .jpg',
  'images/Commercial/passport-frontback aligned copy/yellow front .jpg',
];

// Populate gallery
images.forEach((src, index) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = `Image ${index + 1}`;
  img.dataset.index = index + 1;
  gallery.appendChild(img);

  img.addEventListener('click', () => {
    modalImage.src = src;
    modalCaption.textContent = `Image ${index + 1} of ${images.length}`;
    modal.classList.add('show');
    document.body.classList.add('modal-open'); // Disable scrolling when modal is open
    setTimeout(() => {
        modal.style.opacity = '1'; // Fade in modal
    }, 200); // Delay for smoother effect
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.opacity = '0'; // Fade out modal
  setTimeout(() => {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open'); // Re-enable scrolling when modal is closed
  }, 300); // Delay before hiding modal
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.opacity = '0'; // Fade out modal
    setTimeout(() => {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open'); // Re-enable scrolling when modal is closed
    }, 300); // Delay before hiding modal
  }
});

// Add animation class on page load
window.addEventListener('load', () => {
  const container = document.querySelector('.container');
  container.classList.add('animate');
  
  // Add a slight delay before fading in content
  setTimeout(() => {
    container.style.opacity = '1';
  }, 100); // Delay before fading in content
});
