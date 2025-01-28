// State management
const isGridView = false
const isScrolled = false

// DOM Elements
const app = document.getElementById("app")
const listView = document.getElementById("listView")
const gridItems = document.querySelectorAll(".grid-item img")

// Image data
const images = [
  "HOME PHOTOS/IMG1.jpeg",
  "HOME PHOTOS/IMG2.jpeg",
  "HOME PHOTOS/IMG3.jpeg",
  "HOME PHOTOS/IMG4.jpeg",
  "HOME PHOTOS/IMG5.jpeg",
  "HOME PHOTOS/IMG6.jpeg",
  "HOME PHOTOS/IMG7.jpeg",
  "HOME PHOTOS/IMG8.jpeg",
  "HOME PHOTOS/IMG9.jpeg",
  "HOME PHOTOS/IMG10.jpeg",
  "HOME PHOTOS/IMG11.jpeg",
  "HOME PHOTOS/IMG12.jpeg",
  "HOME PHOTOS/IMG13.jpeg",
  "HOME PHOTOS/IMG14.jpeg",
  "HOME PHOTOS/IMG15.jpeg",
  "HOME PHOTOS/IMG16.jpeg",
  "HOME PHOTOS/IMG17.jpeg",
  "HOME PHOTOS/IMG18.jpeg",
  "HOME PHOTOS/IMG19.jpeg",
  "HOME PHOTOS/IMG20.jpeg",
  "HOME PHOTOS/IMG21.jpeg",
  "HOME PHOTOS/IMG22.jpeg",
  "HOME PHOTOS/IMG23.jpeg",
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
  // Add more image paths here
]

// Colors for background transition
const colors = [
  "#FFFFFF", // Pure white
  "#F8F8F8", // Very light gray
  "#F0F0F0", // Light gray
  "#E8E8E8", // Softer gray
  "#E0E0E0", // Neutral gray
  "#D8D8D8", // Medium-light gray
  "#D0D0D0", // Medium gray
  "#C8C8C8", // Slightly darker gray
  "#B8B8B8", // Mid-gray with more contrast
  "#A8A8A8", // Medium-dark gray
  "#909090", // Darker gray
  "#707070", // Even darker gray
  "#505050", // Deep gray
];


// Randomize and set images
function randomizeImages() {
  const shuffled = [...images].sort(() => 0.5 - Math.random())
  gridItems.forEach((img, index) => {
    img.src = shuffled[index % shuffled.length]
    img.style.opacity = "0"
    setTimeout(() => {
      img.style.opacity = "1"
    }, index * 50)
  })
}

// Handle scroll events
function handleScroll() {
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  const colorIndex = Math.floor(scrollPercentage / (100 / colors.length))
  document.body.style.backgroundColor = colors[colorIndex]
}

// Initialize
function init() {
  randomizeImages()
  window.addEventListener("scroll", handleScroll)
}

// Run initialization when DOM is loaded
document.addEventListener("DOMContentLoaded", init)

// Refresh images on button click
document.querySelector(".view-toggle").addEventListener("click", randomizeImages)

