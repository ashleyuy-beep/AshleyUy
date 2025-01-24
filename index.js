// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.querySelector(".team-img img");
  const heroDescription = document.querySelector(".hero-description");

  // Array of images for the animation sequence
  const imageSequence = [
    "images/PERSONAL PROJECT/DSCF0466 copy.jpg",
    "images/PERSONAL PROJECT/DSCF0476 copy.jpg",
    "images/PERSONAL PROJECT/Image 3 (4).JPG",
    "images/PERSONAL PROJECT/IMG_3521.JPG",
    "images/PERSONAL PROJECT/IMG_7417.JPG",
    "images/PERSONAL PROJECT/IMG_4734.JPG",
  ];

  // GSAP Timeline
  const timeline = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out" },
  });

  // Eye-opening effect for the first image
  timeline
    .set(heroImage, { clipPath: "inset(50% 50% 50% 50%)" }) // Start with a closed eye
    .to(heroImage, { clipPath: "inset(0% 0% 0% 0%)" }) // Open the eye
    .to(heroImage, { scale: 1.1 }, "<") // Slight zoom for effect
    .to(heroImage, { scale: 1, duration: 0.5 }); // Reset zoom

  // Morphing through the images
  imageSequence.forEach((src, index) => {
    if (index === 0) return; // Skip the first image as it's already shown

    timeline
      .to(heroImage, { opacity: 0, duration: 0.5 }, "+=0.5") // Fade out current image
      .call(() => {
        heroImage.src = src; // Update image source
      })
      .to(heroImage, { opacity: 1, duration: 0.5 }); // Fade in new image
  });

  // Transition into the main content
  timeline
    .fromTo(
      heroDescription,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "+=0.5"
    )
    .to("body", { overflow: "auto" }); // Enable scrolling after animation
});
