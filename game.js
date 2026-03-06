/**
 * Dad's Apple Catch - A Telegram Mini App Game
 * 
 * Level 1: Catch fruits, avoid vegetables
 * Level 2: Navigate through a garden minefield (cat character)
 * 
 * Code Structure:
 * - ASSETS: All image/sprite paths (for easy reskinning)
 * - THEME: All colors and visual styles
 * - GAMEPLAY: All gameplay rules and constants
 */

// ===========================================
// ASSETS CONFIGURATION
// All replaceable art assets live in /assets folder
// Change paths here to reskin the entire game
// ===========================================
const ASSETS = {
  // Level 1 - Player
  player: '/assets/otlomi.png',

  // Level 1 - Collectibles (good)
  apple: '/assets/blackguy.png',
  banana: '/assets/banana.png',

  // Level 1 - Hazards (bad)
  broccoli: '/assets/broccoli.png',
  onion: '/assets/onion.png',

  // Level 1 - Background
  level1Background: '/assets/blackguy.png',
  grass: '/assets/blackguy.png',
  cloud: '/assets/blackguy.png',

  // Level 2 - Character
  cat: '/assets/blackguy.png',

  // Level 2 - Tiles
  grassTile: '/assets/grass-tile.png',
  grassTileDark: '/assets/grass-tile-dark.png',
  safeTile: '/assets/safe-tile.png',       // Revealed safe (flowers/bright grass)
  mineTile: '/assets/mine-tile.png',        // Revealed mine (burned/cracked)
  goalTile: '/assets/goal-tile.png',        // Goal row (treasure/flowers)
  startTile: '/assets/start-tile.png',      // Starting position

  // Level 2 - Decorations
  flower1: '/assets/flower1.png',
  flower2: '/assets/flower2.png',
  bush: '/assets/bush.png',
  stone: '/assets/stone.png',
  pawPrint: '/assets/paw-print.png',
  explosion: '/assets/explosion.png',

  // Level 2 - Background
  level2Background: '/assets/garden-bg.png',

  // UI
  heart: '/assets/heart.png',
  heartEmpty: '/assets/heart-empty.png',
};

// ===========================================
// THEME CONFIGURATION
// All colors and visual styles for easy reskinning
// ===========================================
const THEME = {
  // Level 1 Colors
  level1: {
    skyGradientTop: '#87CEEB',
    skyGradientBottom: '#E0F6FF',
    grassColor: '#7CCD7C',
    cloudColor: 'rgba(255, 255, 255, 0.9)',

    // Player fallback colors
    playerBody: '#4A90D9',
    playerSkin: '#FFD5B5',
    playerDetail: '#333333',

    // Item fallback colors
    appleColor: '#FF6B6B',
    appleStem: '#8B4513',
    appleLeaf: '#4CAF50',
    bananaColor: '#FFE135',
    bananaTip: '#8B7500',
    broccoliGreen: '#4CAF50',
    broccoliStem: '#81C784',
    onionPurple: '#9C27B0',
    onionDark: '#7B1FA2',
  },

  // Level 2 Colors - Cozy Garden Theme
  level2: {
    // Background
    bgGradientTop: '#87CEEB',
    bgGradientBottom: '#C8E6C9',
    groundColor: '#8D6E63',

    // Tiles
    grassLight: '#81C784',
    grassDark: '#66BB6A',
    grassUnrevealed1: '#A5D6A7',
    grassUnrevealed2: '#90CAF9',

    // Safe tiles (flowers appear)
    safeTileColor: '#C8E6C9',
    safeFlowerColor: '#FFB74D',
    safeBorderColor: '#4CAF50',

    // Mine tiles (burned)
    mineTileColor: '#5D4037',
    mineCrackColor: '#3E2723',
    mineGlowColor: '#FF5722',

    // Goal row
    goalTileColor: '#FFD54F',
    goalBorderColor: '#FFC107',
    goalStarColor: '#FFFFFF',

    // Start tile
    startTileColor: '#90CAF9',
    startBorderColor: '#42A5F5',

    // Cat fallback colors
    catBody: '#FF9800',
    catStripes: '#E65100',
    catBelly: '#FFE0B2',
    catEyes: '#4CAF50',
    catNose: '#F48FB1',

    // Decorations
    flowerPink: '#F48FB1',
    flowerYellow: '#FFE082',
    flowerWhite: '#FFFFFF',
    bushGreen: '#388E3C',
    stoneGray: '#9E9E9E',
  },

  // UI Colors
  ui: {
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    headerBg: 'rgba(0, 0, 0, 0.5)',
    textPrimary: '#FFFFFF',
    textSecondary: '#CCCCCC',
    textGold: '#FFD700',
    textDanger: '#FF6B6B',
    buttonSuccess: '#4CAF50',
    buttonDanger: '#FF6B6B',
    buttonShadow: 'rgba(0, 0, 0, 0.3)',
    heartFull: '#FF6B6B',
    heartEmpty: '#555555',
  },

  // Fonts
  fonts: {
    primary: 'Segoe UI, Tahoma, sans-serif',
    heading: 'bold 32px Segoe UI, sans-serif',
    subheading: 'bold 24px Segoe UI, sans-serif',
    body: '18px Segoe UI, sans-serif',
    small: '14px Segoe UI, sans-serif',
    button: 'bold 20px Segoe UI, sans-serif',
  },
};

// ===========================================
// GAMEPLAY CONFIGURATION
// All gameplay rules - change these without affecting visuals
// ===========================================
const GAMEPLAY = {
  // Level 1 Rules
  level1: {
    targetFruits: 3,        // Fruits needed to win
    startingLives: 3,        // Initial lives

    // Player movement (pixels per second)
    playerSpeed: 280,
    playerAcceleration: 1200,
    playerDeceleration: 800,
    playerMaxSpeed: 320,

    // Falling items
    initialFallSpeed: 120,
    maxFallSpeed: 220,
    speedIncreaseRate: 0.004,

    // Spawning
    spawnInterval: 1200,
    minSpawnInterval: 600,
    goodFruitChance: 0.65,   // 65% good fruit
  },

  // Level 2 Rules
  level2: {
    gridCols: 7,
    gridRows: 9,
    mineCount: 12,
    lives: 3,
  },

  // Sizes
  sizes: {
    playerWidth: 60,
    playerHeight: 70,
    itemSize: 40,
  },
};

