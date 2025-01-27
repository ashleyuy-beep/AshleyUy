document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  let scrollPosition = 0;

  window.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent default vertical scroll

    // Calculate new scroll position
    scrollPosition += event.deltaY;

    // Get gallery's max scrollable width
    const maxScroll = gallery.scrollWidth - window.innerWidth;

    // Restrict scroll position to gallery bounds
    if (scrollPosition < 0) scrollPosition = 0;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;

    // Apply transform to gallery
    gallery.style.transform = `translateX(-${scrollPosition}px)`;
  });
});
