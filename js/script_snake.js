const gameBoard = document.getElementById('game-board');
const applePreview = document.getElementById('apple-preview');
const applePreviewImage = document.getElementById('apple-preview-image');
const scoreDisplay = document.getElementById('score-display');
const maxScoreDisplay = document.getElementById('max-score-display');

const eatSound = new Audio('/audio/short/rizz.mp3');
const deathSound = new Audio('/audio/short/spongefail.mp3');

const boardSize = 20;
let snake = [{ x: 10, y: 10 }];
let direction = 'RIGHT';
let apple = {};
let score = 0;
let maxScore = localStorage.getItem('maxScore') ? parseInt(localStorage.getItem('maxScore')) : 0;

// List of images
const images = [
  '/images/photos/photo1.jpg', '/images/photos/photo2.jpg', '/images/photos/photo3.jpg', '/images/photos/photo4.jpg', 
  '/images/photos/photo5.jpg', '/images/photos/photo6.jpg', '/images/photos/photo7.jpg', '/images/photos/photo8.jpg', 
  '/images/photos/photo9.jpg', '/images/photos/photo10.jpg', '/images/photos/photo11.jpg', '/images/photos/photo12.jpg', 
  '/images/photos/photo13.jpg', '/images/photos/photo14.jpg', '/images/photos/photo15.jpg', '/images/photos/photo16.jpg', 
  '/images/photos/photo17.jpg', '/images/photos/photo18.jpg', '/images/photos/photo19.jpg', '/images/photos/photo20.jpg', 
  '/images/photos/photo21.jpg', '/images/photos/photo22.jpg', '/images/photos/photo23.jpg', '/images/photos/photo24.jpg', 
  '/images/photos/photo25.jpg', '/images/photos/photo26.jpg', '/images/photos/photo27.jpg'
];

// Add a queue to track available images
let imageQueue = [];

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Get the next image from the queue, reshuffle if empty
function getNextImage() {
  if (imageQueue.length === 0) {
    // If queue is empty, create a new shuffled queue with all images
    imageQueue = [...images];
    shuffleArray(imageQueue);
  }
  return imageQueue.pop();
}

// Generate a random position for the apple
function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize)
  };
}

// Place apple on the game board and set the preview
function placeApple() {
  // Remove the previous apple if it exists
  const existingApple = document.querySelector('.apple');
  if (existingApple) {
    existingApple.remove();
  }

  apple = getRandomPosition();

  // Set the apple position on the game board
  const appleElement = document.createElement('div');
  appleElement.classList.add('apple');
  appleElement.style.gridColumnStart = apple.x + 1;
  appleElement.style.gridRowStart = apple.y + 1;

  // Get next image from our queue instead of random selection
  const nextImage = getNextImage();
  appleElement.style.backgroundImage = `url(${nextImage})`;
  applePreviewImage.src = nextImage; // Update preview image
  gameBoard.appendChild(appleElement);
}

// Draw the snake on the game board
function drawSnake() {
  // Clear previous snake
  const snakeElements = gameBoard.querySelectorAll('.snake');
  snakeElements.forEach(element => element.remove());

  snake.forEach(segment => {
    const segmentElement = document.createElement('div');
    segmentElement.classList.add('snake');
    segmentElement.style.gridColumnStart = segment.x + 1;
    segmentElement.style.gridRowStart = segment.y + 1;
    gameBoard.appendChild(segmentElement);
  });
}

// Check for collisions with the snake's own body
function checkCollision() {
  const head = snake[0];

  // Check if the snake hits its own body
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      deathSound.play();
      return true;
    }
  }

  return false;
}

// Move the snake
function moveSnake() {
  const head = { ...snake[0] };

  switch (direction) {
    case 'UP':
      head.y -= 1;
      break;
    case 'DOWN':
      head.y += 1;
      break;
    case 'LEFT':
      head.x -= 1;
      break;
    case 'RIGHT':
      head.x += 1;
      break;
  }

  // Wall wrapping logic
  if (head.x < 0) head.x = boardSize - 1;
  if (head.x >= boardSize) head.x = 0;
  if (head.y < 0) head.y = boardSize - 1;
  if (head.y >= boardSize) head.y = 0;

  // Check if the snake eats the apple
  if (head.x === apple.x && head.y === apple.y) {
    score += 1;
    scoreDisplay.textContent = `Current: ${score}`;
    placeApple();
    eatSound.play();

    if (score > maxScore) {
      maxScore = score;
      localStorage.setItem('maxScore', maxScore);
      maxScoreDisplay.textContent = `High Score: ${maxScore}`;
    }
  } else {
    snake.pop();
  }

  snake.unshift(head);
  drawSnake();

  if (checkCollision()) {
    resetGame();
  }
}

// Listen for key presses to change snake direction
document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction !== 'DOWN') direction = 'UP';
      break;
    case 'ArrowDown':
      if (direction !== 'UP') direction = 'DOWN';
      break;
    case 'ArrowLeft':
      if (direction !== 'RIGHT') direction = 'LEFT';
      break;
    case 'ArrowRight':
      if (direction !== 'LEFT') direction = 'RIGHT';
      break;
  }
});

// Reset the game to its initial state
function resetGame() {
  snake = [{ x: 10, y: 10 }];
  direction = 'RIGHT';
  score = 0;
  scoreDisplay.textContent = `Current: ${score}`;
  gameBoard.innerHTML = '';
  imageQueue = []; // Reset image queue to force a new shuffle
  placeApple();
}

// Game loop to update the game state every 100ms
function gameLoop() {
  moveSnake();
}

// Start the game
function startGame() {
  placeApple();
  maxScoreDisplay.textContent = `High Score: ${maxScore}`;
  setInterval(gameLoop, 100);
}

// Start the game when the page loads
startGame();