const planets = [
    { name: "Sun", distance: 0 },
    { name: "Mercury", distance: 58 }, // Million KM
    { name: "Venus", distance: 108 },
    { name: "Earth", distance: 150 },
    { name: "Mars", distance: 228 },
    { name: "Jupiter", distance: 778 },
    { name: "Saturn", distance: 1427 },
    { name: "Uranus", distance: 2871 },
    { name: "Neptune", distance: 4497 }
];

let score = 0;
let planet1, planet2;

const planet1Element = document.getElementById("planet1");
const planet2Element = document.getElementById("planet2");
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submitGuess");
const feedbackElement = document.getElementById("feedback");
const scoreValueElement = document.getElementById("scoreValue");
const newGameButton = document.getElementById("newGame");


function getRandomPlanets() {
    planet1 = planets[Math.floor(Math.random() * planets.length)];
    planet2 = planets[Math.floor(Math.random() * planets.length)];

    while (planet1 === planet2) { // Ensure planets are different
        planet2 = planets[Math.floor(Math.random() * planets.length)];
    }

    planet1Element.textContent = planet1.name;
    planet2Element.textContent = planet2.name;
}

function checkGuess() {
    const guess = parseFloat(guessInput.value);

    if (isNaN(guess)) {
        feedbackElement.textContent = "Please enter a valid number.";
        return;
    }

    const actualDistance = Math.abs(planet1.distance - planet2.distance);
    const difference = Math.abs(guess - actualDistance);

    if (difference <= 50) { // Adjust threshold as needed
        feedbackElement.textContent = "Correct! Great guess!";
        score++;
    } else {
        feedbackElement.textContent = `Incorrect. The distance is approximately ${actualDistance} million km.`;
    }

    scoreValueElement.textContent = score;
    guessInput.value = ""; // Clear the input
    getRandomPlanets();      // Load the next question
}

function startNewGame() {
    score = 0;
    scoreValueElement.textContent = 0;
    feedbackElement.textContent = ""; // Clear previous feedback
    getRandomPlanets();
}

submitButton.addEventListener("click", checkGuess);
newGameButton.addEventListener("click", startNewGame);

startNewGame(); // Initialize the game on page load
