const bgm = document.getElementById("bgm");
const volumeSlider = document.getElementById("volume-slider");

let audioStarted = false;

// start i beg of you AHHHHH
window.addEventListener("mousedown", () => {
  if (!audioStarted) {
    bgm.muted = false;
    bgm.volume = parseFloat(volumeSlider.value);
    bgm.play();
    audioStarted = true;
  }
}, { once: true });

// update when this slider moves
volumeSlider.addEventListener("input", (e) => {
  bgm.volume = parseFloat(e.target.value);
});
