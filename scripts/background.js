const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

const mouse = { x: w / 2, y: h / 2 };
window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const stars = [];
const fallingStars = [];
const STAR_COUNT = 100;

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random() * 1 + 0.2,
    vx: (Math.random() - 0.5) * 0.08,
    vy: (Math.random() - 0.5) * 0.08
  });
}

/* Spawn falling star off top edge */
function spawnFallingStar() {
  fallingStars.push({
    x: Math.random() * w,
    y: -80,
    vx: -(Math.random() * 0.6 + 0.6), // move left
    vy: Math.random() * 0.8 + 0.8,    // move down
    size: Math.random() * 2 + 2.5,
    trail: []
  });
}

// Time-based spawn
let lastSpawn = 0;
const spawnInterval = 1600; // ms

function animate(timestamp) {
  ctx.clearRect(0, 0, w, h);

  // stars
  for (const s of stars) {
    const px = (mouse.x - w / 2) * 0.001 * s.z;
    const py = (mouse.y - h / 2) * 0.001 * s.z;

    s.x += s.vx + px;
    s.y += s.vy + py;

    if (s.x < 0) s.x = w;
    if (s.x > w) s.x = 0;
    if (s.y < 0) s.y = h;
    if (s.y > h) s.y = 0;

    ctx.globalAlpha = 0.9;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(s.x, s.y, 1.5, 1.5);
  }

  // spawn falling star if interval passed
  if (!lastSpawn || timestamp - lastSpawn > spawnInterval) {
    spawnFallingStar();
    lastSpawn = timestamp;
  }

  // falling stars
  for (let i = fallingStars.length - 1; i >= 0; i--) {
    const f = fallingStars[i];

    f.trail.push({ x: f.x, y: f.y });
    if (f.trail.length > 70) f.trail.shift();

    f.x += f.vx;
    f.y += f.vy;

    for (let t = 0; t < f.trail.length; t++) {
      const p = f.trail[t];
      ctx.globalAlpha = (t / f.trail.length) * 0.5;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(p.x, p.y, 1.6, 1.6);
    }

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#ffffff";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(f.x, f.y, f.size, f.size);
    ctx.shadowBlur = 0;

    const tail = f.trail[0];
    if (
      f.x < -150 ||
      f.y > h + 150 ||
      (tail && (tail.x < -150 || tail.y > h + 150))
    ) {
      fallingStars.splice(i, 1);
    }
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);