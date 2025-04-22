document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const images = [
        "images/Commercial/Alyssa Hot choco (2) Large.jpeg",
        "images/Commercial/Image 3 Large.jpeg",
        "images/Commercial/Image 4 (3) Large.jpeg",
        "images/Commercial/IMG_0221 2 Large.jpeg",
        "images/Commercial/IMG_0299 Large.jpeg",
        "images/Commercial/IMG_0300 Large.jpeg",
        "images/Commercial/IMG_0403 Large.jpeg",
        "images/Commercial/IMG_0407 Large.jpeg",
        "images/Commercial/Untitled (4) Large.jpeg",
    ];

    images.forEach((image, index) => {
        const item = document.createElement("div");
        item.className = "gallery-item";

        const img = document.createElement("img");
        img.src = image;
        img.alt = `Gallery image ${index + 1}`;

        img.onerror = () => {
            console.error(`Failed to load image: ${image}`);
            item.textContent = "Image failed to load";
        };

        item.appendChild(img);
        gallery.appendChild(item);
    });

    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener("mousedown", (e) => {
        isDown = true;
        gallery.classList.add("active");
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener("mouseleave", () => {
        isDown = false;
        gallery.classList.remove("active");
    });

    gallery.addEventListener("mouseup", () => {
        isDown = false;
        gallery.classList.remove("active");
    });

    gallery.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });

    gallery.addEventListener("touchstart", (e) => {
        isDown = true;
        startX = e.touches[0].pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener("touchend", () => {
        isDown = false;
    });

    gallery.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    }, { passive: true });
});
