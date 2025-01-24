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
    "images/PERSONAL PROJECT/P1020783.JPG",
  ];

  // GSAP Timeline
  const timeline = gsap.timeline({
    defaults: { duration: 1.2, ease: "power3.inOut" }, // Smoother easing
  });

  // Eye-opening effect for the first image
  timeline
    .set(heroImage, { clipPath: "inset(50% 50% 50% 50%)" }) // Start with a closed eye
    .to(heroImage, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5 }) // Smoothly open the eye
    .to(heroImage, { scale: 1.05, duration: 1.2 }, "<") // Subtle zoom for effect
    .to(heroImage, { scale: 1, duration: 0.8 }); // Smoothly reset zoom

  // Morphing through the images
  imageSequence.forEach((src, index) => {
    if (index === 0) return; // Skip the first image as it's already shown

    timeline
      .to(heroImage, { opacity: 0, duration: 0.6 }, "+=0.8") // Smooth fade out
      .call(() => {
        heroImage.src = src; // Update image source
      })
      .to(heroImage, { opacity: 1, duration: 0.8 }); // Smooth fade in
  });

  // Show the final image prominently in the center
  timeline
    .to(heroImage, { opacity: 0, duration: 0.6 }, "+=0.8") // Smooth fade out
    .call(() => {
      heroImage.src = "images/PERSONAL PROJECT/IMG_4734.JPG"; // Set the final image
    })
    .to(heroImage, {
      opacity: 1,
      scale: 1, // Subtle zoom for emphasis
      duration: 1.5,
      ease: "power2.inOut",
    })
    .to(heroImage, {
      scale: 1, // Smoothly reset zoom
      duration: 1,
    });

  // Display the hero description below the final image
  timeline
    .fromTo(
      heroDescription,
      { opacity: 0, y: 30 }, // Start slightly below and invisible
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, // Smooth fade-in and slide-up
      "+=0.6"
    )
    .to("body", { overflow: "auto" }); // Enable scrolling after animation
});
