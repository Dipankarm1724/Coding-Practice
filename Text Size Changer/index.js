const textElement = document.getElementById("text");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function() {
  const currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
  textElement.style.fontSize = `${currentSize + 2}px`;
});

decreaseBtn.addEventListener("click", function() {
  const currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
  textElement.style.fontSize = `${currentSize - 2}px`;
});