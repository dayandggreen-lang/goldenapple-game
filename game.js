/**
 * Golden Apple - A Cozy Mini-Game Collection
 * 
 * Art Direction: Lo-fi, cozy, feminine, dreamy, soft pastel
 * 
 * Level 1: Catch fruits in a dreamy garden
 * Level 2: Guide a cute cat through a magical garden
 * Level 3: Dreamy endless runner survival
 */

// ===========================================
// ASSETS CONFIGURATION
// ===========================================
const ASSETS = {
  player: '/assets/otlomi.png',
  apple: '/assets/blackguy.png',
  banana: '/assets/banana.png',
  broccoli: '/assets/broccoli.png',
  onion: '/assets/onion.png',
  level1Background: '/assets/level1-bg.png',
  grass: '/assets/grass.png',
  cloud: '/assets/cloud.png',
  cat: '/assets/cat.png',
  level2Background: '/assets/garden-bg.png',
  level3Background: '/assets/dreamy-path.png',
  runner: '/assets/runner.png',
  obstacle: '/assets/obstacle.png',
  collectible: '/assets/collectible.png',
};

// ===========================================
// COZY PASTEL THEME - Soft, feminine, dreamy
// ===========================================
const THEME = {
  // Level 1 - Soft Morning Garden
  level1: {
    skyGradientTop: '#FDE8E8',      // Soft blush pink
    skyGradientBottom: '#E8F4E8',   // Soft sage
    grassColor: '#B8D4A8',          // Muted sage green
    grassHighlight: '#C8E4B8',      // Light sage
    cloudColor: 'rgba(255, 255, 255, 0.85)',
    cloudShadow: 'rgba(244, 218, 218, 0.4)',

    // Player - Soft tones
    playerBody: '#8FB4C4',          // Dusty blue
    playerSkin: '#F5E0D3',          // Soft peach
    playerDetail: '#6B5B5B',        // Warm gray
    playerBlush: '#F4C4C4',         // Soft pink blush

    // Fruits - Soft pastels
    appleColor: '#E8A0A0',          // Dusty rose
    appleStem: '#A08070',           // Warm brown
    appleLeaf: '#98C8A0',           // Soft green
    appleHighlight: '#F4C4C4',
    bananaColor: '#F4E4A0',         // Soft yellow
    bananaTip: '#C8B878',
    bananaHighlight: '#FFF4C8',

    // Veggies - Still soft but muted
    broccoliGreen: '#88B898',       // Sage green
    broccoliStem: '#A8C8A8',
    onionPurple: '#C8A8C8',         // Soft lavender
    onionDark: '#B898B8',
  },

  // Level 2 - Magical Garden
  level2: {
    // Background - Dreamy gradient
    bgGradientTop: '#E8D4E8',       // Soft lavender
    bgGradientMid: '#F4E8E4',       // Warm cream
    bgGradientBottom: '#D4E8D4',    // Soft sage
    
    // Grass tiles - Soft variations
    grassLight: '#B8D8B8',          // Light sage
    grassDark: '#A8C8A8',           // Sage
    grassUnrevealed1: '#C8DCC8',    // Misty sage
    grassUnrevealed2: '#D8E8D8',    // Pale sage
    grassPattern: '#C0D8C0',

    // Safe tiles - Cozy flowers
    safeTileColor: '#E8F4E8',       // Soft mint cream
    safeFlowerPink: '#F4C8D4',      // Dusty pink
    safeFlowerYellow: '#F8E8B8',    // Soft buttercup
    safeFlowerWhite: '#FFF8F4',     // Cream white
    safeBorderColor: '#B8D4B8',     // Sage border
    safeGlow: 'rgba(248, 232, 232, 0.4)',

    // Mine tiles - Soft warning
    mineTileColor: '#D4C4B8',       // Warm taupe
    mineCrackColor: '#A89888',      // Darker taupe
    mineWarning: '#D8A8A8',         // Dusty rose warning

    // Goal - Soft golden
    goalTileColor: '#F8E8C8',       // Soft cream gold
    goalBorderColor: '#E8D4A8',     // Muted gold
    goalSparkle: '#FFF8E8',         // Cream sparkle

    // Start - Soft blue
    startTileColor: '#D4E4F4',      // Pale sky blue
    startBorderColor: '#B8D4E8',    // Soft blue border

    // Cat - Warm creamy orange
    catBody: '#F4D4B8',             // Cream orange
    catBodyDark: '#E8C4A8',         // Darker cream
    catBelly: '#FFF4E8',            // Warm white
    catStripes: '#D8B898',          // Soft tan stripes
    catEars: '#E8C8B8',             // Soft pink-tan
    catEarInner: '#F4D8D0',         // Pink inner ear
    catEyes: '#7BA898',             // Sage green eyes
    catEyeHighlight: '#E8F4E8',     // Eye shine
    catNose: '#E8B8B8',             // Soft pink nose
    catWhiskers: '#A89888',         // Warm gray
    catTail: '#E8C8A8',             // Tail color
    catPaws: '#F8E8E0',             // Soft cream paws
    catShadow: 'rgba(168, 152, 136, 0.25)',

    // Decorations
    flowerPink: '#F4C8D4',
    flowerYellow: '#F8E8B8',
    flowerWhite: '#FFF8F0',
    flowerCenter: '#F8D888',
    bushGreen: '#98B898',
    stoneGray: '#C8C0B8',
    stoneShadow: '#B8B0A8',
  },

  // Level 3 - Dreamy Path Runner
  level3: {
    bgTop: '#F4E0E8',               // Soft rose
    bgMid: '#E8E0F4',               // Lavender mist
    bgBottom: '#E0E8F4',            // Pale periwinkle
    
    pathColor: '#F0E4D8',           // Cream path
    pathShadow: '#E0D4C8',          // Soft shadow
    pathLine: '#D8CCC0',            // Path details
    
    laneMarker: '#C8D8C8',          // Soft sage marker
    
    obstacleColor: '#D4B8B8',       // Dusty rose obstacle
    obstacleShadow: '#C4A8A8',
    obstacleAccent: '#E8C8C8',
    
    collectibleColor: '#F8E8C8',    // Soft gold collectible
    collectibleGlow: '#FFF8E8',
    collectibleStar: '#F4D898',
    
    runnerBody: '#E8D4C8',          // Warm cream
    runnerHair: '#C8A888',          // Warm brown
    runnerBlush: '#F4C4C4',
    
    treeLine: '#B8C8B8',            // Distant trees
    cloudColor: '#FFFFFF',
  },

  // UI - Soft and rounded
  ui: {
    overlayColor: 'rgba(40, 35, 35, 0.65)',
    overlayWarm: 'rgba(60, 50, 50, 0.6)',
    headerBg: 'rgba(248, 240, 240, 0.88)',
    headerBorder: 'rgba(216, 200, 200, 0.5)',
    
    textPrimary: '#5B4848',         // Warm dark brown
    textSecondary: '#8B7878',       // Warm gray
    textGold: '#C8A868',            // Soft gold
    textDanger: '#C88888',          // Dusty rose
    textSuccess: '#88A888',         // Sage green
    
    buttonPrimary: '#B8C8B8',       // Sage button
    buttonSuccess: '#A8C8A8',       // Green sage
    buttonDanger: '#D8B8B8',        // Dusty rose
    buttonShadow: 'rgba(160, 140, 140, 0.3)',
    buttonHighlight: 'rgba(255, 255, 255, 0.4)',
    
    heartFull: '#E8A8A8',           // Dusty pink heart
    heartEmpty: '#D8D0D0',          // Pale gray heart
    heartGlow: 'rgba(232, 168, 168, 0.3)',
    
    panelBg: 'rgba(255, 252, 250, 0.95)',
    panelBorder: 'rgba(200, 184, 184, 0.4)',
    panelShadow: 'rgba(180, 160, 160, 0.2)',
  },

  // Fonts - Softer feel
  fonts: {
    primary: "'Quicksand', 'Nunito', 'Segoe UI', sans-serif",
    heading: "600 28px 'Quicksand', sans-serif",
    subheading: "600 22px 'Quicksand', sans-serif",
    body: "500 16px 'Quicksand', sans-serif",
    small: "500 13px 'Quicksand', sans-serif",
    button: "600 18px 'Quicksand', sans-serif",
  },
};

// ===========================================
// GAMEPLAY CONFIGURATION
// ===========================================
const GAMEPLAY = {
  level1: {
    targetFruits: 3,
    startingLives: 3,
    playerSpeed: 260,
    playerAcceleration: 1000,
    playerDeceleration: 700,
    playerMaxSpeed: 300,
    initialFallSpeed: 100,
    maxFallSpeed: 180,
    speedIncreaseRate: 0.003,
    spawnInterval: 1400,
    minSpawnInterval: 700,
    goodFruitChance: 0.68,
  },

  level2: {
    gridCols: 7,
    gridRows: 9,
    mineCount: 10,
    lives: 3,
    walkAnimDuration: 280,  // ms for walking animation
    idleBlinkInterval: 3000,
    tailWagSpeed: 0.008,
    breathSpeed: 0.003,
  },

  level3: {
    duration: 20000,        // 20 seconds
    lanes: 3,
    laneWidth: 80,
    playerSpeed: 5,
    obstacleSpeed: 4,
    obstacleSpawnRate: 1200,
    collectibleSpawnRate: 2000,
    lives: 2,
  },

  sizes: {
    playerWidth: 55,
    playerHeight: 65,
    itemSize: 36,
  },
};

