// JavaScript for Gallery and Modal Functionality

const gallery = document.querySelector(".gallery")
const modal = document.querySelector(".modal")
const modalImage = document.getElementById("modal-image")
const modalCaption = document.getElementById("modal-caption")
const closeModal = document.querySelector(".close")

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

