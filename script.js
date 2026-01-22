// MUSIC
const audio=document.getElementById("bgm");
document.getElementById("musicBtn").onclick=()=>{
  audio.paused?audio.play():audio.pause();
};

// WISH STORAGE
const list=document.getElementById("blessings");
let wishes=JSON.parse(localStorage.getItem("wishes")||"[]");

function render(){
  list.innerHTML="";
  wishes.slice(-5).forEach(w=>{
    const d=document.createElement("div");
    d.className="bubble";
    d.innerText=w;
    list.appendChild(d);
  });
}
render();

function openForm(){modal.style.display="grid";}
function closeForm(){modal.style.display="none";}
function sendWish(){
  const n=name.value||"Ẩn danh";
  if(!wish.value)return;
  wishes.push("💖 "+n+": "+wish.value);
  localStorage.setItem("wishes",JSON.stringify(wishes));
  wish.value="";
  render(); closeForm();
}

// QR
function openQR(){qrModal.style.display="grid";}
function closeQR(){qrModal.style.display="none";}

// PETALS
const c=document.getElementById("petals"),ctx=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let petals=Array.from({length:25},()=>({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  s:Math.random()*2+1,
  v:Math.random()+0.5
}));

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  petals.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.s,0,Math.PI*2);
    ctx.fillStyle="rgba(255,180,200,.8)";
    ctx.fill();
    p.y+=p.v; if(p.y>c.height)p.y=0;
  });
  requestAnimationFrame(draw);
}
draw();
