const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gravity = 0.6;
const friction = 0.8;

const player = {
  x: 50,
  y: 300,
  width: 40,
  height: 60,
  velX: 0,
  velY: 0,
  speed: 4,
  jumping: false,
};

const platforms = [
  { x: 0, y: 400, width: 800, height: 50 },
];

const keys = {};

window.addEventListener("keydown", e => keys[e.code] = true);
window.addEventListener("keyup", e => keys[e.code] = false);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Movement controls
  if (keys["ArrowRight"]) {
    if (player.velX < player.speed) player.velX += 1;
  } else if (keys["ArrowLeft"]) {
    if (player.velX > -player.speed) player.velX -= 1;
  } else {
    player.velX *= friction;
  }

  if (keys["ArrowUp"] && !player.jumping) {
    player.velY = -12;
    player.jumping = true;
  }

  player.velY += gravity;
  player.x += player.velX;
  player.y += player.velY;

  player.jumping = true;
  for (let plat of platforms) {
    if (
      player.x < plat.x + plat.width &&
      player.x + player.width > plat.x &&
      player.y < plat.y + plat.height &&
      player.y + player.height > plat.y
    ) {
      player.y = plat.y - player.height;
      player.velY = 0;
      player.jumping = false;
    }
  }

  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
  if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
    player.jumping = false;
    player.velY = 0;
  }

  // Draw platform
  ctx.fillStyle = "green";
  for (let plat of platforms) {
    ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
  }

  // Draw player as blue rectangle
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(update);
}

update();
