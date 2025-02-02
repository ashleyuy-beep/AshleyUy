// Image data
const images = [
  { src: "HOME PHOTOS/IMG1.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG2.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG3.jpeg", href: "" },
  { src: "HOME PHOTOS/IMG4.jpeg", href: "" },
  { src: "HOME PHOTOS/IMG5.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG6.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG7.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG8.jpeg", href: "" },
  { src: "HOME PHOTOS/IMG9.jpeg", href: "" },
  { src: "HOME PHOTOS/IMG10.jpeg", href: "/page10" },
  { src: "HOME PHOTOS/IMG11.jpeg", href: "/page11" },
  { src: "HOME PHOTOS/IMG12.jpeg", href: "/page12" },
  { src: "HOME PHOTOS/IMG13.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG14.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG15.jpeg", href: "/page15" },
  { src: "HOME PHOTOS/IMG16.jpeg", href: "/page16" },
  { src: "HOME PHOTOS/IMG17.jpeg", href: "/page17" },
  { src: "HOME PHOTOS/IMG18.jpeg", href: "/page18" },
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
  { src: "HOME PHOTOS/IMG28.jpeg", href: "/page28" },
  { src: "HOME PHOTOS/IMG29.jpeg", href: "/page29" },
  { src: "HOME PHOTOS/IMG30.jpeg", href: "/page30" },
  { src: "HOME PHOTOS/IMG31.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG32.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG33.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG34.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG35.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG36.jpeg", href: "/page36" },
  { src: "HOME PHOTOS/IMG37.jpeg", href: "/page37" },
  { src: "HOME PHOTOS/IMG38.jpeg", href: "/page38" },
  { src: "HOME PHOTOS/IMG39.jpeg", href: "/page39" },
  { src: "HOME PHOTOS/IMG40.jpeg", href: "/page40" },
  { src: "HOME PHOTOS/IMG41.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG42.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG43.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG44.jpeg", href: "/page44" },
  { src: "HOME PHOTOS/IMG45.jpeg", href: "/page45" },
  { src: "HOME PHOTOS/IMG46.jpeg", href: "/page46" },
  { src: "HOME PHOTOS/IMG47.jpeg", href: "/page47" },
  { src: "HOME PHOTOS/IMG48.jpeg", href: "/page48" },
  { src: "HOME PHOTOS/IMG49.jpeg", href: "/page49" },
  { src: "HOME PHOTOS/IMG50.jpeg", href: "/page50" },
  { src: "HOME PHOTOS/IMG51.jpeg", href: "/page51" },
  { src: "HOME PHOTOS/IMG52.jpeg", href: "/page52" },
  { src: "HOME PHOTOS/IMG53.jpeg", href: "/page53" },
  { src: "HOME PHOTOS/IMG54.jpeg", href: "/page54" },
  { src: "HOME PHOTOS/IMG55.jpeg", href: "/page55" },
  { src: "HOME PHOTOS/IMG56.jpeg", href: "/page56" },
  { src: "HOME PHOTOS/IMG57.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG58.jpeg", href: "/page58" },
  { src: "HOME PHOTOS/IMG59.jpeg", href: "/page59" },
  { src: "HOME PHOTOS/IMG60.jpeg", href: "/page60" },
  { src: "HOME PHOTOS/IMG61.jpeg", href: "/page61" },
  { src: "HOME PHOTOS/IMG62.jpeg", href: "/page62" },
  { src: "HOME PHOTOS/IMG63.jpeg", href: "/page63" },
  { src: "HOME PHOTOS/IMG64.jpeg", href: "/page64" },
  { src: "HOME PHOTOS/IMG79.jpeg", href: "/page79" },
  { src: "HOME PHOTOS/IMG81.jpeg", href: "/page81" },
  { src: "HOME PHOTOS/IMG82.jpeg", href: "/page82" },
  { src: "HOME PHOTOS/IMG88.jpeg", href: "/page88" },
  { src: "HOME PHOTOS/IMG89.jpeg", href: "/page89" },
  { src: "HOME PHOTOS/IMG90.jpeg", href: "/page90" },
  { src: "HOME PHOTOS/IMG91.jpeg", href: "/page91" },
  { src: "HOME PHOTOS/IMG92.jpeg", href: "/page92" },
  { src: "HOME PHOTOS/IMG93.jpeg", href: "/personal.html" },
  { src: "HOME PHOTOS/IMG94.jpeg", href: "/page94" },
  { src: "HOME PHOTOS/IMG95.jpeg", href: "/page95" },
  { src: "HOME PHOTOS/IMG96.jpeg", href: "/page96" },
  { src: "HOME PHOTOS/IMG97.jpeg", href: "/page97" },
  { src: "HOME PHOTOS/IMG98.jpeg", href: "/page98" },
  { src: "HOME PHOTOS/IMG99.jpeg", href: "/page99" },
  { src: "HOME PHOTOS/IMG100.jpeg", href: "/page100" },
  { src: "HOME PHOTOS/IMG101.jpeg", href: "/page101" },
  { src: "HOME PHOTOS/IMG102.jpeg", href: "/page102" },
  { src: "HOME PHOTOS/IMG103.jpeg", href: "/page103" },
  { src: "HOME PHOTOS/IMG104.jpeg", href: "/page104" },
  { src: "HOME PHOTOS/IMG105.jpeg", href: "/page105" },
  { src: "HOME PHOTOS/IMG106.jpeg", href: "/page106" },
  { src: "HOME PHOTOS/IMG107.jpeg", href: "/page107" },
  { src: "HOME PHOTOS/IMG108.jpeg", href: "/page108" },
  { src: "HOME PHOTOS/IMG109.jpeg", href: "/page109" },
  { src: "HOME PHOTOS/IMG110.jpeg", href: "/page110" },
  { src: "HOME PHOTOS/IMG111.jpeg", href: "/page111" },
  { src: "HOME PHOTOS/IMG112.jpeg", href: "/page112" },
  { src: "HOME PHOTOS/IMG113.jpeg", href: "/page113" },
  { src: "HOME PHOTOS/IMG114.jpeg", href: "/page114" },
  { src: "HOME PHOTOS/IMG115.jpeg", href: "/page115" },
  { src: "HOME PHOTOS/IMG116.jpeg", href: "/page116" },
  { src: "HOME PHOTOS/IMG117.jpeg", href: "/page117" },
]

// Colors for background transition
const colors = [
  "#FFFFFF", // white
  "#FAF9F6", // very light beige
  "#F5F5DC", // light beige
  "#EFEBD1", // beige
  "#E8E1C8", // soft beige
  "#D9D0B7", // muted beige
  "#D1C7A6", // light tan beige
  "#C9B79D", // warm beige
  "#BBA48C", // darker beige
  "#B19B7A", // tan beige
  "#9A8A68", // rich beige
  "#8F7A57", // deeper beige
  "#7D6A46", // darker beige
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

