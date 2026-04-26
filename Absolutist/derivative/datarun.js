document.addEventListener("DOMContentLoaded", () => {
    const progressFill = document.getElementById("progress-fill");
    const progressText = document.getElementById("progress-text");
    const loadingScreen = document.getElementById("loading-screen");
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 30;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                window.location.href = "https://hypernateofficialprogramming.github.io/Absolutist/main/
            }, 500);
        }

        // Update CSS and text
        progressFill.style.width = `${progress}%`;
        progressText.innerText = `${Math.round(progress)}%`;

    }, 500); // Update every 0.5 seconds
});
