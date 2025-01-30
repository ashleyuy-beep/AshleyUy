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
  'images/PERSONAL PROJECT/IMG_7579.JPG',
  'images/PERSONAL PROJECT/IMG_1042.JPG',
  'images/PERSONAL PROJECT/DSCF0425 Large.jpeg',
  'images/PERSONAL PROJECT/Image 1 Large.jpeg',
  'images/PERSONAL PROJECT/Image 3 Large.jpeg',
  'images/PERSONAL PROJECT/Image 4 Large 3.13.20 PM.jpeg',
  'images/PERSONAL PROJECT/Image 5 (2) Large.jpeg',
  'images/PERSONAL PROJECT/Image 6 (2) Large.jpeg',
  'images/PERSONAL PROJECT/Image 7 (3) Large.jpeg',
  'images/PERSONAL PROJECT/Image 7 (4) Large.jpeg',
  'images/PERSONAL PROJECT/Image Large.jpeg',
  'images/PERSONAL PROJECT/IMG_4892 Large.jpeg',
  'images/PERSONAL PROJECT/IMG_5533 Large.jpeg',
  'images/PERSONAL PROJECT/P1020888 Large.jpeg',
  'images/PERSONAL PROJECT/P1020895 Large.jpeg',
  'images/PERSONAL PROJECT/P1020896 Large.jpeg',


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
