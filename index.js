// Import GSAP library.  Make sure you have included the GSAP library in your HTML file.  For example:  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
import gsap from "gsap"


import gsap from "gsap"
const images = [
    "./HOME PHOTOS/IMG1.jpeg",
    "./HOME PHOTOS/IMG2.jpeg",
    "./HOME PHOTOS/IMG3.jpeg",
    "./HOME PHOTOS/IMG4.jpeg",
    "./HOME PHOTOS/IMG5.jpeg",
    "./HOME PHOTOS/IMG6.jpeg",
    "./HOME PHOTOS/IMG7.jpeg",
    "./HOME PHOTOS/IMG8.jpeg",
    "./HOME PHOTOS/IMG9.jpeg",
    "./HOME PHOTOS/IMG10.jpeg",
    "./HOME PHOTOS/IMG11.jpeg",
    "./HOME PHOTOS/IMG12.jpeg",
    "./HOME PHOTOS/IMG13.jpeg",
    "./HOME PHOTOS/IMG14.jpeg",
    "./HOME PHOTOS/IMG15.jpeg",
    "./HOME PHOTOS/IMG16.jpeg",
    "./HOME PHOTOS/IMG17.jpeg",
    "./HOME PHOTOS/IMG18.jpeg",
    "./HOME PHOTOS/IMG19.jpeg",
    "./HOME PHOTOS/IMG20.jpeg",
    "./HOME PHOTOS/IMG21.jpeg",
    "./HOME PHOTOS/IMG22.jpeg",
    "./HOME PHOTOS/IMG23.jpeg",
    "HOME PHOTOS/IMG24.jpeg",
    "HOME PHOTOS/IMG25.jpeg",
    "HOME PHOTOS/IMG26.jpeg",
    "HOME PHOTOS/IMG27.jpeg",
    "HOME PHOTOS/IMG28.jpeg",
    "HOME PHOTOS/IMG29.jpeg",
    "HOME PHOTOS/IMG30.jpeg",
    "HOME PHOTOS/IMG31.jpeg",
    "HOME PHOTOS/IMG32.jpeg",
    "HOME PHOTOS/IMG33.jpeg",
    "HOME PHOTOS/IMG34.jpeg",
    "HOME PHOTOS/IMG35.jpeg",
    "HOME PHOTOS/IMG36.jpeg",
    "HOME PHOTOS/IMG37.jpeg",
    "HOME PHOTOS/IMG38.jpeg",
    "HOME PHOTOS/IMG39.jpeg",
    "HOME PHOTOS/IMG40.jpeg",
    "HOME PHOTOS/IMG41.jpeg",
    "HOME PHOTOS/IMG42.jpeg",
    "HOME PHOTOS/IMG43.jpeg",
    "HOME PHOTOS/IMG44.jpeg",
    "HOME PHOTOS/IMG45.jpeg",
    "HOME PHOTOS/IMG46.jpeg",
    "HOME PHOTOS/IMG47.jpeg",
    "HOME PHOTOS/IMG48.jpeg",
    "HOME PHOTOS/IMG49.jpeg",
    "HOME PHOTOS/IMG50.jpeg",
    "HOME PHOTOS/IMG51.jpeg",
    "HOME PHOTOS/IMG52.jpeg",
    "HOME PHOTOS/IMG53.jpeg",
    "HOME PHOTOS/IMG54.jpeg",
    "HOME PHOTOS/IMG55.jpeg",
    "HOME PHOTOS/IMG56.jpeg",
    "HOME PHOTOS/IMG57.jpeg",
    "HOME PHOTOS/IMG58.jpeg",
    "HOME PHOTOS/IMG59.jpeg",
    "HOME PHOTOS/IMG60.jpeg",
    "HOME PHOTOS/IMG61.jpeg",
    "HOME PHOTOS/IMG62.jpeg",
    "HOME PHOTOS/IMG63.jpeg",
    "HOME PHOTOS/IMG64.jpeg",
    "HOME PHOTOS/IMG79.jpeg",
    "HOME PHOTOS/IMG81.jpeg",
    "HOME PHOTOS/IMG82.jpeg",
    "HOME PHOTOS/IMG88.jpeg",
    "HOME PHOTOS/IMG89.jpeg",
    "HOME PHOTOS/IMG90.jpeg",
    "HOME PHOTOS/IMG91.jpeg",

  ]

  const imageContainer = document.getElementById("image-container")
const textContainer = document.getElementById("text-container")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")

let imagesLoaded = 0
let sequenceComplete = false

function preloadImages() {
  // Clear existing images
  imageContainer.innerHTML = ""

  // Create and load all images
  images.forEach((src, index) => {
    const img = new Image()

    img.onload = () => {
      imagesLoaded++
      console.log(`Loaded image ${imagesLoaded} of ${images.length}`)
      if (imagesLoaded === images.length) {
        console.log("All images loaded, starting sequence")
        startImageSequence()
      }
    }

    img.onerror = () => {
      console.error(`Failed to load image: ${src}`)
      imagesLoaded++
      if (imagesLoaded === images.length) {
        startImageSequence()
      }
    }

    // Set image properties
    img.style.opacity = "0"
    img.style.zIndex = index + 1
    img.src = src

    // Add image to container
    imageContainer.appendChild(img)
  })
}

function startImageSequence() {
  const images = Array.from(imageContainer.children)

  gsap.to(images, {
    opacity: 1,
    duration: 0.1,
    stagger: {
      each: 0.1,
      onComplete: function () {
        const currentImage = this.targets()[0]
        if (currentImage === images[images.length - 1]) {
          showName()
        }
      },
    },
    onStart: () => {
      console.log("Starting image sequence")
    },
  })
}

function showName() {
  console.log("Showing name")
  imageContainer.style.display = "none"
  textContainer.style.display = "block"

  gsap.to([firstName, lastName], {
    opacity: 1,
    duration: 1,
    onComplete: () => {
      sequenceComplete = true
      document.body.style.cursor = "pointer"
      console.log("Name animation complete")
    },
  })
}

function splitName() {
  if (!sequenceComplete) return

  console.log("Splitting name")
  gsap.to(firstName, {
    x: "-100vw",
    duration: 1,
    ease: "power2.inOut",
  })

  gsap.to(lastName, {
    x: "100vw",
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      window.location.href = "home.html"
    },
  })
}

document.body.addEventListener("click", splitName)

// Start loading images when the page is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("Starting image preload")
  preloadImages()
})

