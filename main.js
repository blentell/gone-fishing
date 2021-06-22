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
// Create objects to contain fish descriptors (2 of them) and type of fish =====
// Create object to contain weights ============================================
// Create object to contain values =============================================
// Track the time of day (6 hours to fish before game is over)==================

// Limit the total weight of caught fish to 10lbs ==============================

// Display the users total caught fish, combined weight, and their value =======

// When game ends, display all caught fish, weight, and value ==================