const spacetime = document.getElementById("space");
const ctx = spacetime.getContext("2d");
const objects = [
  {
    id: "Hae",
    type: "Node",
    x: -100,
    y: 200,
    rad: 16,
    redi: "https://youtube.com/playlist?list=PLP8zGIXPmM4EikfD1c39oPuzNeENiv0JC&si=lpoxwJ_yybuymb4Y",
    links: []
  },
  {
    id: "Nyo",
    type: "Node",
    x: -140,
    y: 240,
    rad: 16,
    redi: "https://www.youtube.com/channel/UCMcQLwt34BG2vTowHSuz2uQ",
    links: [
      "Hae",
      "Ton"
    ]
  },
  {
    id: "Nal",
    type: "Node",
    x: -20,
    y: 120,
    rad: 16,
    redi: "https://www.youtube.com/@Narciso9_FL0PTR0P1C4",
    links: [
      "Hae",
      "Gob"
    ]
  },
  {
    id: "Bey",
    type: "Node",
    x: -20,
    y: 160,
    rad: 16,
    redi: "https://www.youtube.com/@TheyGottaCallMeBeyonder",
    links: [
      "Hae",
      "Nal",
      "Mah"
    ]
  },
  {
    id: "Mah",
    type: "Node",
    x: -100,
    y: 200,
    rad: 16,
    redi: "https://www.youtube.com/@Maheen_AnimeFan",
    links: [
      "Hae",
      "Nal",
      "Bey"
    ]
  },
  {
    id: "Gob",
    type: "Node",
    x: -90,
    y: 0,
    rad: 16,
    redi: "https://www.youtube.com/@Go0berzYT",
    links: [
      "Hae",
      "Nal"
    ]
  },
  {
    id: "Lui",
    type: "Node",
    x: 90,
    y: -10,
    rad: 16,
    redi: "https://www.youtube.com/@Luiany/posts",
    links: [
      "Nal",
      "Gob"
    ]
  },
  {
    id: "Alx",
    type: "Node",
    x: 190,
    y: 320,
    rad: 16,
    redi: "https://www.youtube.com/@Alaixis",
    links: [
      "Trz",
      "Tma",
      "Tmy",
      "Ton",
      "One"
    ]
  },
  {
    id: "Ton",
    type: "Node",
    x: 170,
    y: 270,
    rad: 16,
    redi: "https://www.youtube.com/@TON_618-4mz",
    links: [
      "Alx",
      "One",
      "Sec",
      "Trz",
      "Ton"
    ]
  },
  {
    id: "Nsx",
    type: "Node",
    x: 300,
    y: 220,
    rad: 16,
    redi: "https://www.youtube.com/@AccidentalDoxxing/",
    links: [
      "Alx",
      "Ton",
      "Tmy",
      "Trz"
    ]
  },
  {
    id: "Sec",
    type: "Node",
    x: 160,
    y: 390,
    rad: 16,
    redi: "https://www.youtube.com/@SecondFanTheCreator",
    links: [
      "Alx",
      "One",
      "Sec",
      "Trz"
    ]
  },
  {
    id: "Grn",
    type: "Node",
    x: 220,
    y: 440,
    rad: 16,
    redi: "https://www.youtube.com/@SecondFanTheCreator",
    links: [
      "Sec",
      "Ton",
      "Nyo"
    ]
  },
  {
    id: "Trz",
    type: "Node",
    x: 260,
    y: 380,
    rad: 16,
    redi: "https://www.youtube.com/@TrizziEhgan",
    links: [
      "Alx",
      "One",
      "Sec",
      "Trz"
    ]
  },
  {
    "id": "Kal",
    "type": "Node",
    "x": 1400,
    "y": -90,
    "rad": 16,
    "redi": "https://www.youtube.com/@Kales_Den",
  },
  {
    "id": "Gct",
    "type": "Node",
    "x": 1200,
    "y": 50,
    "rad": 16,
    "redi": "https://www.youtube.com/channel/UC0F6s3JadjJE9V91PgeFONA",
    "links": ["Kal"]
  },
  {
    "id": "Mys",
    "type": "Node",
    "x": 1300,
    "y": -120,
    "rad": 16,
    "redi": "https://www.youtube.com/@MysticMoon-v4d",
    "links": ["Kal"]
  },
  {
    "id": "Trx",
    "type": "Node",
    "x": 1400,
    "y": 120,
    "rad": 16,
    "redi": "https://www.youtube.com/@Trixorsaurus_LOLZ",
    "links": ["Gct"]
  },
  {
    "id": "Mea",
    "type": "Node",
    "x": 1100,
    "y": 100,
    "rad": 16,
    "redi": "https://www.youtube.com/@Meawcat-w2s",
    "links": ["Gct"]
  },
  {
    "id": "Ajd",
    "type": "Node",
    "x": 1150,
    "y": -50,
    "rad": 16,
    "redi": "https://www.youtube.com/@ahenjeetadutta-xd6qi",
    "links": ["Mea"]
  },
  {
    "id": "Yzi",
    "type": "Node",
    "x": 1100,
    "y": 200,
    "rad": 16,
    "redi": "https://www.youtube.com/@Yazzii_SHE",
    "links": ["Gct"]
  },
  {
    "id": "Fox",
    "type": "Node",
    "x": 1500,
    "y": 100,
    "rad": 16,
    "redi": "https://www.youtube.com/@FoxySlaysYT",
    "links": ["Kal"]
  },
  {
    "id": "Wcg",
    "type": "Node",
    "x": 100,
    "y": -750,
    "rad": 16,
    "redi": "https://www.youtube.com/@wisecreepercreeper6890",
    "links": ["Bwa"]
  },
{
    "id": "Cag",
    "type": "Node",
    "x": 200,
    "y": -850,
    "rad": 16,
    "redi": "https://www.youtube.com/@chattydeegaming",
    "links": ["Wcg", "Bwa"]
  },
{
    "id": "Bwa",
    "type": "Node",
    "x": 2,
    "y": -950,
    "rad": 16,
    "redi": "https://www.youtube.com/@BIuewater",
    "links": []
  }
]

var x = 0
var y = 0
var vx = 0
var vy = 0

const keys = { w: false, a: false, s: false, d: false, e: false };

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

        const visx = obj["x"] - x
        const visy = obj["y"] - y
        ctx.arc(spacetime.width/2 + visx, spacetime.height/2 + visy, obj["rad"], 0, Math.PI * 2);
        ctx.fill();

        for (let j = 0; j < (obj.links ?? []).length; j++) {
          ctx.beginPath();
        
          ctx.lineWidth = 4;
          ctx.strokeStyle = "white";
          ctx.lineCap = "round";
        
          let tx = visx;
          let ty = visy;
        
          for (let k = 0; k < objects.length; k++) {
            if (objects[k].id === (obj.links ?? [])[j]) {
              tx = objects[k].x - x;
              ty = objects[k].y - y;
            }
          }
        
          ctx.moveTo(spacetime.width / 2 + visx, spacetime.height / 2 + visy);
          ctx.lineTo(spacetime.width / 2 + tx, spacetime.height / 2 + ty);
        
          ctx.stroke();
        }

        if (Math.sqrt(((obj.x - x)**2)+((obj.y - y)**2))<20) {
          ctx.font = "bold 40px Calibri";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          
          ctx.fillText("E - Contact", spacetime.width / 2, 40);

          if (keys.e) {
            window.open(obj.redi, "_blank");
            keys.e = false
          };
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