// ===========================================
// IMAGE LOADER
// Loads images with fallback to shape drawing
// ===========================================
const loadedImages = {};
const imageLoadStatus = {};

function loadImage(key, path) {
  if (loadedImages[key]) return loadedImages[key];
  if (imageLoadStatus[key] === 'loading') return null;
  if (imageLoadStatus[key] === 'failed') return null;

  imageLoadStatus[key] = 'loading';
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    loadedImages[key] = img;
    imageLoadStatus[key] = 'loaded';
  };
  img.onerror = () => {
    imageLoadStatus[key] = 'failed';
  };
  img.src = path;
  return null;
}

function getImage(key) {
  return loadedImages[key] || null;
}

// Preload all assets
function preloadAssets() {
  Object.entries(ASSETS).forEach(([key, path]) => {
    loadImage(key, path);
  });
}

// ===========================================
// CANVAS SETUP
// ===========================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const maxWidth = Math.min(400, window.innerWidth - 20);
  const maxHeight = Math.min(600, window.innerHeight - 150);
  canvas.width = maxWidth;
  canvas.height = maxHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// ===========================================
// GAME STATE
// ===========================================
let gameState = 'start';
let currentLevel = 1;
let score = 0;
let lives = GAMEPLAY.level1.startingLives;
let currentFallSpeed = GAMEPLAY.level1.initialFallSpeed;
let currentSpawnInterval = GAMEPLAY.level1.spawnInterval;
let lastSpawnTime = 0;
let gameTime = 0;

// Level 2 state
let minefield = [];
let safePath = [];
let playerGridX = 0;
let playerGridY = 0;
let level2Lives = GAMEPLAY.level2.lives;
let level2Attempts = 0;
let startGridX = 0;

// Decoration cache for Level 2
let decorations = [];

