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
]

// Colors for background transition
const colors = [
  "#FFFFFF",
  "#F8F8F8",
  "#F0F0F0",
  "#E8E8E8",
  "#E0E0E0",
  "#D8D8D8",
  "#D0D0D0",
  "#C8C8C8",
  "#B8B8B8",
  "#A8A8A8",
  "#909090",
  "#707070",
  "#505050",
]

// Function to determine contrasting color
function getContrastColor(hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1)
  }

  // Convert to RGB value
  var r = Number.parseInt(hexcolor.substr(0, 2), 16)
  var g = Number.parseInt(hexcolor.substr(2, 2), 16)
  var b = Number.parseInt(hexcolor.substr(4, 2), 16)

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000

  // Check contrast
  return yiq >= 128 ? "black" : "white"
}

// Randomize and set images
function randomizeImages() {
  const gridContainer = document.getElementById("grid-container")
  gridContainer.innerHTML = "" // Clear existing content

  const shuffled = [...images].sort(() => 0.5 - Math.random())

  shuffled.forEach((img, index) => {
    const gridItem = document.createElement("div")
    gridItem.className = "grid-item"

    // Randomly decide the size of the grid item
    const size = Math.random() < 0.7 ? "small" : Math.random() < 0.9 ? "medium" : "large"

    switch (size) {
      case "small":
        gridItem.style.width = "30%"
        break
      case "medium":
        gridItem.style.width = "45%"
        break
      case "large":
        gridItem.style.width = "60%"
        break
    }

    const imgElement = document.createElement("img")
    imgElement.src = img
    imgElement.alt = `Image ${index + 1}`
    imgElement.style.opacity = "0"

    gridItem.appendChild(imgElement)
    gridContainer.appendChild(gridItem)

    setTimeout(() => {
      imgElement.style.opacity = "1"
    }, index * 50)
  })
}

// Handle scroll events
function handleScroll() {
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  const colorIndex = Math.floor(scrollPercentage / (100 / colors.length))
  const backgroundColor = colors[colorIndex]
  const contrastColor = getContrastColor(backgroundColor)

  document.body.style.backgroundColor = backgroundColor
  document.querySelector(".overlay").style.color = contrastColor
}

// Initialize
function init() {
  randomizeImages()
  window.addEventListener("scroll", handleScroll)
}

// Run initialization when DOM is loaded
document.addEventListener("DOMContentLoaded", init)

// Refresh images on page load and when the logo is clicked
window.addEventListener("load", randomizeImages)
document.querySelector(".site-logo").addEventListener("click", (e) => {
  e.preventDefault()
  randomizeImages()
})

