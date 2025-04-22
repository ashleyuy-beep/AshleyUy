document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const images = [
        "images/Commercial/IMG_8420.JPG",
        "images/Commercial/IMG_8563.JPG",
        "images/Commercial/IMG_8569.JPG",
        "images/Commercial/IMG_8341 Large.jpeg",
        "images/Commercial/IMG_8298 Large.jpeg",
        "images/Commercial/IMG_9475.JPG",
        "images/Commercial/IMG_9692 Large.jpeg",
        "images/Commercial/IMG_9892 Large.jpeg",
        "images/Commercial/IMG_9791 Large.jpeg",
        "images/Commercial/IMG_9796 Large.jpeg",
        "images/Commercial/IMG_9849 Large.jpeg",
        "images/Commercial/FOUND.JPG",
        "images/Commercial/DSCF0253.JPG",
        "images/Commercial/DSCF0241.JPG",
        "images/Commercial/DSCF0241 copy.JPG",
        "images/Commercial/DSCF0239.JPG",
        "images/Commercial/DSCF0232.JPG",
        "images/Commercial/passport-frontback aligned copy/avo green back.jpg",
        "images/Commercial/passport-frontback aligned copy/avo green front.jpg",
        "images/Commercial/passport-frontback aligned copy/black back 1 .jpg",
        "images/Commercial/passport-frontback aligned copy/black front.jpg",
        "images/Commercial/passport-frontback aligned copy/dark brown back 1 .jpg",
        "images/Commercial/passport-frontback aligned copy/dark brown front.jpg",
        "images/Commercial/passport-frontback aligned copy/dark green back.jpg",
        "images/Commercial/passport-frontback aligned copy/green front 1.jpg",
        "images/Commercial/passport-frontback aligned copy/grey back 1.jpg",
        "images/Commercial/passport-frontback aligned copy/grey front.jpg",
        "images/Commercial/passport-frontback aligned copy/light blue back .jpg",
        "images/Commercial/passport-frontback aligned copy/light blue .jpg",
        "images/Commercial/passport-frontback aligned copy/light brown back 1.jpg",
        "images/Commercial/passport-frontback aligned copy/light brown front 1.jpg",
        "images/Commercial/passport-frontback aligned copy/orange back 1.jpg",
        "images/Commercial/passport-frontback aligned copy/orange front 1.jpg",
        "images/Commercial/passport-frontback aligned copy/white back.jpg",
        "images/Commercial/passport-frontback aligned copy/white front .jpg",
        "images/Commercial/passport-frontback aligned copy/yellow back .jpg",
        "images/Commercial/passport-frontback aligned copy/yellow front .jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER9.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER8.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER4.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER5.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER6.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER10.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER3.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER7.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER2.jpg",
        "images/Commercial/LAYOVERPASSPORT copy/LAYOVER1.jpg",


        
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