// ===========================================
// PLAYER OBJECT (Level 1 - Dad)
// ===========================================
const player = {
  x: 0,
  y: 0,
  width: GAMEPLAY.sizes.playerWidth,
  height: GAMEPLAY.sizes.playerHeight,
  velocity: 0,
  moving: { left: false, right: false },

  init() {
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 20;
    this.velocity = 0;
  },

  update(deltaTime) {
    const dt = deltaTime / 1000;
    const cfg = GAMEPLAY.level1;

    let targetDirection = 0;
    if (this.moving.left) targetDirection -= 1;
    if (this.moving.right) targetDirection += 1;

    if (targetDirection !== 0) {
      const targetVelocity = targetDirection * cfg.playerSpeed;
      const acceleration = cfg.playerAcceleration * dt;

      if (this.velocity < targetVelocity) {
        this.velocity = Math.min(this.velocity + acceleration, targetVelocity);
      } else if (this.velocity > targetVelocity) {
        this.velocity = Math.max(this.velocity - acceleration, targetVelocity);
      }
    } else {
      const deceleration = cfg.playerDeceleration * dt;
      if (this.velocity > 0) {
        this.velocity = Math.max(0, this.velocity - deceleration);
      } else if (this.velocity < 0) {
        this.velocity = Math.min(0, this.velocity + deceleration);
      }
    }

    this.velocity = Math.max(-cfg.playerMaxSpeed, Math.min(cfg.playerMaxSpeed, this.velocity));
    this.x += this.velocity * dt;

    if (this.x < 0) {
      this.x = 0;
      this.velocity = 0;
    } else if (this.x > canvas.width - this.width) {
      this.x = canvas.width - this.width;
      this.velocity = 0;
    }
  },

  draw() {
    const img = getImage('player');
    if (img) {
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    } else {
      this.drawFallback();
    }
  },

  drawFallback() {
    const t = THEME.level1;

    // Body
    ctx.fillStyle = t.playerBody;
    ctx.fillRect(this.x + 15, this.y + 30, 30, 40);

    // Head
    ctx.fillStyle = t.playerSkin;
    ctx.beginPath();
    ctx.arc(this.x + this.width / 2, this.y + 20, 18, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.strokeStyle = t.playerDetail;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x + this.width / 2, this.y + 22, 8, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.stroke();

    // Eyes
    ctx.fillStyle = t.playerDetail;
    ctx.beginPath();
    ctx.arc(this.x + this.width / 2 - 6, this.y + 16, 3, 0, Math.PI * 2);
    ctx.arc(this.x + this.width / 2 + 6, this.y + 16, 3, 0, Math.PI * 2);
    ctx.fill();
  }
};

// ===========================================
// FALLING ITEMS (Level 1)
// ===========================================
let fallingItems = [];

const ItemType = {
  APPLE: 'apple',
  BANANA: 'banana',
  BROCCOLI: 'broccoli',
  ONION: 'onion'
};

function createFallingItem() {
  const cfg = GAMEPLAY.level1;
  const rand = Math.random();
  let type;

  if (rand < cfg.goodFruitChance) {
    type = Math.random() < 0.5 ? ItemType.APPLE : ItemType.BANANA;
  } else if (rand < cfg.goodFruitChance + 0.18) {
    type = ItemType.BROCCOLI;
  } else {
    type = ItemType.ONION;
  }

  const speedVariation = currentFallSpeed * (0.9 + Math.random() * 0.2);

  return {
    type: type,
    x: Math.random() * (canvas.width - 40) + 20,
    y: -40,
    width: GAMEPLAY.sizes.itemSize,
    height: GAMEPLAY.sizes.itemSize,
    speed: speedVariation
  };
}

function updateFallingItems(deltaTime) {
  const dt = deltaTime / 1000;

  for (let i = fallingItems.length - 1; i >= 0; i--) {
    const item = fallingItems[i];
    item.y += item.speed * dt;

    if (checkCollision(player, item)) {
      handleCollision(item.type);
      fallingItems.splice(i, 1);
      continue;
    }

    if (item.y > canvas.height) {
      fallingItems.splice(i, 1);
    }
  }
}

function drawFallingItems() {
  fallingItems.forEach(item => {
    const img = getImage(item.type);
    if (img) {
      ctx.drawImage(img, item.x - item.width / 2, item.y, item.width, item.height);
    } else {
      drawFallbackItem(item);
    }
  });
}

function drawFallbackItem(item) {
  const t = THEME.level1;
  ctx.save();
  ctx.translate(item.x, item.y + item.height / 2);

  switch (item.type) {
    case ItemType.APPLE:
      ctx.fillStyle = t.appleColor;
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = t.appleStem;
      ctx.fillRect(-2, -22, 4, 8);
      ctx.fillStyle = t.appleLeaf;
      ctx.beginPath();
      ctx.ellipse(6, -18, 6, 4, 0.5, 0, Math.PI * 2);
      ctx.fill();
      break;

    case ItemType.BANANA:
      ctx.fillStyle = t.bananaColor;
      ctx.beginPath();
      ctx.ellipse(0, 0, 20, 10, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = t.bananaTip;
      ctx.fillRect(14, -6, 4, 4);
      ctx.fillRect(-18, 2, 4, 4);
      break;

    case ItemType.BROCCOLI:
      ctx.fillStyle = t.broccoliGreen;
      ctx.beginPath();
      ctx.arc(-8, -5, 10, 0, Math.PI * 2);
      ctx.arc(8, -5, 10, 0, Math.PI * 2);
      ctx.arc(0, -12, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = t.broccoliStem;
      ctx.fillRect(-4, 5, 8, 15);
      break;

    case ItemType.ONION:
      ctx.fillStyle = t.onionPurple;
      ctx.beginPath();
      ctx.ellipse(0, 5, 16, 14, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = t.onionDark;
      ctx.beginPath();
      ctx.moveTo(-4, -8);
      ctx.lineTo(0, -18);
      ctx.lineTo(4, -8);
      ctx.closePath();
      ctx.fill();
      break;
  }

  ctx.restore();
}

// ===========================================
// COLLISION DETECTION
// ===========================================
function checkCollision(player, item) {
  const padding = 5;
  return (
    player.x + padding < item.x + item.width / 2 &&
    player.x + player.width - padding > item.x - item.width / 2 &&
    player.y + padding < item.y + item.height &&
    player.y + player.height > item.y
  );
}

function handleCollision(type) {
  if (type === ItemType.APPLE || type === ItemType.BANANA) {
    score++;
    if (score >= GAMEPLAY.level1.targetFruits) {
      gameState = 'level1Win';
    }
  } else {
    lives--;
    if (lives <= 0) {
      gameState = 'lose';
    }
  }
}

// ===========================================
// LEVEL 2: GARDEN MINEFIELD
// ===========================================
function generateMinefield() {
  const cols = GAMEPLAY.level2.gridCols;
  const rows = GAMEPLAY.level2.gridRows;

  // Initialize grid
  minefield = [];
  for (let y = 0; y < rows; y++) {
    minefield[y] = [];
    for (let x = 0; x < cols; x++) {
      minefield[y][x] = {
        type: 'safe',
        revealed: false,
        onPath: false,
        decoration: Math.random() < 0.3 ? Math.floor(Math.random() * 3) : -1
      };
    }
  }

  // Generate safe path
  safePath = [];
  let currentX = Math.floor(cols / 2);
  startGridX = currentX;

  for (let y = rows - 1; y >= 0; y--) {
    safePath.push({ x: currentX, y: y });
    minefield[y][currentX].onPath = true;

    if (y > 0) {
      const move = Math.floor(Math.random() * 3) - 1;
      currentX = Math.max(0, Math.min(cols - 1, currentX + move));
    }
  }

  // Place mines
  let minesPlaced = 0;
  const maxAttempts = 200;
  let attempts = 0;

  while (minesPlaced < GAMEPLAY.level2.mineCount && attempts < maxAttempts) {
    const rx = Math.floor(Math.random() * cols);
    const ry = Math.floor(Math.random() * rows);

    if (!minefield[ry][rx].onPath &&
      minefield[ry][rx].type !== 'mine' &&
      ry > 0 && ry < rows - 1) {
      minefield[ry][rx].type = 'mine';
      minesPlaced++;
    }
    attempts++;
  }

  // Set player position
  playerGridX = startGridX;
  playerGridY = rows - 1;
  minefield[playerGridY][playerGridX].revealed = true;

  // Generate random decorations
  generateDecorations();
}

function generateDecorations() {
  decorations = [];
  const cols = GAMEPLAY.level2.gridCols;
  const rows = GAMEPLAY.level2.gridRows;

  // Add some flowers and bushes around the edges
  for (let i = 0; i < 8; i++) {
    decorations.push({
      type: Math.random() < 0.5 ? 'flower' : 'bush',
      x: Math.random() * canvas.width,
      y: Math.random() * 60 + 50,
      size: 10 + Math.random() * 10,
      color: Math.floor(Math.random() * 3)
    });
  }
}

function getCellSize() {
  const padding = 20;
  const cellW = (canvas.width - padding * 2) / GAMEPLAY.level2.gridCols;
  const cellH = (canvas.height - 120) / GAMEPLAY.level2.gridRows;
  return Math.min(cellW, cellH, 50);
}

function getGridOffset() {
  const cellSize = getCellSize();
  const gridWidth = GAMEPLAY.level2.gridCols * cellSize;
  const gridHeight = GAMEPLAY.level2.gridRows * cellSize;
  return {
    x: (canvas.width - gridWidth) / 2,
    y: (canvas.height - gridHeight) / 2 + 20
  };
}

function drawLevel2Background() {
  const t = THEME.level2;

  // Gradient sky background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, t.bgGradientTop);
  gradient.addColorStop(1, t.bgGradientBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw decorative elements
  drawGardenDecorations();
}

function drawGardenDecorations() {
  const t = THEME.level2;

  decorations.forEach(dec => {
    if (dec.type === 'flower') {
      const colors = [t.flowerPink, t.flowerYellow, t.flowerWhite];
      ctx.fillStyle = colors[dec.color];

      // Flower petals
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5;
        ctx.beginPath();
        ctx.ellipse(
          dec.x + Math.cos(angle) * dec.size * 0.4,
          dec.y + Math.sin(angle) * dec.size * 0.4,
          dec.size * 0.3, dec.size * 0.3, 0, 0, Math.PI * 2
        );
        ctx.fill();
      }

      // Flower center
      ctx.fillStyle = '#FFD54F';
      ctx.beginPath();
      ctx.arc(dec.x, dec.y, dec.size * 0.2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Bush
      ctx.fillStyle = t.bushGreen;
      ctx.beginPath();
      ctx.arc(dec.x, dec.y, dec.size, 0, Math.PI * 2);
      ctx.arc(dec.x - dec.size * 0.6, dec.y + dec.size * 0.3, dec.size * 0.7, 0, Math.PI * 2);
      ctx.arc(dec.x + dec.size * 0.6, dec.y + dec.size * 0.3, dec.size * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

function drawMinefield() {
  const t = THEME.level2;
  const cellSize = getCellSize();
  const offset = getGridOffset();

  // Draw grid
  for (let y = 0; y < GAMEPLAY.level2.gridRows; y++) {
    for (let x = 0; x < GAMEPLAY.level2.gridCols; x++) {
      const cell = minefield[y][x];
      const px = offset.x + x * cellSize;
      const py = offset.y + y * cellSize;

      drawCell(x, y, px, py, cellSize, cell);
    }
  }

  // Draw cat character
  drawCat(offset, cellSize);
}

function drawCell(x, y, px, py, cellSize, cell) {
  const t = THEME.level2;
  const rows = GAMEPLAY.level2.gridRows;

  ctx.save();

  // Base tile with rounded corners
  ctx.beginPath();
  ctx.roundRect(px + 1, py + 1, cellSize - 2, cellSize - 2, 4);

  if (y === 0) {
    // Goal row - golden/treasure tile
    const goalGrad = ctx.createRadialGradient(
      px + cellSize / 2, py + cellSize / 2, 0,
      px + cellSize / 2, py + cellSize / 2, cellSize / 2
    );
    goalGrad.addColorStop(0, '#FFF9C4');
    goalGrad.addColorStop(1, t.goalTileColor);
    ctx.fillStyle = goalGrad;
    ctx.fill();

    // Goal border
    ctx.strokeStyle = t.goalBorderColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Star/sparkle decoration
    drawStar(px + cellSize / 2, py + cellSize / 2, cellSize * 0.15, 5, t.goalStarColor);

  } else if (cell.revealed && cell.type === 'mine') {
    // Revealed mine - burned/cracked ground
    ctx.fillStyle = t.mineTileColor;
    ctx.fill();

    // Cracks
    ctx.strokeStyle = t.mineCrackColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px + cellSize * 0.3, py + cellSize * 0.3);
    ctx.lineTo(px + cellSize * 0.7, py + cellSize * 0.7);
    ctx.moveTo(px + cellSize * 0.7, py + cellSize * 0.3);
    ctx.lineTo(px + cellSize * 0.3, py + cellSize * 0.7);
    ctx.stroke();

    // Explosion glow
    ctx.fillStyle = t.mineGlowColor;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

  } else if (cell.revealed && cell.type === 'safe') {
    // Revealed safe - bright flowers
    ctx.fillStyle = t.safeTileColor;
    ctx.fill();

    // Flower decoration
    drawTileFlower(px + cellSize / 2, py + cellSize / 2, cellSize * 0.2);

    // Paw print hint
    ctx.fillStyle = 'rgba(139, 69, 19, 0.2)';
    ctx.beginPath();
    ctx.ellipse(px + cellSize * 0.5, py + cellSize * 0.6, cellSize * 0.12, cellSize * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();

  } else if (y === rows - 1 && x === startGridX) {
    // Start tile
    ctx.fillStyle = t.startTileColor;
    ctx.fill();
    ctx.strokeStyle = t.startBorderColor;
    ctx.lineWidth = 2;
    ctx.stroke();

  } else {
    // Unrevealed grass tile - checkerboard pattern
    ctx.fillStyle = (x + y) % 2 === 0 ? t.grassUnrevealed1 : t.grassUnrevealed2;
    ctx.fill();

    // Grass texture lines
    ctx.strokeStyle = 'rgba(0, 100, 0, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 3; i++) {
      const gx = px + cellSize * (0.2 + i * 0.3);
      ctx.beginPath();
      ctx.moveTo(gx, py + cellSize * 0.7);
      ctx.quadraticCurveTo(gx + 2, py + cellSize * 0.4, gx - 2, py + cellSize * 0.3);
      ctx.stroke();
    }

    // Random decorations on some tiles
    if (cell.decoration >= 0) {
      drawSmallDecoration(px, py, cellSize, cell.decoration);
    }
  }

  // Goal text
  if (y === 0) {
    ctx.fillStyle = '#5D4037';
    ctx.font = `bold ${cellSize * 0.25}px ${THEME.fonts.primary}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GOAL', px + cellSize / 2, py + cellSize / 2 + cellSize * 0.25);
  }

  ctx.restore();
}

function drawSmallDecoration(px, py, cellSize, type) {
  const t = THEME.level2;
  const cx = px + cellSize / 2;
  const cy = py + cellSize / 2;
  const size = cellSize * 0.15;

  if (type === 0) {
    // Small flower
    ctx.fillStyle = t.flowerPink;
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(angle) * size, cy + Math.sin(angle) * size, size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#FFD54F';
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.3, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === 1) {
    // Small stone
    ctx.fillStyle = t.stoneGray;
    ctx.beginPath();
    ctx.ellipse(cx, cy, size * 1.2, size * 0.8, 0, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Grass tuft
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - size, cy + size);
    ctx.quadraticCurveTo(cx - size, cy - size, cx, cy - size * 0.5);
    ctx.moveTo(cx, cy + size);
    ctx.quadraticCurveTo(cx, cy - size, cx + size * 0.5, cy - size * 0.8);
    ctx.moveTo(cx + size, cy + size);
    ctx.quadraticCurveTo(cx + size, cy - size, cx + size * 0.3, cy - size * 0.3);
    ctx.stroke();
  }
}

function drawTileFlower(cx, cy, size) {
  const t = THEME.level2;

  // Petals
  ctx.fillStyle = t.safeFlowerColor;
  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
    ctx.beginPath();
    ctx.ellipse(
      cx + Math.cos(angle) * size * 0.6,
      cy + Math.sin(angle) * size * 0.6,
      size * 0.4, size * 0.4, 0, 0, Math.PI * 2
    );
    ctx.fill();
  }

  // Center
  ctx.fillStyle = '#8D6E63';
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.25, 0, Math.PI * 2);
  ctx.fill();
}

function drawStar(cx, cy, size, points, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? size : size * 0.5;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

function drawCat(offset, cellSize) {
  const t = THEME.level2;
  const px = offset.x + playerGridX * cellSize;
  const py = offset.y + playerGridY * cellSize;
  const cx = px + cellSize / 2;
  const cy = py + cellSize / 2;
  const size = cellSize * 0.4;

  const img = getImage('cat');
  if (img) {
    ctx.drawImage(img, px + cellSize * 0.1, py + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);
    return;
  }

  // Fallback cat drawing
  ctx.save();

  // Shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.beginPath();
  ctx.ellipse(cx, cy + size * 0.8, size * 0.8, size * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Body
  ctx.fillStyle = t.catBody;
  ctx.beginPath();
  ctx.ellipse(cx, cy + size * 0.2, size * 0.7, size * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Stripes on body
  ctx.strokeStyle = t.catStripes;
  ctx.lineWidth = 2;
  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * size * 0.25, cy);
    ctx.lineTo(cx + i * size * 0.25, cy + size * 0.4);
    ctx.stroke();
  }

  // Head
  ctx.fillStyle = t.catBody;
  ctx.beginPath();
  ctx.arc(cx, cy - size * 0.3, size * 0.5, 0, Math.PI * 2);
  ctx.fill();

  // Ears
  ctx.beginPath();
  ctx.moveTo(cx - size * 0.4, cy - size * 0.5);
  ctx.lineTo(cx - size * 0.25, cy - size * 0.9);
  ctx.lineTo(cx - size * 0.1, cy - size * 0.5);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(cx + size * 0.4, cy - size * 0.5);
  ctx.lineTo(cx + size * 0.25, cy - size * 0.9);
  ctx.lineTo(cx + size * 0.1, cy - size * 0.5);
  ctx.fill();

  // Inner ears
  ctx.fillStyle = t.catNose;
  ctx.beginPath();
  ctx.moveTo(cx - size * 0.35, cy - size * 0.5);
  ctx.lineTo(cx - size * 0.25, cy - size * 0.75);
  ctx.lineTo(cx - size * 0.15, cy - size * 0.5);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(cx + size * 0.35, cy - size * 0.5);
  ctx.lineTo(cx + size * 0.25, cy - size * 0.75);
  ctx.lineTo(cx + size * 0.15, cy - size * 0.5);
  ctx.fill();

  // Face
  ctx.fillStyle = t.catBelly;
  ctx.beginPath();
  ctx.ellipse(cx, cy - size * 0.15, size * 0.3, size * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eyes
  ctx.fillStyle = t.catEyes;
  ctx.beginPath();
  ctx.ellipse(cx - size * 0.2, cy - size * 0.4, size * 0.12, size * 0.15, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + size * 0.2, cy - size * 0.4, size * 0.12, size * 0.15, 0, 0, Math.PI * 2);
  ctx.fill();

  // Pupils
  ctx.fillStyle = '#1A1A1A';
  ctx.beginPath();
  ctx.ellipse(cx - size * 0.2, cy - size * 0.4, size * 0.05, size * 0.1, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + size * 0.2, cy - size * 0.4, size * 0.05, size * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();

  // Nose
  ctx.fillStyle = t.catNose;
  ctx.beginPath();
  ctx.moveTo(cx, cy - size * 0.2);
  ctx.lineTo(cx - size * 0.08, cy - size * 0.1);
  ctx.lineTo(cx + size * 0.08, cy - size * 0.1);
  ctx.closePath();
  ctx.fill();

  // Whiskers
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - size * 0.15, cy - size * 0.1);
  ctx.lineTo(cx - size * 0.5, cy - size * 0.15);
  ctx.moveTo(cx - size * 0.15, cy - size * 0.05);
  ctx.lineTo(cx - size * 0.5, cy);
  ctx.moveTo(cx + size * 0.15, cy - size * 0.1);
  ctx.lineTo(cx + size * 0.5, cy - size * 0.15);
  ctx.moveTo(cx + size * 0.15, cy - size * 0.05);
  ctx.lineTo(cx + size * 0.5, cy);
  ctx.stroke();

  ctx.restore();
}

function movePlayer(dx, dy) {
  if (gameState !== 'level2') return;

  const newX = playerGridX + dx;
  const newY = playerGridY + dy;

  if (newX < 0 || newX >= GAMEPLAY.level2.gridCols ||
    newY < 0 || newY >= GAMEPLAY.level2.gridRows) {
    return;
  }

  playerGridX = newX;
  playerGridY = newY;

  const cell = minefield[playerGridY][playerGridX];
  cell.revealed = true;

  if (cell.type === 'mine') {
    level2Lives--;
    level2Attempts++;

    if (level2Lives <= 0) {
      gameState = 'level2GameOver';
    } else {
      gameState = 'level2Hit';
    }
    return;
  }

  if (playerGridY === 0) {
    gameState = 'finalWin';
  }
}

// ===========================================
// UI DRAWING
// ===========================================
function drawUI() {
  const t = THEME.ui;
  ctx.save();

  ctx.fillStyle = t.headerBg;
  ctx.fillRect(0, 0, canvas.width, 50);

  ctx.fillStyle = t.textPrimary;
  ctx.font = 'bold 18px ' + THEME.fonts.primary;
  ctx.textAlign = 'left';
  ctx.fillText(`Fruits: ${score} / ${GAMEPLAY.level1.targetFruits}`, 15, 32);

  ctx.textAlign = 'right';
  drawHearts(canvas.width - 15, 22, lives, GAMEPLAY.level1.startingLives);

  ctx.restore();
}

function drawLevel2UI() {
  const t = THEME.ui;
  ctx.save();

  ctx.fillStyle = t.headerBg;
  ctx.fillRect(0, 0, canvas.width, 50);

  ctx.fillStyle = t.textPrimary;
  ctx.font = 'bold 16px ' + THEME.fonts.primary;
  ctx.textAlign = 'left';
  ctx.fillText('Garden Crossing', 15, 32);

  ctx.textAlign = 'right';
  drawHearts(canvas.width - 15, 22, level2Lives, GAMEPLAY.level2.lives);

  ctx.restore();
}

function drawHearts(x, y, current, max) {
  const t = THEME.ui;
  const heartSize = 18;
  const spacing = 22;

  for (let i = max - 1; i >= 0; i--) {
    const hx = x - (max - i) * spacing;
    const filled = i < current;

    ctx.fillStyle = filled ? t.heartFull : t.heartEmpty;
    drawHeart(hx, y, heartSize);
  }
}

function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y + size * 0.3);
  ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size * 0.3);
  ctx.bezierCurveTo(x - size / 2, y + size * 0.6, x, y + size * 0.8, x, y + size);
  ctx.bezierCurveTo(x, y + size * 0.8, x + size / 2, y + size * 0.6, x + size / 2, y + size * 0.3);
  ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size * 0.3);
  ctx.fill();
}

function drawStartScreen() {
  const t = THEME.ui;

  ctx.fillStyle = t.overlayColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = t.textPrimary;
  ctx.font = THEME.fonts.heading;
  ctx.textAlign = 'center';
  ctx.fillText("Dad's Apple", canvas.width / 2, canvas.height / 2 - 80);
  ctx.fillText("Catch!", canvas.width / 2, canvas.height / 2 - 40);

  ctx.font = THEME.fonts.small;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText('Catch fruits: apples + bananas', canvas.width / 2, canvas.height / 2 + 10);
  ctx.fillText('Avoid veggies: broccoli + onion', canvas.width / 2, canvas.height / 2 + 35);

  drawButton(canvas.width / 2, canvas.height / 2 + 100, 'PLAY', t.buttonSuccess);
}

function drawLevel1WinScreen() {
  const t = THEME.ui;

  ctx.fillStyle = t.overlayColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = THEME.fonts.heading;
  ctx.fillStyle = t.textGold;
  ctx.textAlign = 'center';
  ctx.fillText('Level 1 Complete!', canvas.width / 2, canvas.height / 2 - 60);

  ctx.font = THEME.fonts.body;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText(`${score} fruits collected!`, canvas.width / 2, canvas.height / 2 - 20);
  ctx.fillText('Get ready for Level 2...', canvas.width / 2, canvas.height / 2 + 15);

  drawButton(canvas.width / 2, canvas.height / 2 + 80, 'CONTINUE', t.buttonSuccess);
}

function drawLevel2IntroScreen() {
  const t = THEME.ui;

  ctx.fillStyle = t.overlayColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = THEME.fonts.subheading;
  ctx.fillStyle = t.textPrimary;
  ctx.textAlign = 'center';
  ctx.fillText('Level 2: Garden Crossing', canvas.width / 2, canvas.height / 2 - 80);

  ctx.font = THEME.fonts.body;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText('Guide the cat through the garden!', canvas.width / 2, canvas.height / 2 - 40);

  ctx.font = THEME.fonts.small;
  ctx.fillText('Use arrow keys or buttons to move.', canvas.width / 2, canvas.height / 2);
  ctx.fillText('Reach the golden GOAL at the top.', canvas.width / 2, canvas.height / 2 + 25);
  ctx.fillText('Avoid hidden dangers!', canvas.width / 2, canvas.height / 2 + 50);

  drawButton(canvas.width / 2, canvas.height / 2 + 120, 'START', t.buttonSuccess);
}

function drawLevel2HitScreen() {
  const t = THEME.ui;

  ctx.fillStyle = t.overlayColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = THEME.fonts.heading;
  ctx.fillStyle = t.textDanger;
  ctx.textAlign = 'center';
  ctx.fillText('Ouch!', canvas.width / 2, canvas.height / 2 - 60);

  ctx.font = THEME.fonts.body;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('The cat found a trap!', canvas.width / 2, canvas.height / 2 - 20);

  ctx.font = THEME.fonts.small;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Lives remaining: ${level2Lives}`, canvas.width / 2, canvas.height / 2 + 15);
  ctx.fillText('Safe tiles stay revealed.', canvas.width / 2, canvas.height / 2 + 40);

  drawButton(canvas.width / 2, canvas.height / 2 + 100, 'CONTINUE', t.buttonDanger);
}

function drawLevel2GameOverScreen() {
  const t = THEME.ui;

  ctx.fillStyle = t.overlayColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = THEME.fonts.heading;
  ctx.fillStyle = t.textDanger;
  ctx.textAlign = 'center';
  ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 60);

  ctx.font = THEME.fonts.body;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('The cat ran out of lives!', canvas.width / 2, canvas.height / 2 - 20);

  ctx.font = THEME.fonts.small;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Total attempts: ${level2Attempts}`, canvas.width / 2, canvas.height / 2 + 15);

  drawButton(canvas.width / 2, canvas.height / 2 + 80, 'TRY AGAIN', t.buttonDanger);
}

function drawLoseScreen() {
  const t = THEME.ui;

  ctx.fillStyle = t.overlayColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = THEME.fonts.heading;
  ctx.fillStyle = t.textDanger;
  ctx.textAlign = 'center';
  ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 60);

  ctx.font = THEME.fonts.body;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('Too many veggies!', canvas.width / 2, canvas.height / 2 - 20);

  ctx.font = THEME.fonts.small;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Score: ${score} fruits`, canvas.width / 2, canvas.height / 2 + 20);

  drawButton(canvas.width / 2, canvas.height / 2 + 90, 'TRY AGAIN', t.buttonDanger);
}

function drawFinalWinScreen() {
  const t = THEME.ui;

  ctx.fillStyle = t.overlayColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = 'bold 36px ' + THEME.fonts.primary;
  ctx.fillStyle = t.textGold;
  ctx.textAlign = 'center';
  ctx.fillText('VICTORY!', canvas.width / 2, canvas.height / 2 - 80);

  ctx.font = '20px ' + THEME.fonts.primary;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('The cat made it through!', canvas.width / 2, canvas.height / 2 - 35);

  ctx.font = THEME.fonts.small;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Fruits collected: ${score}`, canvas.width / 2, canvas.height / 2 + 5);
  ctx.fillText(`Garden attempts: ${level2Attempts}`, canvas.width / 2, canvas.height / 2 + 30);

  drawButton(canvas.width / 2, canvas.height / 2 + 100, 'PLAY AGAIN', t.buttonSuccess);
}

function drawButton(x, y, text, color) {
  const t = THEME.ui;
  const btnWidth = 160;
  const btnHeight = 50;

  // Shadow
  ctx.fillStyle = t.buttonShadow;
  ctx.beginPath();
  ctx.roundRect(x - btnWidth / 2, y - btnHeight / 2 + 4, btnWidth, btnHeight, 10);
  ctx.fill();

  // Button
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(x - btnWidth / 2, y - btnHeight / 2, btnWidth, btnHeight - 4, 10);
  ctx.fill();

  // Text
  ctx.fillStyle = t.textPrimary;
  ctx.font = THEME.fonts.button;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y - 2);
}

// ===========================================
// GAME CONTROL
// ===========================================
function resetLevel1() {
  score = 0;
  lives = GAMEPLAY.level1.startingLives;
  currentFallSpeed = GAMEPLAY.level1.initialFallSpeed;
  currentSpawnInterval = GAMEPLAY.level1.spawnInterval;
  fallingItems = [];
  gameTime = 0;
  lastSpawnTime = 0;
  player.init();
  player.moving.left = false;
  player.moving.right = false;
  player.velocity = 0;
}

function resetLevel2() {
  level2Lives = GAMEPLAY.level2.lives;
  level2Attempts = 0;
  generateMinefield();
}

function respawnPlayer() {
  playerGridX = startGridX;
  playerGridY = GAMEPLAY.level2.gridRows - 1;
}

function resetFullGame() {
  currentLevel = 1;
  level2Attempts = 0;
  level2Lives = GAMEPLAY.level2.lives;
  resetLevel1();
}

function startGame() {
  resetFullGame();
  gameState = 'playing';
}

function startLevel2() {
  currentLevel = 2;
  resetLevel2();
  gameState = 'level2';
}

// ===========================================
// INPUT HANDLING
// ===========================================
document.addEventListener('keydown', (e) => {
  if (gameState === 'playing') {
    if (e.key === 'ArrowLeft' || e.key === 'a') player.moving.left = true;
    if (e.key === 'ArrowRight' || e.key === 'd') player.moving.right = true;
  }

  if (gameState === 'level2') {
    if (e.key === 'ArrowLeft' || e.key === 'a') movePlayer(-1, 0);
    if (e.key === 'ArrowRight' || e.key === 'd') movePlayer(1, 0);
    if (e.key === 'ArrowUp' || e.key === 'w') movePlayer(0, -1);
    if (e.key === 'ArrowDown' || e.key === 's') movePlayer(0, 1);
  }

  if (e.key === 'Enter' || e.key === ' ') handleButtonClick();
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'a') player.moving.left = false;
  if (e.key === 'ArrowRight' || e.key === 'd') player.moving.right = false;
});

// Mobile controls
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

if (leftBtn) {
  leftBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (gameState === 'playing') player.moving.left = true;
    if (gameState === 'level2') movePlayer(-1, 0);
  });
  leftBtn.addEventListener('touchend', (e) => { e.preventDefault(); player.moving.left = false; });
  leftBtn.addEventListener('mousedown', () => {
    if (gameState === 'playing') player.moving.left = true;
    if (gameState === 'level2') movePlayer(-1, 0);
  });
  leftBtn.addEventListener('mouseup', () => player.moving.left = false);
  leftBtn.addEventListener('mouseleave', () => player.moving.left = false);
}

if (rightBtn) {
  rightBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (gameState === 'playing') player.moving.right = true;
    if (gameState === 'level2') movePlayer(1, 0);
  });
  rightBtn.addEventListener('touchend', (e) => { e.preventDefault(); player.moving.right = false; });
  rightBtn.addEventListener('mousedown', () => {
    if (gameState === 'playing') player.moving.right = true;
    if (gameState === 'level2') movePlayer(1, 0);
  });
  rightBtn.addEventListener('mouseup', () => player.moving.right = false);
  rightBtn.addEventListener('mouseleave', () => player.moving.right = false);
}

if (upBtn) {
  upBtn.addEventListener('touchstart', (e) => { e.preventDefault(); if (gameState === 'level2') movePlayer(0, -1); });
  upBtn.addEventListener('mousedown', () => { if (gameState === 'level2') movePlayer(0, -1); });
}

if (downBtn) {
  downBtn.addEventListener('touchstart', (e) => { e.preventDefault(); if (gameState === 'level2') movePlayer(0, 1); });
  downBtn.addEventListener('mousedown', () => { if (gameState === 'level2') movePlayer(0, 1); });
}

function handleButtonClick() {
  switch (gameState) {
    case 'start': startGame(); break;
    case 'level1Win': gameState = 'level2Intro'; break;
    case 'level2Intro': startLevel2(); break;
    case 'level2Hit': respawnPlayer(); gameState = 'level2'; break;
    case 'level2GameOver': resetLevel2(); gameState = 'level2'; break;
    case 'lose': startGame(); break;
    case 'finalWin': startGame(); break;
  }
}

// Canvas click handling
canvas.addEventListener('click', (e) => {
  if (gameState === 'playing' || gameState === 'level2') return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const btnX = canvas.width / 2;
  let btnY;

  switch (gameState) {
    case 'start': btnY = canvas.height / 2 + 100; break;
    case 'level1Win': btnY = canvas.height / 2 + 80; break;
    case 'level2Intro': btnY = canvas.height / 2 + 120; break;
    case 'level2Hit': btnY = canvas.height / 2 + 100; break;
    case 'level2GameOver': btnY = canvas.height / 2 + 80; break;
    case 'lose': btnY = canvas.height / 2 + 90; break;
    case 'finalWin': btnY = canvas.height / 2 + 100; break;
  }

  if (Math.abs(x - btnX) < 80 && Math.abs(y - btnY) < 25) handleButtonClick();
});

canvas.addEventListener('touchend', (e) => {
  if (gameState === 'playing' || gameState === 'level2') return;
  e.preventDefault();

  const rect = canvas.getBoundingClientRect();
  const touch = e.changedTouches[0];
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  const btnX = canvas.width / 2;
  let btnY;

  switch (gameState) {
    case 'start': btnY = canvas.height / 2 + 100; break;
    case 'level1Win': btnY = canvas.height / 2 + 80; break;
    case 'level2Intro': btnY = canvas.height / 2 + 120; break;
    case 'level2Hit': btnY = canvas.height / 2 + 100; break;
    case 'level2GameOver': btnY = canvas.height / 2 + 80; break;
    case 'lose': btnY = canvas.height / 2 + 90; break;
    case 'finalWin': btnY = canvas.height / 2 + 100; break;
  }

  if (Math.abs(x - btnX) < 80 && Math.abs(y - btnY) < 25) handleButtonClick();
});

// ===========================================
// MAIN GAME LOOP
// ===========================================
let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  if (deltaTime > 100) deltaTime = 16;
  lastTime = timestamp;

  // Clear and draw based on state
  if (gameState === 'playing') {
    drawLevel1Background();

    const cfg = GAMEPLAY.level1;
    gameTime += deltaTime;

    currentFallSpeed = Math.min(cfg.maxFallSpeed, cfg.initialFallSpeed + (gameTime * cfg.speedIncreaseRate));
    currentSpawnInterval = Math.max(cfg.minSpawnInterval, cfg.spawnInterval - gameTime * 0.05);

    if (timestamp - lastSpawnTime > currentSpawnInterval) {
      fallingItems.push(createFallingItem());
      lastSpawnTime = timestamp;
    }

    player.update(deltaTime);
    updateFallingItems(deltaTime);

    drawFallingItems();
    player.draw();
    drawUI();

  } else if (gameState === 'level2') {
    drawLevel2Background();
    drawMinefield();
    drawLevel2UI();

  } else if (gameState === 'start') {
    drawLevel1Background();
    player.init();
    player.draw();
    drawStartScreen();

  } else if (gameState === 'level1Win') {
    drawLevel1Background();
    player.draw();
    drawLevel1WinScreen();

  } else if (gameState === 'level2Intro') {
    drawLevel2Background();
    drawLevel2IntroScreen();

  } else if (gameState === 'level2Hit') {
    drawLevel2Background();
    drawMinefield();
    drawLevel2HitScreen();

  } else if (gameState === 'level2GameOver') {
    drawLevel2Background();
    drawMinefield();
    drawLevel2GameOverScreen();

  } else if (gameState === 'lose') {
    drawLevel1Background();
    player.draw();
    drawLoseScreen();

  } else if (gameState === 'finalWin') {
    drawLevel2Background();
    drawMinefield();
    drawFinalWinScreen();
  }

  requestAnimationFrame(gameLoop);
}

function drawLevel1Background() {
  const t = THEME.level1;

  // Sky gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, t.skyGradientTop);
  gradient.addColorStop(1, t.skyGradientBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grass
  ctx.fillStyle = t.grassColor;
  ctx.fillRect(0, canvas.height - 30, canvas.width, 30);

  // Clouds
  drawClouds();
}

function drawClouds() {
  ctx.fillStyle = THEME.level1.cloudColor;

  ctx.beginPath();
  ctx.arc(80, 80, 25, 0, Math.PI * 2);
  ctx.arc(110, 70, 30, 0, Math.PI * 2);
  ctx.arc(140, 80, 25, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width - 100, 120, 20, 0, Math.PI * 2);
  ctx.arc(canvas.width - 70, 110, 25, 0, Math.PI * 2);
  ctx.arc(canvas.width - 45, 115, 18, 0, Math.PI * 2);
  ctx.fill();
}

// Initialize
preloadAssets();
player.init();
requestAnimationFrame(gameLoop);