// ===========================================
// IMAGE LOADER
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
let globalTime = 0; // For animations

// Level 2 state
let minefield = [];
let safePath = [];
let playerGridX = 0;
let playerGridY = 0;
let level2Lives = GAMEPLAY.level2.lives;
let level2Attempts = 0;
let startGridX = 0;
let decorations = [];

// Cat animation state
let catAnimation = {
  isWalking: false,
  walkProgress: 0,
  walkStartX: 0,
  walkStartY: 0,
  walkTargetX: 0,
  walkTargetY: 0,
  walkStartTime: 0,
  blinkTimer: 0,
  isBlinking: false,
  blinkDuration: 150,
  tailAngle: 0,
  breathOffset: 0,
  direction: 'down', // 'up', 'down', 'left', 'right'
  walkFrame: 0,
};

// Level 3 state
let level3 = {
  timeRemaining: GAMEPLAY.level3.duration,
  playerLane: 1, // 0, 1, 2
  obstacles: [],
  collectibles: [],
  score: 0,
  lives: GAMEPLAY.level3.lives,
  lastObstacleSpawn: 0,
  lastCollectibleSpawn: 0,
  distance: 0,
  isMovingLane: false,
  targetLane: 1,
  laneProgress: 0,
};

// ===========================================
// PLAYER OBJECT (Level 1)
// ===========================================
const player = {
  x: 0,
  y: 0,
  width: GAMEPLAY.sizes.playerWidth,
  height: GAMEPLAY.sizes.playerHeight,
  velocity: 0,
  moving: { left: false, right: false },
  bobOffset: 0,

  init() {
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 25;
    this.velocity = 0;
    this.bobOffset = 0;
  },

  update(deltaTime) {
    const dt = deltaTime / 1000;
    const cfg = GAMEPLAY.level1;

    // Gentle bob animation
    this.bobOffset = Math.sin(globalTime * 0.004) * 2;

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

    if (this.x < 0) { this.x = 0; this.velocity = 0; }
    else if (this.x > canvas.width - this.width) {
      this.x = canvas.width - this.width;
      this.velocity = 0;
    }
  },

  draw() {
    const img = getImage('player');
    const drawY = this.y + this.bobOffset;
    
    if (img) {
      // Soft shadow
      ctx.fillStyle = 'rgba(168, 152, 136, 0.2)';
      ctx.beginPath();
      ctx.ellipse(this.x + this.width / 2, this.y + this.height + 5, this.width * 0.4, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.drawImage(img, this.x, drawY, this.width, this.height);
    } else {
      this.drawFallback(drawY);
    }
  },

  drawFallback(drawY) {
    const t = THEME.level1;
    const cx = this.x + this.width / 2;

    // Soft shadow
    ctx.fillStyle = 'rgba(168, 152, 136, 0.2)';
    ctx.beginPath();
    ctx.ellipse(cx, this.y + this.height + 5, this.width * 0.4, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body - soft rounded shape
    ctx.fillStyle = t.playerBody;
    ctx.beginPath();
    ctx.ellipse(cx, drawY + 48, 22, 25, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = t.playerSkin;
    ctx.beginPath();
    ctx.arc(cx, drawY + 18, 16, 0, Math.PI * 2);
    ctx.fill();

    // Blush circles
    ctx.fillStyle = t.playerBlush;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(cx - 10, drawY + 22, 4, 0, Math.PI * 2);
    ctx.arc(cx + 10, drawY + 22, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Eyes - soft dots
    ctx.fillStyle = t.playerDetail;
    ctx.beginPath();
    ctx.arc(cx - 5, drawY + 16, 2.5, 0, Math.PI * 2);
    ctx.arc(cx + 5, drawY + 16, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Gentle smile
    ctx.strokeStyle = t.playerDetail;
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx, drawY + 20, 5, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();
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

  return {
    type: type,
    x: Math.random() * (canvas.width - 50) + 25,
    y: -35,
    width: GAMEPLAY.sizes.itemSize,
    height: GAMEPLAY.sizes.itemSize,
    speed: currentFallSpeed * (0.9 + Math.random() * 0.2),
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
  };
}

function updateFallingItems(deltaTime) {
  const dt = deltaTime / 1000;

  for (let i = fallingItems.length - 1; i >= 0; i--) {
    const item = fallingItems[i];
    item.y += item.speed * dt;
    item.rotation += item.rotationSpeed;

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
      ctx.save();
      ctx.translate(item.x, item.y + item.height / 2);
      ctx.rotate(item.rotation * 0.3); // Subtle rotation
      ctx.drawImage(img, -item.width / 2, -item.height / 2, item.width, item.height);
      ctx.restore();
    } else {
      drawFallbackItem(item);
    }
  });
}

function drawFallbackItem(item) {
  const t = THEME.level1;
  ctx.save();
  ctx.translate(item.x, item.y + item.height / 2);
  ctx.rotate(item.rotation * 0.15);

  switch (item.type) {
    case ItemType.APPLE:
      // Soft shadow
      ctx.fillStyle = 'rgba(168, 152, 136, 0.15)';
      ctx.beginPath();
      ctx.ellipse(2, 8, 14, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Apple body with highlight
      ctx.fillStyle = t.appleColor;
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Highlight
      ctx.fillStyle = t.appleHighlight;
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.ellipse(-5, -5, 6, 4, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // Stem
      ctx.fillStyle = t.appleStem;
      ctx.fillRect(-1.5, -19, 3, 7);
      
      // Leaf
      ctx.fillStyle = t.appleLeaf;
      ctx.beginPath();
      ctx.ellipse(5, -16, 5, 3, 0.4, 0, Math.PI * 2);
      ctx.fill();
      break;

    case ItemType.BANANA:
      ctx.fillStyle = 'rgba(168, 152, 136, 0.15)';
      ctx.beginPath();
      ctx.ellipse(2, 8, 16, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = t.bananaColor;
      ctx.beginPath();
      ctx.ellipse(0, 0, 17, 9, -0.2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = t.bananaHighlight;
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.ellipse(-4, -3, 8, 3, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      ctx.fillStyle = t.bananaTip;
      ctx.beginPath();
      ctx.arc(12, -4, 3, 0, Math.PI * 2);
      ctx.arc(-12, 4, 3, 0, Math.PI * 2);
      ctx.fill();
      break;

    case ItemType.BROCCOLI:
      ctx.fillStyle = 'rgba(168, 152, 136, 0.15)';
      ctx.beginPath();
      ctx.ellipse(2, 12, 12, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = t.broccoliGreen;
      ctx.beginPath();
      ctx.arc(-7, -4, 9, 0, Math.PI * 2);
      ctx.arc(7, -4, 9, 0, Math.PI * 2);
      ctx.arc(0, -10, 9, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = t.broccoliStem;
      ctx.fillRect(-3, 5, 6, 12);
      break;

    case ItemType.ONION:
      ctx.fillStyle = 'rgba(168, 152, 136, 0.15)';
      ctx.beginPath();
      ctx.ellipse(2, 10, 12, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = t.onionPurple;
      ctx.beginPath();
      ctx.ellipse(0, 3, 13, 11, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = t.onionDark;
      ctx.beginPath();
      ctx.moveTo(-3, -7);
      ctx.lineTo(0, -15);
      ctx.lineTo(3, -7);
      ctx.closePath();
      ctx.fill();
      break;
  }

  ctx.restore();
}

// ===========================================
// COLLISION
// ===========================================
function checkCollision(player, item) {
  const padding = 6;
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
// LEVEL 2: MAGICAL GARDEN WITH CUTE CAT
// ===========================================
function generateMinefield() {
  const cols = GAMEPLAY.level2.gridCols;
  const rows = GAMEPLAY.level2.gridRows;

  minefield = [];
  for (let y = 0; y < rows; y++) {
    minefield[y] = [];
    for (let x = 0; x < cols; x++) {
      minefield[y][x] = {
        type: 'safe',
        revealed: false,
        onPath: false,
        decoration: Math.random() < 0.35 ? Math.floor(Math.random() * 4) : -1,
        flowerType: Math.floor(Math.random() * 3),
      };
    }
  }

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

  let minesPlaced = 0;
  let attempts = 0;
  while (minesPlaced < GAMEPLAY.level2.mineCount && attempts < 200) {
    const rx = Math.floor(Math.random() * cols);
    const ry = Math.floor(Math.random() * rows);

    if (!minefield[ry][rx].onPath && minefield[ry][rx].type !== 'mine' && ry > 0 && ry < rows - 1) {
      minefield[ry][rx].type = 'mine';
      minesPlaced++;
    }
    attempts++;
  }

  playerGridX = startGridX;
  playerGridY = rows - 1;
  minefield[playerGridY][playerGridX].revealed = true;
  
  // Reset cat animation
  catAnimation.walkProgress = 0;
  catAnimation.isWalking = false;
  catAnimation.direction = 'up';
  
  generateDecorations();
}

function generateDecorations() {
  decorations = [];
  for (let i = 0; i < 12; i++) {
    decorations.push({
      type: Math.random() < 0.6 ? 'flower' : Math.random() < 0.5 ? 'bush' : 'butterfly',
      x: Math.random() * canvas.width,
      y: Math.random() * 50 + 55,
      size: 8 + Math.random() * 8,
      color: Math.floor(Math.random() * 3),
      phase: Math.random() * Math.PI * 2,
    });
  }
}

function getCellSize() {
  const padding = 24;
  const cellW = (canvas.width - padding * 2) / GAMEPLAY.level2.gridCols;
  const cellH = (canvas.height - 130) / GAMEPLAY.level2.gridRows;
  return Math.min(cellW, cellH, 48);
}

function getGridOffset() {
  const cellSize = getCellSize();
  const gridWidth = GAMEPLAY.level2.gridCols * cellSize;
  const gridHeight = GAMEPLAY.level2.gridRows * cellSize;
  return {
    x: (canvas.width - gridWidth) / 2,
    y: (canvas.height - gridHeight) / 2 + 25
  };
}

function drawLevel2Background() {
  const t = THEME.level2;

  // Dreamy gradient background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, t.bgGradientTop);
  gradient.addColorStop(0.5, t.bgGradientMid);
  gradient.addColorStop(1, t.bgGradientBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Soft light rays
  ctx.save();
  ctx.globalAlpha = 0.08;
  for (let i = 0; i < 5; i++) {
    const x = 50 + i * 80;
    const gradient2 = ctx.createLinearGradient(x, 0, x + 40, canvas.height);
    gradient2.addColorStop(0, '#FFF8F0');
    gradient2.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient2;
    ctx.fillRect(x, 0, 60, canvas.height * 0.7);
  }
  ctx.restore();

  drawGardenDecorations();
}

function drawGardenDecorations() {
  const t = THEME.level2;

  decorations.forEach(dec => {
    const wobble = Math.sin(globalTime * 0.002 + dec.phase) * 2;
    
    if (dec.type === 'flower') {
      const colors = [t.flowerPink, t.flowerYellow, t.flowerWhite];
      ctx.fillStyle = colors[dec.color];

      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5 + wobble * 0.02;
        ctx.beginPath();
        ctx.ellipse(
          dec.x + Math.cos(angle) * dec.size * 0.4,
          dec.y + Math.sin(angle) * dec.size * 0.4,
          dec.size * 0.28, dec.size * 0.28, 0, 0, Math.PI * 2
        );
        ctx.fill();
      }

      ctx.fillStyle = t.flowerCenter;
      ctx.beginPath();
      ctx.arc(dec.x, dec.y, dec.size * 0.18, 0, Math.PI * 2);
      ctx.fill();
    } else if (dec.type === 'bush') {
      ctx.fillStyle = t.bushGreen;
      ctx.beginPath();
      ctx.arc(dec.x, dec.y, dec.size, 0, Math.PI * 2);
      ctx.arc(dec.x - dec.size * 0.5, dec.y + dec.size * 0.3, dec.size * 0.65, 0, Math.PI * 2);
      ctx.arc(dec.x + dec.size * 0.5, dec.y + dec.size * 0.3, dec.size * 0.65, 0, Math.PI * 2);
      ctx.fill();
    } else if (dec.type === 'butterfly') {
      const bx = dec.x + Math.sin(globalTime * 0.003 + dec.phase) * 15;
      const by = dec.y + Math.cos(globalTime * 0.004 + dec.phase) * 8;
      const wingFlap = Math.sin(globalTime * 0.02) * 0.3;
      
      ctx.fillStyle = [t.flowerPink, t.flowerYellow, '#D4E8F4'][dec.color];
      ctx.save();
      ctx.translate(bx, by);
      
      // Wings
      ctx.beginPath();
      ctx.ellipse(-4, 0, 5 + wingFlap * 3, 3, -0.3, 0, Math.PI * 2);
      ctx.ellipse(4, 0, 5 + wingFlap * 3, 3, 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Body
      ctx.fillStyle = '#8B7878';
      ctx.beginPath();
      ctx.ellipse(0, 0, 1.5, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  });
}

function drawMinefield() {
  const cellSize = getCellSize();
  const offset = getGridOffset();

  for (let y = 0; y < GAMEPLAY.level2.gridRows; y++) {
    for (let x = 0; x < GAMEPLAY.level2.gridCols; x++) {
      const cell = minefield[y][x];
      const px = offset.x + x * cellSize;
      const py = offset.y + y * cellSize;
      drawCell(x, y, px, py, cellSize, cell);
    }
  }

  drawCat(offset, cellSize);
}

function drawCell(x, y, px, py, cellSize, cell) {
  const t = THEME.level2;
  const rows = GAMEPLAY.level2.gridRows;

  ctx.save();

  // Soft shadow under each tile
  ctx.fillStyle = 'rgba(168, 152, 136, 0.12)';
  ctx.beginPath();
  ctx.roundRect(px + 2, py + 3, cellSize - 2, cellSize - 2, 6);
  ctx.fill();

  // Base tile with rounded corners
  ctx.beginPath();
  ctx.roundRect(px + 1, py + 1, cellSize - 2, cellSize - 2, 6);

  if (y === 0) {
    // Goal row - soft golden glow
    const goalGrad = ctx.createRadialGradient(
      px + cellSize / 2, py + cellSize / 2, 0,
      px + cellSize / 2, py + cellSize / 2, cellSize / 2
    );
    goalGrad.addColorStop(0, t.goalSparkle);
    goalGrad.addColorStop(0.6, t.goalTileColor);
    goalGrad.addColorStop(1, t.goalBorderColor);
    ctx.fillStyle = goalGrad;
    ctx.fill();

    // Soft border
    ctx.strokeStyle = t.goalBorderColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Sparkle
    drawSparkle(px + cellSize / 2, py + cellSize / 2, cellSize * 0.12);

  } else if (cell.revealed && cell.type === 'mine') {
    // Revealed mine - soft warning
    ctx.fillStyle = t.mineTileColor;
    ctx.fill();

    // Soft X mark
    ctx.strokeStyle = t.mineWarning;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(px + cellSize * 0.3, py + cellSize * 0.3);
    ctx.lineTo(px + cellSize * 0.7, py + cellSize * 0.7);
    ctx.moveTo(px + cellSize * 0.7, py + cellSize * 0.3);
    ctx.lineTo(px + cellSize * 0.3, py + cellSize * 0.7);
    ctx.stroke();

  } else if (cell.revealed && cell.type === 'safe') {
    // Revealed safe - pretty flowers
    ctx.fillStyle = t.safeTileColor;
    ctx.fill();

    // Soft glow
    ctx.fillStyle = t.safeGlow;
    ctx.beginPath();
    ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize / 3, 0, Math.PI * 2);
    ctx.fill();

    // Cute flower
    drawTileFlower(px + cellSize / 2, py + cellSize / 2, cellSize * 0.18, cell.flowerType);

    // Paw print
    ctx.fillStyle = 'rgba(180, 160, 140, 0.2)';
    drawPawPrint(px + cellSize * 0.35, py + cellSize * 0.7, cellSize * 0.08);

  } else if (y === rows - 1 && x === startGridX) {
    // Start tile
    ctx.fillStyle = t.startTileColor;
    ctx.fill();
    ctx.strokeStyle = t.startBorderColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();

  } else {
    // Unrevealed - soft grass pattern
    const isLight = (x + y) % 2 === 0;
    ctx.fillStyle = isLight ? t.grassUnrevealed1 : t.grassUnrevealed2;
    ctx.fill();

    // Subtle grass texture
    ctx.strokeStyle = t.grassPattern;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.4;
    for (let i = 0; i < 3; i++) {
      const gx = px + cellSize * (0.25 + i * 0.25);
      ctx.beginPath();
      ctx.moveTo(gx, py + cellSize * 0.7);
      ctx.quadraticCurveTo(gx + 1, py + cellSize * 0.45, gx - 1, py + cellSize * 0.35);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Small decoration
    if (cell.decoration >= 0) {
      drawSmallDecoration(px, py, cellSize, cell.decoration);
    }
  }

  // Goal text
  if (y === 0) {
    ctx.fillStyle = '#8B7860';
    ctx.font = `600 ${cellSize * 0.22}px ${THEME.fonts.primary}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GOAL', px + cellSize / 2, py + cellSize / 2 + cellSize * 0.22);
  }

  ctx.restore();
}

function drawSparkle(cx, cy, size) {
  ctx.fillStyle = '#FFF8E8';
  ctx.globalAlpha = 0.6 + Math.sin(globalTime * 0.005) * 0.3;
  
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI / 2) + globalTime * 0.001;
    const x1 = cx + Math.cos(angle) * size;
    const y1 = cy + Math.sin(angle) * size;
    ctx.moveTo(cx, cy);
    ctx.lineTo(x1, y1);
  }
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#FFF8E8';
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function drawPawPrint(cx, cy, size) {
  // Main pad
  ctx.beginPath();
  ctx.ellipse(cx, cy, size * 1.2, size, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Toe beans
  for (let i = 0; i < 3; i++) {
    const angle = -Math.PI / 2 + (i - 1) * 0.5;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * size * 1.3, cy + Math.sin(angle) * size * 1.3 - size * 0.5, size * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawSmallDecoration(px, py, cellSize, type) {
  const t = THEME.level2;
  const cx = px + cellSize / 2;
  const cy = py + cellSize / 2;
  const size = cellSize * 0.12;

  ctx.globalAlpha = 0.7;

  if (type === 0) {
    // Tiny flower
    ctx.fillStyle = t.flowerPink;
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(angle) * size, cy + Math.sin(angle) * size, size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = t.flowerCenter;
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === 1) {
    // Small stone
    ctx.fillStyle = t.stoneGray;
    ctx.beginPath();
    ctx.ellipse(cx, cy, size * 1.2, size * 0.8, 0.2, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === 2) {
    // Grass tuft
    ctx.strokeStyle = '#98B898';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx - size, cy + size);
    ctx.quadraticCurveTo(cx - size, cy - size * 0.5, cx, cy - size * 0.3);
    ctx.moveTo(cx, cy + size);
    ctx.quadraticCurveTo(cx, cy - size * 0.5, cx + size * 0.3, cy - size * 0.5);
    ctx.stroke();
  } else {
    // Clover
    ctx.fillStyle = '#A8C8A8';
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3 - Math.PI / 2;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(angle) * size * 0.5, cy + Math.sin(angle) * size * 0.5, size * 0.45, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.globalAlpha = 1;
}

function drawTileFlower(cx, cy, size, type) {
  const t = THEME.level2;
  const colors = [t.safeFlowerPink, t.safeFlowerYellow, t.safeFlowerWhite];
  
  ctx.fillStyle = colors[type];
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

  ctx.fillStyle = t.flowerCenter;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.28, 0, Math.PI * 2);
  ctx.fill();
}

// ===========================================
// LAYERED 2D CAT - Pseudo-3D, Cute, Animated
// ===========================================
function drawCat(offset, cellSize) {
  const t = THEME.level2;
  
  // Calculate visual position (interpolated for walking)
  let visualX, visualY;
  
  if (catAnimation.isWalking) {
    const progress = catAnimation.walkProgress;
    // Smooth easing
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    visualX = catAnimation.walkStartX + (catAnimation.walkTargetX - catAnimation.walkStartX) * easedProgress;
    visualY = catAnimation.walkStartY + (catAnimation.walkTargetY - catAnimation.walkStartY) * easedProgress;
  } else {
    visualX = playerGridX;
    visualY = playerGridY;
  }
  
  const px = offset.x + visualX * cellSize;
  const py = offset.y + visualY * cellSize;
  const cx = px + cellSize / 2;
  const cy = py + cellSize / 2;
  const size = cellSize * 0.42;

  // Animation values
  const breathOffset = Math.sin(globalTime * GAMEPLAY.level2.breathSpeed) * 1.5;
  const tailAngle = Math.sin(globalTime * GAMEPLAY.level2.tailWagSpeed) * 0.4;
  
  // Blink logic
  catAnimation.blinkTimer += 16;
  if (catAnimation.blinkTimer > GAMEPLAY.level2.idleBlinkInterval && !catAnimation.isBlinking) {
    catAnimation.isBlinking = true;
    catAnimation.blinkTimer = 0;
  }
  if (catAnimation.isBlinking && catAnimation.blinkTimer > catAnimation.blinkDuration) {
    catAnimation.isBlinking = false;
    catAnimation.blinkTimer = 0;
  }

  // Walking frame for leg animation
  const walkFrame = catAnimation.isWalking ? Math.sin(globalTime * 0.03) : 0;

  ctx.save();

  // === SOFT SHADOW ===
  ctx.fillStyle = t.catShadow;
  ctx.beginPath();
  ctx.ellipse(cx + 2, cy + size * 0.95 + breathOffset * 0.5, size * 0.85, size * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();

  // === TAIL (behind body) ===
  ctx.save();
  ctx.translate(cx - size * 0.5, cy + size * 0.3);
  ctx.rotate(-0.5 + tailAngle);
  
  // Tail shadow
  ctx.fillStyle = t.catBodyDark;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-size * 0.8, -size * 0.2, -size * 1.1, -size * 0.5);
  ctx.quadraticCurveTo(-size * 1.3, -size * 0.7, -size * 1.2, -size * 0.9);
  ctx.lineTo(-size * 1.0, -size * 0.75);
  ctx.quadraticCurveTo(-size * 0.9, -size * 0.5, -size * 0.5, -size * 0.1);
  ctx.closePath();
  ctx.fill();
  
  // Tail main
  ctx.fillStyle = t.catBody;
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.1);
  ctx.quadraticCurveTo(-size * 0.7, -size * 0.3, -size * 1.0, -size * 0.6);
  ctx.quadraticCurveTo(-size * 1.2, -size * 0.85, -size * 1.05, -size * 1.0);
  ctx.lineTo(-size * 0.9, -size * 0.8);
  ctx.quadraticCurveTo(-size * 0.8, -size * 0.55, -size * 0.4, -size * 0.2);
  ctx.closePath();
  ctx.fill();
  
  // Tail tip
  ctx.fillStyle = t.catPaws;
  ctx.beginPath();
  ctx.arc(-size * 1.0, -size * 0.9, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();

  // === BACK LEGS ===
  const legOffset = walkFrame * size * 0.1;
  
  // Back left leg
  ctx.fillStyle = t.catBodyDark;
  ctx.beginPath();
  ctx.ellipse(cx - size * 0.35, cy + size * 0.65 + breathOffset - legOffset, size * 0.2, size * 0.28, 0.1, 0, Math.PI * 2);
  ctx.fill();
  
  // Back right leg
  ctx.beginPath();
  ctx.ellipse(cx + size * 0.35, cy + size * 0.65 + breathOffset + legOffset, size * 0.2, size * 0.28, -0.1, 0, Math.PI * 2);
  ctx.fill();

  // === BODY ===
  // Body shadow
  ctx.fillStyle = t.catBodyDark;
  ctx.beginPath();
  ctx.ellipse(cx + 1, cy + size * 0.25 + breathOffset + 2, size * 0.72, size * 0.52, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Main body
  ctx.fillStyle = t.catBody;
  ctx.beginPath();
  ctx.ellipse(cx, cy + size * 0.25 + breathOffset, size * 0.7, size * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Body stripes
  ctx.strokeStyle = t.catStripes;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.globalAlpha = 0.4;
  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * size * 0.22, cy + size * 0.05 + breathOffset);
    ctx.lineTo(cx + i * size * 0.22, cy + size * 0.4 + breathOffset);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Belly
  ctx.fillStyle = t.catBelly;
  ctx.beginPath();
  ctx.ellipse(cx, cy + size * 0.35 + breathOffset, size * 0.35, size * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();

  // === FRONT PAWS ===
  ctx.fillStyle = t.catPaws;
  ctx.beginPath();
  ctx.ellipse(cx - size * 0.3, cy + size * 0.7 + breathOffset + legOffset, size * 0.15, size * 0.1, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + size * 0.3, cy + size * 0.7 + breathOffset - legOffset, size * 0.15, size * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();

  // === HEAD ===
  // Head shadow
  ctx.fillStyle = t.catBodyDark;
  ctx.beginPath();
  ctx.arc(cx + 1, cy - size * 0.22 + 2, size * 0.52, 0, Math.PI * 2);
  ctx.fill();
  
  // Main head
  ctx.fillStyle = t.catBody;
  ctx.beginPath();
  ctx.arc(cx, cy - size * 0.22, size * 0.5, 0, Math.PI * 2);
  ctx.fill();

  // === EARS ===
  // Left ear
  ctx.fillStyle = t.catEars;
  ctx.beginPath();
  ctx.moveTo(cx - size * 0.38, cy - size * 0.45);
  ctx.lineTo(cx - size * 0.22, cy - size * 0.9);
  ctx.lineTo(cx - size * 0.05, cy - size * 0.45);
  ctx.closePath();
  ctx.fill();
  
  // Left inner ear
  ctx.fillStyle = t.catEarInner;
  ctx.beginPath();
  ctx.moveTo(cx - size * 0.32, cy - size * 0.48);
  ctx.lineTo(cx - size * 0.22, cy - size * 0.75);
  ctx.lineTo(cx - size * 0.12, cy - size * 0.48);
  ctx.closePath();
  ctx.fill();

  // Right ear
  ctx.fillStyle = t.catEars;
  ctx.beginPath();
  ctx.moveTo(cx + size * 0.38, cy - size * 0.45);
  ctx.lineTo(cx + size * 0.22, cy - size * 0.9);
  ctx.lineTo(cx + size * 0.05, cy - size * 0.45);
  ctx.closePath();
  ctx.fill();
  
  // Right inner ear
  ctx.fillStyle = t.catEarInner;
  ctx.beginPath();
  ctx.moveTo(cx + size * 0.32, cy - size * 0.48);
  ctx.lineTo(cx + size * 0.22, cy - size * 0.75);
  ctx.lineTo(cx + size * 0.12, cy - size * 0.48);
  ctx.closePath();
  ctx.fill();

  // === FACE ===
  // Face patch (white/cream area)
  ctx.fillStyle = t.catBelly;
  ctx.beginPath();
  ctx.ellipse(cx, cy - size * 0.1, size * 0.32, size * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();

  // === EYES ===
  if (catAnimation.isBlinking) {
    // Closed eyes - happy arcs
    ctx.strokeStyle = t.catEyes;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx - size * 0.18, cy - size * 0.32, size * 0.1, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx + size * 0.18, cy - size * 0.32, size * 0.1, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();
  } else {
    // Open eyes
    // Eye whites
    ctx.fillStyle = '#FFFCF8';
    ctx.beginPath();
    ctx.ellipse(cx - size * 0.18, cy - size * 0.32, size * 0.13, size * 0.15, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + size * 0.18, cy - size * 0.32, size * 0.13, size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Irises
    ctx.fillStyle = t.catEyes;
    ctx.beginPath();
    ctx.ellipse(cx - size * 0.18, cy - size * 0.32, size * 0.1, size * 0.12, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + size * 0.18, cy - size * 0.32, size * 0.1, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupils
    ctx.fillStyle = '#2A2420';
    ctx.beginPath();
    ctx.ellipse(cx - size * 0.18, cy - size * 0.32, size * 0.04, size * 0.08, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + size * 0.18, cy - size * 0.32, size * 0.04, size * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye highlights
    ctx.fillStyle = t.catEyeHighlight;
    ctx.beginPath();
    ctx.arc(cx - size * 0.21, cy - size * 0.36, size * 0.04, 0, Math.PI * 2);
    ctx.arc(cx + size * 0.15, cy - size * 0.36, size * 0.04, 0, Math.PI * 2);
    ctx.fill();
  }

  // === NOSE ===
  ctx.fillStyle = t.catNose;
  ctx.beginPath();
  ctx.moveTo(cx, cy - size * 0.12);
  ctx.lineTo(cx - size * 0.07, cy - size * 0.02);
  ctx.lineTo(cx + size * 0.07, cy - size * 0.02);
  ctx.closePath();
  ctx.fill();
  
  // Nose highlight
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.beginPath();
  ctx.arc(cx - size * 0.02, cy - size * 0.1, size * 0.025, 0, Math.PI * 2);
  ctx.fill();

  // === MOUTH ===
  ctx.strokeStyle = t.catNose;
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx, cy - size * 0.02);
  ctx.lineTo(cx, cy + size * 0.05);
  ctx.moveTo(cx - size * 0.1, cy + size * 0.08);
  ctx.quadraticCurveTo(cx, cy + size * 0.02, cx + size * 0.1, cy + size * 0.08);
  ctx.stroke();

  // === WHISKERS ===
  ctx.strokeStyle = t.catWhiskers;
  ctx.lineWidth = 1;
  ctx.beginPath();
  // Left whiskers
  ctx.moveTo(cx - size * 0.12, cy - size * 0.02);
  ctx.lineTo(cx - size * 0.5, cy - size * 0.08);
  ctx.moveTo(cx - size * 0.12, cy + size * 0.03);
  ctx.lineTo(cx - size * 0.5, cy + size * 0.05);
  ctx.moveTo(cx - size * 0.12, cy + size * 0.08);
  ctx.lineTo(cx - size * 0.45, cy + size * 0.15);
  // Right whiskers
  ctx.moveTo(cx + size * 0.12, cy - size * 0.02);
  ctx.lineTo(cx + size * 0.5, cy - size * 0.08);
  ctx.moveTo(cx + size * 0.12, cy + size * 0.03);
  ctx.lineTo(cx + size * 0.5, cy + size * 0.05);
  ctx.moveTo(cx + size * 0.12, cy + size * 0.08);
  ctx.lineTo(cx + size * 0.45, cy + size * 0.15);
  ctx.stroke();

  // === BLUSH ===
  ctx.fillStyle = '#F4C8C8';
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.ellipse(cx - size * 0.32, cy - size * 0.15, size * 0.1, size * 0.06, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + size * 0.32, cy - size * 0.15, size * 0.1, size * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.restore();
}

function movePlayer(dx, dy) {
  if (gameState !== 'level2') return;
  if (catAnimation.isWalking) return; // Prevent move during animation

  const newX = playerGridX + dx;
  const newY = playerGridY + dy;

  if (newX < 0 || newX >= GAMEPLAY.level2.gridCols ||
    newY < 0 || newY >= GAMEPLAY.level2.gridRows) {
    return;
  }

  // Set direction
  if (dx < 0) catAnimation.direction = 'left';
  else if (dx > 0) catAnimation.direction = 'right';
  else if (dy < 0) catAnimation.direction = 'up';
  else catAnimation.direction = 'down';

  // Start walking animation
  catAnimation.isWalking = true;
  catAnimation.walkProgress = 0;
  catAnimation.walkStartX = playerGridX;
  catAnimation.walkStartY = playerGridY;
  catAnimation.walkTargetX = newX;
  catAnimation.walkTargetY = newY;
  catAnimation.walkStartTime = globalTime;

  // Update logical position
  playerGridX = newX;
  playerGridY = newY;

  const cell = minefield[playerGridY][playerGridX];
  cell.revealed = true;

  if (cell.type === 'mine') {
    // Delay the hit detection until animation completes
    setTimeout(() => {
      level2Lives--;
      level2Attempts++;

      if (level2Lives <= 0) {
        gameState = 'level2GameOver';
      } else {
        gameState = 'level2Hit';
      }
    }, GAMEPLAY.level2.walkAnimDuration);
    return;
  }

  if (playerGridY === 0) {
    setTimeout(() => {
      gameState = 'level3Intro';
    }, GAMEPLAY.level2.walkAnimDuration + 100);
  }
}

function updateCatAnimation(deltaTime) {
  if (catAnimation.isWalking) {
    const elapsed = globalTime - catAnimation.walkStartTime;
    catAnimation.walkProgress = Math.min(1, elapsed / GAMEPLAY.level2.walkAnimDuration);
    
    if (catAnimation.walkProgress >= 1) {
      catAnimation.isWalking = false;
      catAnimation.walkProgress = 0;
    }
  }
}

// ===========================================
// LEVEL 3: DREAMY ENDLESS RUNNER
// ===========================================
function resetLevel3() {
  level3 = {
    timeRemaining: GAMEPLAY.level3.duration,
    playerLane: 1,
    obstacles: [],
    collectibles: [],
    score: 0,
    lives: GAMEPLAY.level3.lives,
    lastObstacleSpawn: 0,
    lastCollectibleSpawn: 0,
    distance: 0,
    isMovingLane: false,
    targetLane: 1,
    laneProgress: 0,
  };
}

function getLaneX(lane) {
  const laneWidth = GAMEPLAY.level3.laneWidth;
  const startX = canvas.width / 2 - laneWidth;
  return startX + lane * laneWidth;
}

function drawLevel3Background() {
  const t = THEME.level3;

  // Dreamy sky gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, t.bgTop);
  gradient.addColorStop(0.4, t.bgMid);
  gradient.addColorStop(1, t.bgBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Soft clouds
  ctx.fillStyle = t.cloudColor;
  ctx.globalAlpha = 0.5;
  const cloudOffset = (globalTime * 0.02) % 200;
  for (let i = 0; i < 4; i++) {
    const cx = 60 + i * 100 - cloudOffset;
    const cy = 40 + (i % 2) * 30;
    ctx.beginPath();
    ctx.arc(cx, cy, 20, 0, Math.PI * 2);
    ctx.arc(cx + 20, cy - 5, 25, 0, Math.PI * 2);
    ctx.arc(cx + 40, cy, 20, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Distant tree line
  ctx.fillStyle = t.treeLine;
  for (let i = 0; i < 15; i++) {
    const x = i * 35 + 10;
    const h = 30 + Math.sin(i * 0.7) * 15;
    ctx.beginPath();
    ctx.moveTo(x, 120);
    ctx.lineTo(x + 12, 120 - h);
    ctx.lineTo(x + 24, 120);
    ctx.fill();
  }

  // Path/road
  const pathWidth = GAMEPLAY.level3.laneWidth * 3;
  const pathX = canvas.width / 2 - pathWidth / 2;
  
  // Path shadow
  ctx.fillStyle = t.pathShadow;
  ctx.beginPath();
  ctx.moveTo(pathX - 20, 120);
  ctx.lineTo(pathX + pathWidth + 20, 120);
  ctx.lineTo(pathX + pathWidth + 10, canvas.height);
  ctx.lineTo(pathX - 10, canvas.height);
  ctx.closePath();
  ctx.fill();

  // Main path
  ctx.fillStyle = t.pathColor;
  ctx.beginPath();
  ctx.moveTo(pathX - 10, 130);
  ctx.lineTo(pathX + pathWidth + 10, 130);
  ctx.lineTo(pathX + pathWidth, canvas.height);
  ctx.lineTo(pathX, canvas.height);
  ctx.closePath();
  ctx.fill();

  // Lane markers
  ctx.strokeStyle = t.laneMarker;
  ctx.lineWidth = 2;
  ctx.setLineDash([15, 15]);
  const dashOffset = (level3.distance * 5) % 30;
  ctx.lineDashOffset = -dashOffset;
  
  for (let i = 1; i < 3; i++) {
    const laneX = getLaneX(i) - GAMEPLAY.level3.laneWidth / 2;
    ctx.beginPath();
    ctx.moveTo(laneX, 140);
    ctx.lineTo(laneX, canvas.height);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Side decorations (flowers)
  const flowerOffset = (level3.distance * 3) % 80;
  ctx.globalAlpha = 0.7;
  for (let i = 0; i < 8; i++) {
    const fy = 180 + i * 70 - flowerOffset;
    if (fy > 120 && fy < canvas.height) {
      // Left side
      drawSmallFlower(pathX - 25, fy, 6, i % 3);
      // Right side
      drawSmallFlower(pathX + pathWidth + 25, fy, 6, (i + 1) % 3);
    }
  }
  ctx.globalAlpha = 1;
}

function drawSmallFlower(x, y, size, colorType) {
  const colors = [THEME.level3.collectibleColor, '#F4C8D4', '#D4E8F4'];
  ctx.fillStyle = colors[colorType];
  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5;
    ctx.beginPath();
    ctx.arc(x + Math.cos(angle) * size * 0.5, y + Math.sin(angle) * size * 0.5, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#F8D888';
  ctx.beginPath();
  ctx.arc(x, y, size * 0.2, 0, Math.PI * 2);
  ctx.fill();
}

function updateLevel3(deltaTime) {
  const cfg = GAMEPLAY.level3;
  
  level3.timeRemaining -= deltaTime;
  level3.distance += cfg.obstacleSpeed * deltaTime * 0.001;

  if (level3.timeRemaining <= 0) {
    gameState = 'finalWin';
    return;
  }

  // Lane movement
  if (level3.isMovingLane) {
    level3.laneProgress += deltaTime * 0.008;
    if (level3.laneProgress >= 1) {
      level3.playerLane = level3.targetLane;
      level3.isMovingLane = false;
      level3.laneProgress = 0;
    }
  }

  // Spawn obstacles
  if (globalTime - level3.lastObstacleSpawn > cfg.obstacleSpawnRate) {
    const lane = Math.floor(Math.random() * 3);
    level3.obstacles.push({
      lane: lane,
      y: 100,
      width: 40,
      height: 50,
    });
    level3.lastObstacleSpawn = globalTime;
  }

  // Spawn collectibles
  if (globalTime - level3.lastCollectibleSpawn > cfg.collectibleSpawnRate) {
    const lane = Math.floor(Math.random() * 3);
    // Don't spawn on obstacle
    const hasObstacle = level3.obstacles.some(o => o.lane === lane && o.y < 180);
    if (!hasObstacle) {
      level3.collectibles.push({
        lane: lane,
        y: 100,
      });
    }
    level3.lastCollectibleSpawn = globalTime;
  }

  // Update obstacles
  for (let i = level3.obstacles.length - 1; i >= 0; i--) {
    const obs = level3.obstacles[i];
    obs.y += cfg.obstacleSpeed;

    // Check collision
    const playerY = canvas.height - 100;
    const playerLaneActual = level3.isMovingLane 
      ? level3.playerLane + (level3.targetLane - level3.playerLane) * level3.laneProgress
      : level3.playerLane;
    
    if (obs.y + obs.height > playerY && obs.y < playerY + 60) {
      if (Math.abs(obs.lane - playerLaneActual) < 0.5) {
        level3.lives--;
        level3.obstacles.splice(i, 1);
        if (level3.lives <= 0) {
          gameState = 'level3GameOver';
        }
        continue;
      }
    }

    if (obs.y > canvas.height + 50) {
      level3.obstacles.splice(i, 1);
    }
  }

  // Update collectibles
  for (let i = level3.collectibles.length - 1; i >= 0; i--) {
    const col = level3.collectibles[i];
    col.y += cfg.obstacleSpeed * 0.9;

    const playerY = canvas.height - 100;
    const playerLaneActual = level3.isMovingLane 
      ? level3.playerLane + (level3.targetLane - level3.playerLane) * level3.laneProgress
      : level3.playerLane;

    if (col.y > playerY - 20 && col.y < playerY + 50) {
      if (Math.abs(col.lane - playerLaneActual) < 0.5) {
        level3.score++;
        level3.collectibles.splice(i, 1);
        continue;
      }
    }

    if (col.y > canvas.height + 30) {
      level3.collectibles.splice(i, 1);
    }
  }
}

function drawLevel3() {
  drawLevel3Background();

  const t = THEME.level3;
  const cfg = GAMEPLAY.level3;

  // Draw obstacles
  level3.obstacles.forEach(obs => {
    const x = getLaneX(obs.lane);
    
    // Shadow
    ctx.fillStyle = 'rgba(168, 152, 136, 0.2)';
    ctx.beginPath();
    ctx.ellipse(x, obs.y + obs.height + 5, 20, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Obstacle (cute bush/rock)
    ctx.fillStyle = t.obstacleColor;
    ctx.beginPath();
    ctx.arc(x, obs.y + 15, 22, 0, Math.PI * 2);
    ctx.arc(x - 12, obs.y + 28, 16, 0, Math.PI * 2);
    ctx.arc(x + 12, obs.y + 28, 16, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = t.obstacleAccent;
    ctx.beginPath();
    ctx.arc(x - 5, obs.y + 10, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw collectibles
  level3.collectibles.forEach(col => {
    const x = getLaneX(col.lane);
    const bob = Math.sin(globalTime * 0.008 + col.y * 0.1) * 3;
    
    // Glow
    ctx.fillStyle = t.collectibleGlow;
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.arc(x, col.y + bob, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    
    // Star/flower collectible
    ctx.fillStyle = t.collectibleColor;
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5 - Math.PI / 2 + globalTime * 0.002;
      ctx.beginPath();
      ctx.ellipse(
        x + Math.cos(angle) * 8,
        col.y + bob + Math.sin(angle) * 8,
        5, 5, 0, 0, Math.PI * 2
      );
      ctx.fill();
    }
    ctx.fillStyle = t.collectibleStar;
    ctx.beginPath();
    ctx.arc(x, col.y + bob, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw player (cute running character)
  const playerLaneActual = level3.isMovingLane 
    ? level3.playerLane + (level3.targetLane - level3.playerLane) * level3.laneProgress
    : level3.playerLane;
  const px = getLaneX(playerLaneActual);
  const py = canvas.height - 100;
  const runBob = Math.sin(globalTime * 0.015) * 3;
  const legFrame = Math.sin(globalTime * 0.02);

  // Shadow
  ctx.fillStyle = 'rgba(168, 152, 136, 0.25)';
  ctx.beginPath();
  ctx.ellipse(px, py + 55, 18, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  // Legs
  ctx.fillStyle = t.runnerBody;
  ctx.beginPath();
  ctx.ellipse(px - 8, py + 40 + legFrame * 5, 6, 12, 0.2, 0, Math.PI * 2);
  ctx.ellipse(px + 8, py + 40 - legFrame * 5, 6, 12, -0.2, 0, Math.PI * 2);
  ctx.fill();

  // Body
  ctx.fillStyle = t.runnerBody;
  ctx.beginPath();
  ctx.ellipse(px, py + 20 + runBob, 16, 22, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head
  ctx.beginPath();
  ctx.arc(px, py - 8 + runBob, 14, 0, Math.PI * 2);
  ctx.fill();

  // Hair
  ctx.fillStyle = t.runnerHair;
  ctx.beginPath();
  ctx.arc(px, py - 12 + runBob, 12, Math.PI, 0);
  ctx.fill();
  // Hair flowing back
  ctx.beginPath();
  ctx.moveTo(px + 8, py - 12 + runBob);
  ctx.quadraticCurveTo(px + 20, py - 8 + runBob, px + 25, py - 5 + runBob + Math.sin(globalTime * 0.01) * 3);
  ctx.quadraticCurveTo(px + 18, py - 5 + runBob, px + 10, py - 6 + runBob);
  ctx.fill();

  // Face
  ctx.fillStyle = '#4A4040';
  ctx.beginPath();
  ctx.arc(px - 4, py - 10 + runBob, 2, 0, Math.PI * 2);
  ctx.arc(px + 4, py - 10 + runBob, 2, 0, Math.PI * 2);
  ctx.fill();

  // Blush
  ctx.fillStyle = t.runnerBlush;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.ellipse(px - 9, py - 5 + runBob, 4, 2.5, 0, 0, Math.PI * 2);
  ctx.ellipse(px + 9, py - 5 + runBob, 4, 2.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Smile
  ctx.strokeStyle = '#6B5858';
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(px, py - 4 + runBob, 4, 0.2 * Math.PI, 0.8 * Math.PI);
  ctx.stroke();

  // Draw Level 3 UI
  drawLevel3UI();
}

function drawLevel3UI() {
  const t = THEME.ui;

  // Header panel
  ctx.fillStyle = t.headerBg;
  ctx.beginPath();
  ctx.roundRect(10, 10, canvas.width - 20, 45, 12);
  ctx.fill();
  ctx.strokeStyle = t.headerBorder;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Time remaining
  const timeLeft = Math.max(0, Math.ceil(level3.timeRemaining / 1000));
  ctx.fillStyle = t.textPrimary;
  ctx.font = `600 16px ${THEME.fonts.primary}`;
  ctx.textAlign = 'left';
  ctx.fillText(`Time: ${timeLeft}s`, 24, 38);

  // Score
  ctx.textAlign = 'center';
  ctx.fillText(`Stars: ${level3.score}`, canvas.width / 2, 38);

  // Lives
  ctx.textAlign = 'right';
  drawHearts(canvas.width - 24, 25, level3.lives, GAMEPLAY.level3.lives);
}

function moveLevel3Player(direction) {
  if (gameState !== 'level3') return;
  if (level3.isMovingLane) return;

  const newLane = level3.playerLane + direction;
  if (newLane >= 0 && newLane < 3) {
    level3.isMovingLane = true;
    level3.targetLane = newLane;
    level3.laneProgress = 0;
  }
}

// ===========================================
// UI DRAWING - Soft & Rounded
// ===========================================
function drawUI() {
  const t = THEME.ui;
  ctx.save();

  // Soft header panel
  ctx.fillStyle = t.headerBg;
  ctx.beginPath();
  ctx.roundRect(10, 8, canvas.width - 20, 42, 12);
  ctx.fill();
  ctx.strokeStyle = t.headerBorder;
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = t.textPrimary;
  ctx.font = `600 15px ${THEME.fonts.primary}`;
  ctx.textAlign = 'left';
  ctx.fillText(`Fruits: ${score} / ${GAMEPLAY.level1.targetFruits}`, 24, 34);

  ctx.textAlign = 'right';
  drawHearts(canvas.width - 24, 22, lives, GAMEPLAY.level1.startingLives);

  ctx.restore();
}

function drawLevel2UI() {
  const t = THEME.ui;
  ctx.save();

  ctx.fillStyle = t.headerBg;
  ctx.beginPath();
  ctx.roundRect(10, 8, canvas.width - 20, 42, 12);
  ctx.fill();
  ctx.strokeStyle = t.headerBorder;
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = t.textPrimary;
  ctx.font = `600 14px ${THEME.fonts.primary}`;
  ctx.textAlign = 'left';
  ctx.fillText('Garden Crossing', 24, 34);

  ctx.textAlign = 'right';
  drawHearts(canvas.width - 24, 22, level2Lives, GAMEPLAY.level2.lives);

  ctx.restore();
}

function drawHearts(x, y, current, max) {
  const t = THEME.ui;
  const heartSize = 16;
  const spacing = 20;

  for (let i = max - 1; i >= 0; i--) {
    const hx = x - (max - i) * spacing;
    const filled = i < current;

    // Glow for filled hearts
    if (filled) {
      ctx.fillStyle = t.heartGlow;
      ctx.beginPath();
      ctx.arc(hx, y + heartSize * 0.5, heartSize * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }

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

// ===========================================
// SCREENS - Soft Overlays
// ===========================================
function drawSoftOverlay() {
  ctx.fillStyle = THEME.ui.overlayWarm;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPanel(x, y, width, height) {
  const t = THEME.ui;
  
  // Shadow
  ctx.fillStyle = t.panelShadow;
  ctx.beginPath();
  ctx.roundRect(x + 3, y + 4, width, height, 16);
  ctx.fill();
  
  // Panel
  ctx.fillStyle = t.panelBg;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 16);
  ctx.fill();
  ctx.strokeStyle = t.panelBorder;
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawStartScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 280;
  const panelH = 260;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2 - 20;
  
  drawPanel(panelX, panelY, panelW, panelH);

  ctx.fillStyle = t.textPrimary;
  ctx.font = `600 26px ${THEME.fonts.primary}`;
  ctx.textAlign = 'center';
  ctx.fillText("Golden Apple", canvas.width / 2, panelY + 50);

  ctx.font = `500 13px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText('A cozy mini-game collection', canvas.width / 2, panelY + 80);
  
  ctx.fillText('Catch fruits, avoid veggies', canvas.width / 2, panelY + 120);
  ctx.fillText('Guide the cat through the garden', canvas.width / 2, panelY + 145);
  ctx.fillText('Run through the dreamy path', canvas.width / 2, panelY + 170);

  drawButton(canvas.width / 2, panelY + 220, 'PLAY', t.buttonSuccess);
}

function drawLevel1WinScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 260;
  const panelH = 200;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2;
  
  drawPanel(panelX, panelY, panelW, panelH);

  ctx.font = `600 22px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textGold;
  ctx.textAlign = 'center';
  ctx.fillText('Level 1 Complete!', canvas.width / 2, panelY + 50);

  ctx.font = `500 15px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText(`${score} fruits collected!`, canvas.width / 2, panelY + 90);
  ctx.fillStyle = t.textSecondary;
  ctx.fillText('Next: Garden Crossing', canvas.width / 2, panelY + 115);

  drawButton(canvas.width / 2, panelY + 165, 'CONTINUE', t.buttonSuccess);
}

function drawLevel2IntroScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 280;
  const panelH = 240;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2;
  
  drawPanel(panelX, panelY, panelW, panelH);

  ctx.font = `600 20px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textPrimary;
  ctx.textAlign = 'center';
  ctx.fillText('Level 2: Garden Crossing', canvas.width / 2, panelY + 45);

  ctx.font = `500 13px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText('Guide the cute cat through', canvas.width / 2, panelY + 85);
  ctx.fillText('the magical garden!', canvas.width / 2, panelY + 105);
  ctx.fillText('Reach the golden GOAL at the top', canvas.width / 2, panelY + 135);
  ctx.fillText('Avoid hidden dangers', canvas.width / 2, panelY + 155);

  drawButton(canvas.width / 2, panelY + 200, 'START', t.buttonSuccess);
}

function drawLevel3IntroScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 280;
  const panelH = 230;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2;
  
  drawPanel(panelX, panelY, panelW, panelH);

  ctx.font = `600 20px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textPrimary;
  ctx.textAlign = 'center';
  ctx.fillText('Level 3: Dreamy Run', canvas.width / 2, panelY + 45);

  ctx.font = `500 13px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText('Run through the magical path!', canvas.width / 2, panelY + 85);
  ctx.fillText('Survive for 20 seconds', canvas.width / 2, panelY + 110);
  ctx.fillText('Avoid obstacles, collect stars', canvas.width / 2, panelY + 135);
  ctx.fillText('Use LEFT/RIGHT to change lanes', canvas.width / 2, panelY + 160);

  drawButton(canvas.width / 2, panelY + 195, 'START', t.buttonSuccess);
}

function drawLevel2HitScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 240;
  const panelH = 180;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2;
  
  drawPanel(panelX, panelY, panelW, panelH);

  ctx.font = `600 22px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textDanger;
  ctx.textAlign = 'center';
  ctx.fillText('Ouch!', canvas.width / 2, panelY + 45);

  ctx.font = `500 14px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('The cat found a trap!', canvas.width / 2, panelY + 80);
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Lives: ${level2Lives}`, canvas.width / 2, panelY + 105);

  drawButton(canvas.width / 2, panelY + 145, 'CONTINUE', t.buttonDanger);
}

function drawLevel2GameOverScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 240;
  const panelH = 180;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2;
  
  drawPanel(panelX, panelY, panelW, panelH);

  ctx.font = `600 22px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textDanger;
  ctx.textAlign = 'center';
  ctx.fillText('Game Over', canvas.width / 2, panelY + 45);

  ctx.font = `500 14px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('The cat ran out of lives!', canvas.width / 2, panelY + 80);
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Attempts: ${level2Attempts}`, canvas.width / 2, panelY + 105);

  drawButton(canvas.width / 2, panelY + 145, 'TRY AGAIN', t.buttonDanger);
}

function drawLevel3GameOverScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 240;
  const panelH = 180;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2;
  
  drawPanel(panelX, panelY, panelW, panelH);

  ctx.font = `600 22px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textDanger;
  ctx.textAlign = 'center';
  ctx.fillText('Game Over', canvas.width / 2, panelY + 45);

  ctx.font = `500 14px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('Hit too many obstacles!', canvas.width / 2, panelY + 80);
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Stars: ${level3.score}`, canvas.width / 2, panelY + 105);

  drawButton(canvas.width / 2, panelY + 145, 'TRY AGAIN', t.buttonDanger);
}

function drawLoseScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 240;
  const panelH = 180;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2;
  
  drawPanel(panelX, panelY, panelW, panelH);

  ctx.font = `600 22px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textDanger;
  ctx.textAlign = 'center';
  ctx.fillText('Game Over', canvas.width / 2, panelY + 45);

  ctx.font = `500 14px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('Too many veggies!', canvas.width / 2, panelY + 80);
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Score: ${score}`, canvas.width / 2, panelY + 105);

  drawButton(canvas.width / 2, panelY + 145, 'TRY AGAIN', t.buttonDanger);
}

function drawFinalWinScreen() {
  const t = THEME.ui;
  drawSoftOverlay();

  const panelW = 280;
  const panelH = 260;
  const panelX = canvas.width / 2 - panelW / 2;
  const panelY = canvas.height / 2 - panelH / 2;
  
  drawPanel(panelX, panelY, panelW, panelH);

  // Celebration sparkles
  for (let i = 0; i < 8; i++) {
    const sx = panelX + 20 + (i % 4) * 65 + Math.sin(globalTime * 0.003 + i) * 10;
    const sy = panelY + 15 + Math.floor(i / 4) * 230 + Math.cos(globalTime * 0.004 + i) * 5;
    drawSparkle(sx, sy, 6);
  }

  ctx.font = `600 28px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textGold;
  ctx.textAlign = 'center';
  ctx.fillText('Victory!', canvas.width / 2, panelY + 55);

  ctx.font = `500 16px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textPrimary;
  ctx.fillText('You completed all levels!', canvas.width / 2, panelY + 95);

  ctx.font = `500 13px ${THEME.fonts.primary}`;
  ctx.fillStyle = t.textSecondary;
  ctx.fillText(`Fruits: ${score}`, canvas.width / 2, panelY + 130);
  ctx.fillText(`Garden attempts: ${level2Attempts}`, canvas.width / 2, panelY + 150);
  ctx.fillText(`Stars collected: ${level3.score}`, canvas.width / 2, panelY + 170);

  drawButton(canvas.width / 2, panelY + 220, 'PLAY AGAIN', t.buttonSuccess);
}

function drawButton(x, y, text, color) {
  const t = THEME.ui;
  const btnWidth = 140;
  const btnHeight = 42;

  // Shadow
  ctx.fillStyle = t.buttonShadow;
  ctx.beginPath();
  ctx.roundRect(x - btnWidth / 2 + 2, y - btnHeight / 2 + 3, btnWidth, btnHeight, 12);
  ctx.fill();

  // Button
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(x - btnWidth / 2, y - btnHeight / 2, btnWidth, btnHeight, 12);
  ctx.fill();

  // Highlight
  ctx.fillStyle = t.buttonHighlight;
  ctx.beginPath();
  ctx.roundRect(x - btnWidth / 2 + 4, y - btnHeight / 2 + 3, btnWidth - 8, btnHeight / 3, 8);
  ctx.fill();

  // Text
  ctx.fillStyle = t.textPrimary;
  ctx.font = `600 16px ${THEME.fonts.primary}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y + 1);
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
  catAnimation.isWalking = false;
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

function startLevel3() {
  currentLevel = 3;
  resetLevel3();
  gameState = 'level3';
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

  if (gameState === 'level3') {
    if (e.key === 'ArrowLeft' || e.key === 'a') moveLevel3Player(-1);
    if (e.key === 'ArrowRight' || e.key === 'd') moveLevel3Player(1);
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
    if (gameState === 'level3') moveLevel3Player(-1);
  });
  leftBtn.addEventListener('touchend', (e) => { e.preventDefault(); player.moving.left = false; });
  leftBtn.addEventListener('mousedown', () => {
    if (gameState === 'playing') player.moving.left = true;
    if (gameState === 'level2') movePlayer(-1, 0);
    if (gameState === 'level3') moveLevel3Player(-1);
  });
  leftBtn.addEventListener('mouseup', () => player.moving.left = false);
  leftBtn.addEventListener('mouseleave', () => player.moving.left = false);
}

if (rightBtn) {
  rightBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (gameState === 'playing') player.moving.right = true;
    if (gameState === 'level2') movePlayer(1, 0);
    if (gameState === 'level3') moveLevel3Player(1);
  });
  rightBtn.addEventListener('touchend', (e) => { e.preventDefault(); player.moving.right = false; });
  rightBtn.addEventListener('mousedown', () => {
    if (gameState === 'playing') player.moving.right = true;
    if (gameState === 'level2') movePlayer(1, 0);
    if (gameState === 'level3') moveLevel3Player(1);
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
    case 'level3Intro': startLevel3(); break;
    case 'level3GameOver': startLevel3(); break;
    case 'lose': startGame(); break;
    case 'finalWin': startGame(); break;
  }
}

// Canvas click handling
canvas.addEventListener('click', (e) => {
  if (gameState === 'playing' || gameState === 'level2' || gameState === 'level3') return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const btnX = canvas.width / 2;
  let btnY;

  switch (gameState) {
    case 'start': btnY = canvas.height / 2 + 50; break;
    case 'level1Win': btnY = canvas.height / 2 + 65; break;
    case 'level2Intro': btnY = canvas.height / 2 + 80; break;
    case 'level3Intro': btnY = canvas.height / 2 + 75; break;
    case 'level2Hit': btnY = canvas.height / 2 + 55; break;
    case 'level2GameOver': btnY = canvas.height / 2 + 55; break;
    case 'level3GameOver': btnY = canvas.height / 2 + 55; break;
    case 'lose': btnY = canvas.height / 2 + 55; break;
    case 'finalWin': btnY = canvas.height / 2 + 90; break;
  }

  if (Math.abs(x - btnX) < 70 && Math.abs(y - btnY) < 22) handleButtonClick();
});

canvas.addEventListener('touchend', (e) => {
  if (gameState === 'playing' || gameState === 'level2' || gameState === 'level3') return;
  e.preventDefault();

  const rect = canvas.getBoundingClientRect();
  const touch = e.changedTouches[0];
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  const btnX = canvas.width / 2;
  let btnY;

  switch (gameState) {
    case 'start': btnY = canvas.height / 2 + 50; break;
    case 'level1Win': btnY = canvas.height / 2 + 65; break;
    case 'level2Intro': btnY = canvas.height / 2 + 80; break;
    case 'level3Intro': btnY = canvas.height / 2 + 75; break;
    case 'level2Hit': btnY = canvas.height / 2 + 55; break;
    case 'level2GameOver': btnY = canvas.height / 2 + 55; break;
    case 'level3GameOver': btnY = canvas.height / 2 + 55; break;
    case 'lose': btnY = canvas.height / 2 + 55; break;
    case 'finalWin': btnY = canvas.height / 2 + 90; break;
  }

  if (Math.abs(x - btnX) < 70 && Math.abs(y - btnY) < 22) handleButtonClick();
});

// ===========================================
// MAIN GAME LOOP
// ===========================================
let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  if (deltaTime > 100) deltaTime = 16;
  lastTime = timestamp;
  globalTime = timestamp;

  if (gameState === 'playing') {
    drawLevel1Background();

    const cfg = GAMEPLAY.level1;
    gameTime += deltaTime;

    currentFallSpeed = Math.min(cfg.maxFallSpeed, cfg.initialFallSpeed + (gameTime * cfg.speedIncreaseRate));
    currentSpawnInterval = Math.max(cfg.minSpawnInterval, cfg.spawnInterval - gameTime * 0.04);

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
    updateCatAnimation(deltaTime);
    drawMinefield();
    drawLevel2UI();

  } else if (gameState === 'level3') {
    updateLevel3(deltaTime);
    drawLevel3();

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

  } else if (gameState === 'level3Intro') {
    drawLevel3Background();
    drawLevel3IntroScreen();

  } else if (gameState === 'level2Hit') {
    drawLevel2Background();
    drawMinefield();
    drawLevel2HitScreen();

  } else if (gameState === 'level2GameOver') {
    drawLevel2Background();
    drawMinefield();
    drawLevel2GameOverScreen();

  } else if (gameState === 'level3GameOver') {
    drawLevel3Background();
    drawLevel3GameOverScreen();

  } else if (gameState === 'lose') {
    drawLevel1Background();
    player.draw();
    drawLoseScreen();

  } else if (gameState === 'finalWin') {
    drawLevel2Background();
    drawFinalWinScreen();
  }

  requestAnimationFrame(gameLoop);
}

function drawLevel1Background() {
  const t = THEME.level1;

  // Soft dreamy sky gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, t.skyGradientTop);
  gradient.addColorStop(0.7, t.skyGradientBottom);
  gradient.addColorStop(1, t.grassColor);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grass with gentle waves
  ctx.fillStyle = t.grassColor;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 25);
  for (let x = 0; x <= canvas.width; x += 20) {
    const wave = Math.sin(x * 0.05 + globalTime * 0.002) * 3;
    ctx.lineTo(x, canvas.height - 25 + wave);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  // Grass highlight
  ctx.fillStyle = t.grassHighlight;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 20);
  for (let x = 0; x <= canvas.width; x += 15) {
    const wave = Math.sin(x * 0.07 + globalTime * 0.003 + 1) * 2;
    ctx.lineTo(x, canvas.height - 18 + wave);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;

  // Soft clouds
  drawClouds();

  // Small flowers in grass
  ctx.globalAlpha = 0.6;
  for (let i = 0; i < 6; i++) {
    const fx = 30 + i * 65;
    const fy = canvas.height - 15 + Math.sin(i * 2) * 5;
    drawSmallFlower(fx, fy, 5, i % 3);
  }
  ctx.globalAlpha = 1;
}

function drawClouds() {
  const t = THEME.level1;
  const cloudOffset = (globalTime * 0.015) % 300;
  
  // Cloud shadows
  ctx.fillStyle = t.cloudShadow;
  ctx.beginPath();
  ctx.arc(85 - cloudOffset * 0.3, 88, 22, 0, Math.PI * 2);
  ctx.arc(112 - cloudOffset * 0.3, 78, 26, 0, Math.PI * 2);
  ctx.arc(138 - cloudOffset * 0.3, 86, 22, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width - 95 + cloudOffset * 0.2, 128, 18, 0, Math.PI * 2);
  ctx.arc(canvas.width - 68 + cloudOffset * 0.2, 118, 22, 0, Math.PI * 2);
  ctx.arc(canvas.width - 45 + cloudOffset * 0.2, 123, 16, 0, Math.PI * 2);
  ctx.fill();

  // Main clouds
  ctx.fillStyle = t.cloudColor;
  ctx.beginPath();
  ctx.arc(80 - cloudOffset * 0.3, 85, 22, 0, Math.PI * 2);
  ctx.arc(108 - cloudOffset * 0.3, 74, 27, 0, Math.PI * 2);
  ctx.arc(135 - cloudOffset * 0.3, 82, 22, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width - 98 + cloudOffset * 0.2, 124, 18, 0, Math.PI * 2);
  ctx.arc(canvas.width - 72 + cloudOffset * 0.2, 114, 23, 0, Math.PI * 2);
  ctx.arc(canvas.width - 48 + cloudOffset * 0.2, 120, 16, 0, Math.PI * 2);
  ctx.fill();
}

// Initialize
preloadAssets();
player.init();
requestAnimationFrame(gameLoop);
