// Image data
const images = [
  { src: "HOME PHOTOS/IMG1.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG2.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG3.jpeg", href: "/sameold.html" },
  { src: "HOME PHOTOS/IMG4.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG5.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG6.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG7.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG8.jpeg", href: "/sameold.html" },
  { src: "HOME PHOTOS/IMG9.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG10.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG11.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG12.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG13.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG14.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG15.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG16.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG17.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG18.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG19.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG20.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG20.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG21.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG22.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG23.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG24.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG25.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG26.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG27.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG28.jpeg", href: "/sameold.html" },
  { src: "HOME PHOTOS/IMG29.jpeg", href: "/sameold.html" },
  { src: "HOME PHOTOS/IMG30.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG31.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG32.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG33.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG34.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG35.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG36.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG37.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG38.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG39.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG40.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG41.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG42.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG43.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG44.jpeg", href: "/sameold.html" },
  { src: "HOME PHOTOS/IMG45.jpeg", href: "/sameold.html" },
  { src: "HOME PHOTOS/IMG46.jpeg", href: "/sameold.html" },
  { src: "HOME PHOTOS/IMG47.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG48.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG49.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG50.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG51.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG52.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG53.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG54.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG55.jpeg", href: "/sameold.html" },
  { src: "HOME PHOTOS/IMG56.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG57.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG58.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG59.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG60.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG61.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG62.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG63.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG64.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG79.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG81.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG82.jpeg", href: "/foundobjects.html" },
  { src: "HOME PHOTOS/IMG88.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG89.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG90.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG91.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG92.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG93.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG94.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG95.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG96.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG97.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG98.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG99.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG100.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG101.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG102.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG103.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG104.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG105.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG106.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG107.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG108.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG109.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG110.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG111.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG112.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG113.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG114.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG115.jpeg", href: "/commercial.html" },
  { src: "HOME PHOTOS/IMG116.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG117.jpeg", href: "/crtz.html" },
  { src: "HOME PHOTOS/IMG118.jpeg", href: "/sameold.html" },
]


// Function to determine contrasting color
function getContrastColor(hexcolor) {
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1)
  }
  var r = Number.parseInt(hexcolor.substr(0, 2), 16)
  var g = Number.parseInt(hexcolor.substr(2, 2), 16)
  var b = Number.parseInt(hexcolor.substr(4, 2), 16)
  var yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "black" : "black"
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

    const anchorElement = document.createElement("a")
    anchorElement.href = img.href

    const imgElement = document.createElement("img")
    imgElement.src = img.src
    imgElement.alt = `Image ${index + 1}`

    // Add error handling for images
    imgElement.onerror = function () {
      this.style.display = "none"
    }

    imgElement.onload = () => {
      gridItem.classList.add("loaded")
    }

    anchorElement.appendChild(imgElement)
    gridItem.appendChild(anchorElement)
    gridContainer.appendChild(gridItem)
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
window.addEventListener("load", () => {
  randomizeImages()
  window.scrollTo(0, 0)
})

document.querySelector(".site-logo").addEventListener("click", (e) => {
  e.preventDefault()
  randomizeImages()
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

