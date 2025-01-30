// JavaScript for Gallery and Modal Functionality

const gallery = document.querySelector(".gallery")
const modal = document.querySelector(".modal")
const modalImage = document.getElementById("modal-image")
const modalCaption = document.getElementById("modal-caption")
const closeModal = document.querySelector(".close")

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

// Add this new function for the loading overlay
function showLoadingOverlay() {
  const overlay = document.createElement("div")
  overlay.className = "loading-overlay"
  const spinner = document.createElement("div")
  spinner.className = "loading-spinner"
  overlay.appendChild(spinner)
  document.body.appendChild(overlay)

  return overlay
}

// Populate gallery
function populateGallery() {
  console.log("Populating gallery...")
  const loadingOverlay = showLoadingOverlay()
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
          loadingOverlay.classList.add("hidden")
          setTimeout(() => loadingOverlay.remove(), 500)
        }, 500)
      }
    })

    img.addEventListener("error", () => {
      console.error(`Failed to load image ${index + 1}: ${src}`)
      loadedImages++
    })

    img.addEventListener("click", openModal)
    gallery.appendChild(img)
  })
  console.log("Gallery population complete")
}

function openModal(e) {
  const src = e.target.src
  const index = Number.parseInt(e.target.dataset.index)
  modalImage.src = src
  modalCaption.textContent = `Image ${index + 1} of ${images.length}`
  modal.classList.add("show")
  document.body.style.overflow = "hidden" // Disable scrolling when modal is open
}

function closeModalFunction() {
  modal.classList.remove("show")
  document.body.style.overflow = "" // Re-enable scrolling when modal is closed
}

// Close modal
closeModal.addEventListener("click", closeModalFunction)

// Close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFunction()
  }
})

// Close modal on Escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModalFunction()
  }
})

// Add animation class on page load
window.addEventListener("load", () => {
  console.log("Page loaded")
  document.body.classList.add("loaded")
  populateGallery()
})

// Edit caption functionality
modalCaption.addEventListener("click", function () {
  const currentText = this.textContent
  const input = document.createElement("input")
  input.value = currentText
  this.textContent = ""
  this.appendChild(input)
  input.focus()

  input.addEventListener("blur", function () {
    modalCaption.textContent = this.value
  })

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      this.blur()
    }
  })
})

console.log("JavaScript file loaded")

// Lazy loading images (This part remains unchanged from the original code)
const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        const src = img.getAttribute("data-src")

        img.setAttribute("src", src)
        img.classList.add("fade-in")

        observer.disconnect()
      }
    })
  })

  io.observe(target)
}

// Apply lazy loading to gallery images (This part remains unchanged from the original code)
document.querySelectorAll(".gallery img").forEach(lazyLoad)
