// Game variables
let canvas, ctx;
let snake = [];
let food = {};
let direction = 'right';
let gameLoop;
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
const gridSize = 20;
const gameSpeed = 100;

const eatSound = new Audio('../audio/short/rizz.mp3');
const deathSound = new Audio('../audio/short/spongefail.mp3');

const previewImages = Array.from({ length: 27 }, (_, i) => `images/photos/photo${i + 1}.jpg`);
let currentImageIndex = 0;

function updatePreviewImage() {
    // Randomly select next image, ensuring it's different from current
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * previewImages.length);
    } while (newIndex === currentImageIndex);

    currentImageIndex = newIndex;
    const previewImg = document.querySelector('#apple-preview img');
    previewImg.src = previewImages[currentImageIndex];
}

// Initialize game
function initGame() {
    canvas = document.getElementById('game-board');
    ctx = canvas.getContext('2d');
    resetGame();
    document.getElementById('highScore').textContent = highScore;
    updatePreviewImage();
    startGame();
}

// Reset the game state to the initial values
function resetGame() {
    snake = [{ x: 10, y: 10 }];  // Starting position of the snake
    direction = 'right';          // Default direction
    score = 0;                    // Reset score
    generateFood();               // Generate new food
    clearInterval(gameLoop);      // Stop the previous game loop if it exists
}

// Start the game loop for the new game
function startGame() {
    gameLoop = setInterval(function() {
        moveSnake();
        checkGameOver();  // This will handle the wall collision and self-collision
        draw();
        updateScore();
    }, gameSpeed);
}

// Generate food at random position
function generateFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / gridSize)),
        y: Math.floor(Math.random() * (canvas.height / gridSize))
    };
    while (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
        food = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)),
            y: Math.floor(Math.random() * (canvas.height / gridSize))
        };
    }
}

// Draw the game state
function draw() {
    ctx.fillStyle = '#575555';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? '#25eb2f' : '#25eb2f';
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    });
    
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
}

// Move the snake based on the direction
function moveSnake() {
    let head = { ...snake[0] };
    if (direction === 'up') head.y--;
    if (direction === 'down') head.y++;
    if (direction === 'left') head.x--;
    if (direction === 'right') head.x++;

    snake.unshift(head);

    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
        eatSound.play();
        score += 5;
        generateFood();
        updatePreviewImage(); // Update apple preview image after eating

    } else {
        snake.pop();
    }
}

// Check if the snake collides with the walls (wrap-around effect) or itself
function checkGameOver() {
    let head = snake[0];

    // Wrap-around behavior (wall collisions)
    if (head.x < 0) {
        head.x = canvas.width / gridSize - 1;  // Wrap to the right side
    } else if (head.x >= canvas.width / gridSize) {
        head.x = 0;  // Wrap to the left side
    }

    if (head.y < 0) {
        head.y = canvas.height / gridSize - 1;  // Wrap to the bottom
    } else if (head.y >= canvas.height / gridSize) {
        head.y = 0;  // Wrap to the top
    }

    // If snake wraps wall and spawns on apple, eat that too
    if (head.x === food.x && head.y === food.y) {
        eatSound.play();
        score += 5;
        generateFood();
        updatePreviewImage(); // Update apple preview image after eating

    }
    // Check if snake collides with itself
    if (snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
        deathSound.play();
        endGame();  // Start a new game

    }
}

// End the game and start a new one immediately
function endGame() {
    // Save high score if the current score is higher
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
    }

    // Reset the game state
    resetGame();

    // Start the game loop for the new game
    startGame();

    // Optionally, you could display a message here if desired (e.g., 'Game Over! Starting New Game...')
}


// Update score display
function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('highScore').textContent = highScore;
}

// Controls for the snake
window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
});

// Modal functionality
function openSnakeModal() {
    document.getElementById('snake-modal').style.display = 'block';
    initGame(); // Start the game when modal opens
}

function closeSnakeModal() {
    document.getElementById('snake-modal').style.display = 'none';
    clearInterval(gameLoop); // Stop the game loop when modal closes
}

window.onclick = function(event) {
    const modal = document.getElementById('snake-modal');
    if (event.target === modal) {
        closeSnakeModal();
    }
}

