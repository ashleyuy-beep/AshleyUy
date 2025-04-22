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
  'images/PERSONAL PROJECT/PERSONAL!!!! Large.jpeg',


];

const gallery = document.querySelector(".gallery")
const modal = document.querySelector(".modal")
const modalImage = document.getElementById("modal-image")
const thumbnailStrip = document.getElementById("thumbnail-strip")
const closeModal = document.querySelector(".close")
const loadingScreen = document.getElementById("loading-screen")

// Helper function to show loading overlay
// function showLoadingOverlay() {
//   const loadingOverlay = document.createElement("div")
//   loadingOverlay.classList.add("loading-overlay")
//   const spinner = document.createElement("div")
//   spinner.classList.add("loading-spinner")
//   loadingOverlay.appendChild(spinner)
//   document.body.appendChild(loadingOverlay)
//   return loadingOverlay
// }

// Modified populateGallery function
function populateGallery() {
  console.log("Populating gallery...")
  let loadedImages = 0

  images.forEach((src, index) => {
    const img = document.createElement("img")
    img.src = src
    img.alt = `Image ${index + 1}`
    img.dataset.index = index

    img.addEventListener("load", () => {
      console.log(`Image ${index + 1} loaded successfully`)
      loadedImages++
      img.classList.add("loaded")

      if (loadedImages === images.length) {
        setTimeout(() => {
          loadingScreen.style.opacity = "0"
          setTimeout(() => {
            loadingScreen.style.display = "none"
          }, 500)
        }, 1000)
      }
    })

    img.addEventListener("error", () => {
      console.error(`Failed to load image ${index + 1}: ${src}`)
      loadedImages++
    })

    img.addEventListener("click", openModal)
    gallery.appendChild(img)
  })
}

// Modified openModal function
function openModal(e) {
  const clickedImage = e.target
  const index = Number(clickedImage.dataset.index)

  // Clear existing thumbnails
  thumbnailStrip.innerHTML = ""

  // Create thumbnails
  images.forEach((src, i) => {
    const thumbnail = document.createElement("img")
    thumbnail.src = src
    thumbnail.alt = `Thumbnail ${i + 1}`
    thumbnail.classList.add("thumbnail")
    if (i === index) thumbnail.classList.add("active")

    thumbnail.addEventListener("click", () => {
      modalImage.src = src
      // Update active thumbnail
      document.querySelectorAll(".thumbnail").forEach((thumb) => {
        thumb.classList.remove("active")
      })
      thumbnail.classList.add("active")
    })

    thumbnailStrip.appendChild(thumbnail)
  })

  modalImage.src = clickedImage.src
  modalImage.dataset.index = index
  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

// Modified close modal function
function closeModalFunction() {
  modal.classList.remove("show")
  document.body.style.overflow = ""
  // Clear thumbnails when closing
  thumbnailStrip.innerHTML = ""
}

// Keep your existing event listeners
closeModal.addEventListener("click", closeModalFunction)

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFunction()
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModalFunction()
  }
})

// Initialize the gallery when the page loads
window.addEventListener("load", () => {
  console.log("Page loaded")
  populateGallery()
})

// Add touch support for mobile devices
let touchStartX = 0
let touchEndX = 0

function handleSwipe() {
  if (touchStartX - touchEndX > 50) {
    // Swipe left, show next image
    showNextImage()
  } else if (touchEndX - touchStartX > 50) {
    // Swipe right, show previous image
    showPreviousImage()
  }
}

modal.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX
})

modal.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
})

function showNextImage() {
  const currentIndex = Number.parseInt(modalImage.dataset.index)
  const nextIndex = (currentIndex + 1) % images.length
  updateModalImage(nextIndex)
}

function showPreviousImage() {
  const currentIndex = Number.parseInt(modalImage.dataset.index)
  const previousIndex = (currentIndex - 1 + images.length) % images.length
  updateModalImage(previousIndex)
}

function updateModalImage(index) {
  modalImage.src = images[index]
  modalImage.dataset.index = index
  updateActiveThumbnail(index)
}

function updateActiveThumbnail(index) {
  const thumbnails = document.querySelectorAll(".thumbnail")
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add("active")
    } else {
      thumb.classList.remove("active")
    }
  })
}

console.log("JavaScript file loaded")

