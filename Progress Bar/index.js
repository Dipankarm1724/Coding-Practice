// javascript code goes here
document.querySelector(".start-time").addEventListener("click", function () {
    const timerInput = document.querySelector(".timer");
    const progress = document.querySelector(".progress");
    const totalTime = parseInt(timerInput.value, 10);

    const maxWidth = 200;
    const intervalTime = 1000;
    const widthIncrement = maxWidth / totalTime;

    let currentWidth = 0;
    let currentTime = 0;

    const progressBarInterval = setInterval(function () {
        currentTime++;
        currentWidth += widthIncrement;
        progress.style.width = currentWidth + "px";

        if (currentTime >= totalTime) {
            clearInterval(progressBarInterval);
        }
    }, intervalTime);
});