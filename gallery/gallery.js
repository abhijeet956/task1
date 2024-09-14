// Get the lightbox and image elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Get all gallery items
const galleryItems = document.querySelectorAll(".gallery-item");

// Add click event to each gallery item
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = item.src;
  });
});

// Close the lightbox when clicking the close button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
