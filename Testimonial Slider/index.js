const testimonials = document.querySelectorAll(".testimonial");
const playPauseButton = document.querySelector(".play-pause");

let currentTestimonialIndex = 0;
let timer;

function showNextTestimonial() {
  testimonials[currentTestimonialIndex].classList.remove("active");
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  testimonials[currentTestimonialIndex].classList.add("active");
}

function startSlider() {
  playPauseButton.textContent = "⏸";
  showNextTestimonial();
  timer = setInterval(showNextTestimonial, 1000);
}

function pauseSlider() {
  playPauseButton.textContent = "▶";
  clearInterval(timer);
}

function toggleSlider() {
  if (playPauseButton.textContent === "▶") {
    startSlider();
  } else {
    pauseSlider();
  }
}

playPauseButton.addEventListener("click", toggleSlider);

// Start the slider on page load
startSlider();
