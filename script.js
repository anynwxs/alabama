function showTime() {
  document.getElementById('currentTime').innerHTML = new Date().toLocaleString('pt-BR');
}
showTime();
setInterval(showTime, 1000);

function revealSurprise() {
  document.getElementById('surpriseMessage').classList.remove('hidden');
}

function countdown() {
  const now = new Date();
  const targetTime = new Date(now.getFullYear(), now.getMonth(), 17, 0, 0, 0);
  let diff = targetTime - now;

  if (diff <= 0) {
    document.body.classList.add('celebration-mode');
    document.getElementById("timer").innerHTML = "🎉 Parabéns, Alabama! O grande dia chegou! 💖";
    document.querySelector(".title").innerText = "✨ Feliz 19 anos, Alabama! ✨";
    startFireworks();
    return;
  }

  let hours = Math.floor(diff / (1000 * 60 * 60));
  let minutes = Math.floor((diff / (1000 * 60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

countdown();
setInterval(countdown, 1000);

// Mensagens rotativas
const messages = [
  "Você é incrível, Alabama! 💖",
  "Hoje o mundo celebra sua existência 🌎",
  "Continue brilhando com sua luz própria ✨",
  "Você merece todo carinho do universo 💫",
  "Amamos você do jeitinho que é 💜"
];
let msgIndex = 0;
setInterval(() => {
  document.getElementById("rotatingMessage").innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
}, 4000);

// Fogos animados
function startFireworks() {
  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function Firework() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetY = Math.random() * canvas.height / 2;
    this.color = `hsl(${Math.random()*360},100%,50%)`;
    this.size = 2 + Math.random() * 3;
  }

  let fireworks = [];

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((f, i) => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fillStyle = f.color;
      ctx.fill();
      f.y -= 5;
      if (f.y < f.targetY) fireworks.splice(i, 1);
    });
    if (Math.random() < 0.1) fireworks.push(new Firework());
    requestAnimationFrame(animate);
  }

  animate();
}
