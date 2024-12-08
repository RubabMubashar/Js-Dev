const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Function to update the slider's position
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-cycle through images
function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

// Set interval for auto-slide
let slideInterval = setInterval(autoSlide, 3000);

// Navigation controls
prevButton.addEventListener("click", () => {
  clearInterval(slideInterval);
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
  slideInterval = setInterval(autoSlide, 3000);
});

nextButton.addEventListener("click", () => {
  clearInterval(slideInterval);
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
  slideInterval = setInterval(autoSlide, 3000);
});
