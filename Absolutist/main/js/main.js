const spacetime = document.getElementById("space");
const ctx = spacetime.getContext("2d");

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, spacetime.width, spacetime.height);

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(250, 150, 50, 0, Math.PI * 2);
ctx.fill();
