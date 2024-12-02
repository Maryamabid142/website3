let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);
