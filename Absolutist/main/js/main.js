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
      }
    }

    window.addEventListener('keydown', (event) => {
    switch (event.key.toLowerCase()) {
        case 'd': vx += 0.1; break;
        case 'a': vx -= 0.1; break;
        case 'w': vy += 0.1; break;
        case 's': vy -= 0.1; break;
    }
    });

    vx /= 0.99
    vy /= 0.99
    x += vx
    y += vy

    requestAnimationFrame(loop);
}

loop()
