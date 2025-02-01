// Your existing images array
const images = [
  "images/Commercial/IMG_8420.JPG",
  "images/Commercial/IMG_8563.JPG",
  "images/Commercial/IMG_8569.JPG",
  "images/Commercial/IMG_8585.JPG",
  "images/Commercial/BALENCIAGA SADA Large.jpeg",
  "images/Commercial/Image 9 Large.jpeg",
  "images/Commercial/IMG_2687 Large.jpeg",
  "images/Commercial/IMG_2736 Large.jpeg",
  "images/Commercial/IMG_2782 Large.jpeg",
  "images/Commercial/IMG_2838 Large.jpeg",
  "images/Commercial/IMG_3334 Large.jpeg",
  "images/Commercial/IMG_3353 Large.jpeg",
  "images/Commercial/IMG_8298 Large.jpeg",
  "images/Commercial/IMG_9791 Large.jpeg",
  "images/Commercial/IMG_9796 Large.jpeg",
  'images/Commercial/IMG_0166 Large.jpeg',
  'images/Commercial/Alyssa Hot choco (2) Large.jpeg',
  'images/Commercial/Image 3 Large.jpeg',
  'images/Commercial/Image 4 (3) Large.jpeg',
  'images/Commercial/IMG_0220 Large.jpeg',
  'images/Commercial/IMG_0167 Large.jpeg',
  'images/Commercial/IMG_0240 Large.jpeg',
  'images/Commercial/IMG_0246 Large.jpeg',
  'images/Commercial/IMG_0254 Large.jpeg',
  'images/Commercial/IMG_0255 Large.jpeg',
  'images/Commercial/IMG_0279 Large.jpeg',
  'images/Commercial/IMG_0288 Large.jpeg',
  'images/Commercial/IMG_0291 Large.jpeg',
  'images/Commercial/IMG_0272 Large.jpeg',
  'images/Commercial/IMG_0299 Large.jpeg',
  'images/Commercial/IMG_0300 Large.jpeg',
  'images/Commercial/IMG_0337 Large.jpeg',
  'images/Commercial/IMG_0403 Large.jpeg',
  'images/Commercial/IMG_0407 Large.jpeg',
  'images/Commercial/IMG_0338 Large.jpeg',
  'images/Commercial/Untitled (4) Large.jpeg',
  'images/Commercial/IMG_0324 Large.jpeg',
  'images/Commercial/Untitled (5) Large.jpeg',
  'images/Commercial/Untitled (4) (2) Large.jpeg',
  "images/Commercial/unnamed-4.jpg",
  "images/Commercial/unnamed.jpg",
  "images/Commercial/unnamed-3.jpg",
  "images/Commercial/unnamed-2.jpg",
  "images/Commercial/DSCF0232.JPG",
  "images/Commercial/DSCF0239.JPG",
  "images/Commercial/DSCF0241 copy.JPG",
  "images/Commercial/DSCF0241.JPG",
  "images/Commercial/DSCF0253.JPG",
  "images/Commercial/FOUND.JPG",
  "images/Commercial/IMG_0010.JPG",
  "images/Commercial/IMG_0017.JPG",
  "images/Commercial/IMG_0018.JPG",
  "images/Commercial/IMG_0024.JPG",
  "images/Commercial/IMG_0026.JPG",
  "images/Commercial/IMG_0032.JPG",
  "images/Commercial/test edits/000017550001 Medium.png",
  "images/Commercial/test edits/000017550002 Medium.png",
  "images/Commercial/test edits/000017550006 copy Medium.png",
  "images/Commercial/test edits/000017550007 Medium.png",
  "images/Commercial/test edits/000017550008 Medium.png",
  "images/Commercial/test edits/000017560001 Medium.png",
  "images/Commercial/test edits/000017560003 Medium.png",
  "images/Commercial/test edits/000017560008 Medium.png",
  "images/Commercial/test edits/Image 6 Medium.png",
  "images/Commercial/passport-frontback aligned copy/black back 1 .jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER8.jpg",
  "images/Commercial/passport-frontback aligned copy/dark brown back 1 .jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER3.jpg",
  "images/Commercial/passport-frontback aligned copy/dark green back.jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER5.jpg",
  "images/Commercial/passport-frontback aligned copy/avo green back.jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER9.jpg",
  "images/Commercial/passport-frontback aligned copy/grey back.jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER6.jpg",
  "images/Commercial/passport-frontback aligned copy/white back.jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER2.jpg",
  "images/Commercial/passport-frontback aligned copy/yellow back .jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER1.jpg",
  "images/Commercial/passport-frontback aligned copy/light blue back 1.jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER10.jpg",
  "images/Commercial/passport-frontback aligned copy/light brown back.jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER4.jpg",
  "images/Commercial/passport-frontback aligned copy/orange back.jpg",
  "images/Commercial/LAYOVERPASSPORT copy/LAYOVER7.jpg",
]

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

