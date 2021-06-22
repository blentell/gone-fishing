// Gone Fishing Game ===========================================================

const prompt = require('prompt-sync')();
const chalk = require('chalk');

const choice = 'What would you like to do? ';
userInput = "";

while (!(userInput === 'end')) {
    console.log(chalk.magenta('Hello World'));
    console.log(chalk.yellow(choice));
    userInput = prompt("> ");
}

// Create a function to call random fish when needed ===========================

function generateRandomFish(fish) {
// Empty array to store the fish information ===================================
    const fish = {};
// Create objects to contain fish descriptors (2 of them) and type of fish =====
    
    const fishColors = ["Red", "Blue", "Green", "White", "Orange", "Speckled",
        "Pink", "Transparent", "Brown", "Black", "Purple", "Ruby",
        "Lemon-chiffon"];
    
    const fishDescriptor = ["Slimy", "Scaley", "Slippery", "Finned",
        "Bigmouthed", "Googley-eyed", "Pucker-mouthed", "Large", "Small",
        "Medium", "Wriggling", "Plastic", "Wooden"];
    
    const fishNames = ["Bass", "Trout", "Mackerel", "Salmon", "Tilapia", "Cod",
        "Jellyfish", "Swordfish", "Shark", "Stingray", "Whale", "Axolotl",
        "Clown-fish"];

// Create objects to store fish weight and value with random integers ==========

    const fishWeights = [];
    fishWeights = `${(Math.random() * 1000 / 100).toFixed(2)} lbs`;
    const fishValues = [];
    fishValues = `$${(Math.random() * 1000 / 100).toFixed(2)}`;

        for (i = 0; i < fish.length; i++){

    }
}
const fish = generateRandomFish();

// Random dice program == convert for fish =====================================
// const dieRoll = Math.random()
// console.log(dieRoll);

// if (dieRoll < .165) {
//     console.log('You rolled a ', Math.ceil((dieRoll) * 1));
// }
// else if (dieRoll < .33) {
//     console.log('You rolled a ', Math.ceil((dieRoll) *2));
// }
// else if (dieRoll < .495) {
//     console.log('You rolled a ', Math.ceil(dieRoll) *3);
// }
// else if (dieRoll < .66) {
//     console.log('You rolled a ', Math.ceil(dieRoll) *4);
// }
// else if (dieRoll < .825) {
//         console.log('You rolled a ', Math.ceil(dieRoll) *5);
// }
// else if (dieRoll < .999) {
//     console.log("You rolled a ", Math.ceil(dieRoll) * 6);
// }


// Create object to contain weights ============================================
// Create object to contain values =============================================
// Track the time of day (6 hours to fish before game is over)==================

// Limit the total weight of caught fish to 10lbs ==============================

// Display the users total caught fish, combined weight, and their value =======

// When game ends, display all caught fish, weight, and value ==================