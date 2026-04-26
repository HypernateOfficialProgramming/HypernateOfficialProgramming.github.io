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
        ctx.arc(spacetime.width/2 + obj["x"], spacetime.height/2 + obj["y"], obj["rad"], 0, Math.PI * 2);
        ctx.fill();
      }
    }
    requestAnimationFrame(loop);
}

loop()
