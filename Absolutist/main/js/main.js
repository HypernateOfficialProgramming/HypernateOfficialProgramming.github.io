const spacetime = document.getElementById("space");
const ctx = spacetime.getContext("2d");
const objects = [
  {
    type: "Node",
    x: -100,
    y: 200,
    rad: 16,
    redi: "https://youtube.com/playlist?list=PLP8zGIXPmM4EikfD1c39oPuzNeENiv0JC&si=lpoxwJ_yybuymb4Y"
  }
]

var x = 0
var y = 0
var vx = 0
var vy = 0

const keys = { w: false, a: false, s: false, d: false };

window.addEventListener('keydown', (e) => {
    if (keys.hasOwnProperty(e.key.toLowerCase())) keys[e.key.toLowerCase()] = true;
});

window.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.key.toLowerCase())) keys[e.key.toLowerCase()] = false;
});

function loop() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, spacetime.width, spacetime.height);
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(spacetime.width/2, spacetime.height/2, 10, 0, Math.PI * 2);
    ctx.fill();
  
    for (let i=0;i<objects.length;i++) {
      var obj = objects[i]
      if (obj["type"] == "Node") {  
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(spacetime.width/2 + (obj["x"] - x), spacetime.height/2 + (obj["y"] - y), obj["rad"], 0, Math.PI * 2);
        ctx.fill();

        if (Math.sqrt(((obj.x - x)**2)+((obj.y - y)**2))<20) {
          ctx.font = "bold 40px Calibri";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          
          ctx.fillText("E - Contact", spacetime.width / 2, 10);
        }
      }
    }

    if (keys.d) {vx += 0.1};
    if (keys.a) {vx -= 0.1};
    if (keys.s) {vy += 0.1};
    if (keys.w) {vy -= 0.1};

    vx *= 0.98
    vy *= 0.98
    x += vx
    y += vy

    requestAnimationFrame(loop);
}

loop()
