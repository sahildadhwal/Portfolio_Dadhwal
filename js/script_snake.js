const gameBoard = document.getElementById('game-board');
const applePreview = document.getElementById('apple-preview');
const applePreviewImage = document.getElementById('apple-preview-image');
const scoreDisplay = document.getElementById('score-display'); // Display the score
const maxScoreDisplay = document.getElementById('max-score-display'); // Display the max score


const eatSound = new Audio('audio/short/rizz.mp3');
const deathSound = new Audio('audio/short/spongefail.mp3'); 


const boardSize = 20; // Grid size (20x20)
let snake = [{ x: 10, y: 10 }]; // Starting position of the snake
let direction = 'RIGHT';
let apple = {};
let score = 0;
let maxScore = localStorage.getItem('maxScore') ? parseInt(localStorage.getItem('maxScore')) : 0; // Get max score from localStorage

// List of images (replace with actual paths to images)
const images = ['images/photos/photo1.jpg', 'images/photos/photo2.jpg', 'images/photos/photo3.jpg', 'images/photos/photo4.jpg']; // Adjust this list based on your images

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

  // Pick a random image for the apple
  const randomImage = images[Math.floor(Math.random() * images.length)];
  appleElement.style.backgroundImage = `url(${randomImage})`;
  applePreviewImage.src = randomImage; // Update preview image
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
        deathSound.play()
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

  // Wall wrapping logic (snake will appear on the opposite side when it hits a wall)
  if (head.x < 0) head.x = boardSize - 1; // Wrap around left
  if (head.x >= boardSize) head.x = 0; // Wrap around right
  if (head.y < 0) head.y = boardSize - 1; // Wrap around top
  if (head.y >= boardSize) head.y = 0; // Wrap around bottom

  // Check if the snake eats the apple
  if (head.x === apple.x && head.y === apple.y) {
    score += 1; // Increase score
    scoreDisplay.textContent = `Current: ${score}`; // Update score display
    placeApple(); // Place a new apple
    
    // Play the sound once when the apple is eaten
    eatSound.play();


    // Update max score if the current score is higher
    if (score > maxScore) {
        maxScore = score;
        localStorage.setItem('maxScore', maxScore); // Save max score to localStorage
        maxScoreDisplay.textContent = `High Score: ${maxScore}`; // Update max score display
    }
} else {
    snake.pop(); // Remove the last part of the snake (tail)
  }

  // Add the new head to the snake
  snake.unshift(head);
  drawSnake();

  // Check for collisions
  if (checkCollision()) {
    resetGame(); // Reset the game if collision occurs
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

// Game loop to update the game state every 100ms
function gameLoop() {
  moveSnake();
}

// Reset the game to its initial state
function resetGame() {
  snake = [{ x: 10, y: 10 }]; // Reset snake to initial position
  direction = 'RIGHT'; // Reset direction to right
  score = 0; // Reset score
  scoreDisplay.textContent = `Current: ${score}`; // Update score display
  gameBoard.innerHTML = ''; // Clear the game board
  placeApple(); // Place a new apple
}

// Start the game
function startGame() {
  placeApple(); // Place the first apple
  maxScoreDisplay.textContent = `High Score: ${maxScore}`; // Display the max score on the page
  setInterval(gameLoop, 100); // Start the game loop
}

// Start the game when the page loads
startGame();
