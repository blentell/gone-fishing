// Gone Fishing Game ===========================================================

const prompt = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');

const choice = 'What would you like to do? ';
userInput = "";

// Start a loop to continue until the game is complete =========================

// Create a function to call random fish when needed ===========================

function generateRandomFish() {
// Empty array to store the fish information ===================================
    const fish = {};
// Create objects to contain fish descriptors (2 of them) and type of fish =====
    
    const fishColors = ["Red", "Blue", "Green", "White", "Orange", "Speckled",
        "Pink", "Transparent", "Brown", "Black", "Purple", "Ruby",
        "Lemon-chiffon"];
    
    const fishDescriptor = [" Slimy", " Scaley", " Slippery", " Finned",
        " Bigmouthed", " Googley-eyed", " Pucker-mouthed", " Large", " Small",
        " Medium", " Wriggling", " Plastic", " Wooden"];
    
    const fishNames = [" Bass", " Trout", " Mackerel", " Salmon", " Tilapia", " Cod",
        " Jellyfish", " Swordfish", " Shark", " Stingray", " Whale", " Axolotl",
        " Clown-fish"];

// Create objects to store fish weight and value with random integers ==========

// Create object to contain weights ============================================
    const fishWeightsArray = [];
    fishWeights = `${(Math.random() * 1000 / 100).toFixed(2)} lbs`;

// Create object to contain values =============================================
    const fishValuesArray = [];
    let fishValues = `$${(Math.random() * 1000 / 100).toFixed(2)}`;

// Create random integers for pulling random items from arrays =================
    let randomFish = Math.floor(Math.random() * 13)
    let string = "";
        string += fishColors[randomFish]
        string += fishDescriptor[randomFish];
        string += fishNames[randomFish];
            console.log(string);
    string = JSON.stringify(string);
    fish.name = string;
            return fish;
    }

const genFish = generateRandomFish();

while (!(userInput === 'end')) {
    console.log(chalk.magenta('Hello World'));
    console.log(chalk.yellow(choice));
    userInput = prompt("> ");
    console.log(genFish);
}    


// Track the time of day (6 hours to fish before game is over)==================

// Limit the total weight of caught fish to 10lbs ==============================

// Display the users total caught fish, combined weight, and their value =======

// When game ends, display all caught fish, weight, and value ==================