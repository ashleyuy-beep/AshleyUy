// JavaScript for Gallery and Modal Functionality

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.querySelector('.close');

// Dummy images for gallery
const images = [
  'images/PERSONAL PROJECT/Untitled (3).JPG',
  'images/PERSONAL PROJECT/DSCF0466 copy.jpg',
  'images/PERSONAL PROJECT/DSCF0476 copy.jpg',
  'images/PERSONAL PROJECT/Image 2 (3).JPG',
  'images/PERSONAL PROJECT/Image 2 (4).JPG',
  'images/PERSONAL PROJECT/Image 3 (4).JPG',
  'images/PERSONAL PROJECT/Image 3 (5).JPG',
  'images/PERSONAL PROJECT/Image 4 (2).JPG',
  'images/PERSONAL PROJECT/Image 4.JPG',
  'images/PERSONAL PROJECT/Image 5.JPG',
  'images/PERSONAL PROJECT/Image 6 (3).JPG',
  'images/PERSONAL PROJECT/Image 7 (2).JPG',
  'images/PERSONAL PROJECT/IMG_0309.JPG',
  'images/PERSONAL PROJECT/IMG_0317.JPG',
  'images/PERSONAL PROJECT/IMG_0788.JPG',
  'images/PERSONAL PROJECT/IMG_0847.JPG',
  'images/PERSONAL PROJECT/IMG_3521.JPG',
  'images/PERSONAL PROJECT/IMG_7417.JPG',
  'images/PERSONAL PROJECT/IMG_7553.JPG',
  'images/PERSONAL PROJECT/P1020733.JPG',
  'images/PERSONAL PROJECT/P1020783.JPG',
  'images/PERSONAL PROJECT/P1020804.JPG',
  

  
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
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});