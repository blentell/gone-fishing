// Gone Fishing Game ===========================================================

const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");
console.clear();
// Its art.  ASCII art. ====================================================

console.log(
	chalk.red(
		" ________  ______   ______   __    __  ______  __    __   ______          ______    ______   __       __  ________"
	)
);
console.log(
	chalk.white(
		"|        \\|      \\ /      \\ |  \\  |  \\|      \\|  \\  |  \\ /      \\        /      \\  /      \\ |  \\     /  \\|        \\ "
	)
);
console.log(
	chalk.blue(
		"| $$$$$$$$ \\$$$$$$|  $$$$$$\\| $$  | $$ \\$$$$$$| $$\\ | $$|  $$$$$$\\      |  $$$$$$\\|  $$$$$$\\| $$\\   /  $$| $$$$$$$$"
	)
);
console.log(
	chalk.red(
		"| $$__      | $$  | $$___\\$$| $$__| $$  | $$  | $$$\\| $$| $$ __\\$$      | $$ __\\$$| $$__| $$| $$$\\ /  $$$| $$__    "
	)
);
console.log(
	chalk.white(
		"| $$  \\     | $$   \\$$    \\ | $$    $$  | $$  | $$$$\\ $$| $$|    \\      | $$|    \\| $$    $$| $$$$\\  $$$$| $$  \\   "
	)
);
console.log(
	chalk.blue(
		"| $$$$$     | $$   _\\$$$$$$\\| $$$$$$$$  | $$  | $$\\$$ $$| $$ \\$$$$      | $$ \\$$$$| $$$$$$$$| $$\\$$ $$ $$| $$$$$   "
	)
);
console.log(
	chalk.red(
		"| $$       _| $$_ |  \\__| $$| $$  | $$ _| $$_ | $$ \\$$$$| $$__| $$      | $$__| $$| $$  | $$| $$ \\$$$| $$| $$_____ "
	)
);
console.log(
	chalk.white(
		"| $$      |   $$ \\ \\$$    $$| $$  | $$|   $$ \\| $$  \\$$$ \\$$    $$       \\$$    $$| $$  | $$| $$  \\$ | $$| $$     \\ "
	)
);
console.log(
	chalk.blue(
		" \\$$       \\$$$$$$  \\$$$$$$  \\$$   \\$$ \\$$$$$$ \\$$   \\$$  \\$$$$$$         \\$$$$$$  \\$$   \\$$ \\$$      \\$$ \\$$$$$$$$"
	)
);
console.log("");
console.log("");
console.log(
	chalk.green(
		`       You've gone fishing! Try to maximize the value of your caught fish. You can fish
             for six hours (till 12:00pm) and catch at most 10 lbs of fish.`
	)
);
console.log("");

// Track the time of day (6 hours to fish before game is over)==================
let time = 6;
// Had to make minutes a separate variable because of random time ==============
let minutes = 0;
// Create the array to hold any fish that are kept =============================
const keptFish = [];
// Need a variable to keep track of fish kept ==================================
let count = 0;
// Variable to track kept fish values ==========================================
let value = 0;
// Variable to track kept fish weights =========================================
let weight = 0;
// Oooweeee dubloon counter! ===================================================
let dubloonCount = 0;

// Start a loop to continue until the game is complete =========================
// Limit the total weight of caught fish to 10lbs ==============================
while (time < 12 && weight < 10) {
	// This will display each time we loop through =============================
	const display = `    The time is ${time}:${minutes}am. So far you've caught: ${count} fish, weighing a total of ${weight.toFixed(
		2
	)} lbs, with a value of $${value.toFixed(2)}`;
	// Temporary array to house fish until they are kept or released ===========
	const fish = {};
	// Create a function to call random fish when needed =======================
	function generateRandomFish() {
		// Create objects to contain fish descriptors (2 of them) and type of fish =====
		const fishColors = [
			"Red",
			"Blue",
			"Green",
			"White",
			"Orange",
			"Speckled",
			"Pink",
			"Transparent",
			"Brown",
			"Black",
			"Purple",
			"Ruby",
			"Lemon-chiffon",
		];

		const fishDescriptor = [
			" Slimy",
			" Scaley",
			" Slippery",
			" Finned",
			" Bigmouthed",
			" Googley-eyed",
			" Pucker-mouthed",
			" Large",
			" Small",
			" Medium",
			" Wriggling",
			" Plastic",
			" Wooden",
		];

		const fishNames = [
			" Bass",
			" Trout",
			" Mackerel",
			" Salmon",
			" Tilapia",
			" Cod",
			" Jellyfish",
			" Swordfish",
			" Shark",
			" Stingray",
			" Whale",
			" Axolotl",
			" Clown-fish",
		];

		// Create variable to create random weights ============================
		fishWeights = ((Math.random() * 1000) / 100).toFixed(2);

		// Create variable to create random values =============================
		let fishValues = ((Math.random() * 1000) / 100).toFixed(2);

		// Create random integers for pulling random items from arrays =========
		let randomFish = Math.floor(Math.random() * 13);

		// Create random number for golden dubloon =============================
		let dubloon = Math.floor(Math.random() * 10);

		// Create a random time increment between 15 mins and 45 mins ==========
		function randomInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// Create an empty string to store each of the fish adjectives =========
		let string = "";
		// Add fish adjectives to empty string =================================
		string += fishColors[randomFish];
		string += fishDescriptor[randomFish];
		string += fishNames[randomFish];

		// Push the string into fish object ====================================
		fish.name = string;
		fish.weight = fishWeights;
		fish.value = fishValues;
		// Call the randomTime function ========================================
		randomTime = randomInteger(15, 45);
		// Time shifter, keeps time looking like time ==========================
		if (minutes + randomTime >= 60) {
			time = time + 1;
			minutes = 60 - minutes;
		} else {
			minutes += randomTime;
		}
		// Ooooweeee dubloons ==================================================
		if (dubloon === 3) {
			console.log("");
			console.log(
				chalk.red("           You have found a golden dubloon worth $50!!!")
			);
			dubloonCount++;
		}
		// End of the function, print out the results ==========================
		return chalk.magenta(
			`      You caught a ${string} fish, weighing ${fishWeights} lbs and valued at $${fishValues}`
		);
	}
	// Create variable to easily call random fish....here boy! =================
	const genFish = generateRandomFish();
	console.log("");
	// Print the time of day and fish caught information =======================
	console.log(chalk.yellow(display));
	console.log("");
	userInput = prompt(
		chalk.yellow.bold("                  Hit [Enter] to fish ")
	);
	// Clears the screen, keep it clean ========================================
	console.clear();
	console.log("");
	// Its art.  ASCII art. ====================================================
	console.log(
		chalk.red(
			" ________  ______   ______   __    __  ______  __    __   ______          ______    ______   __       __  ________"
		)
	);
	console.log(
		chalk.white(
			"|        \\|      \\ /      \\ |  \\  |  \\|      \\|  \\  |  \\ /      \\        /      \\  /      \\ |  \\     /  \\|        \\ "
		)
	);
	console.log(
		chalk.blue(
			"| $$$$$$$$ \\$$$$$$|  $$$$$$\\| $$  | $$ \\$$$$$$| $$\\ | $$|  $$$$$$\\      |  $$$$$$\\|  $$$$$$\\| $$\\   /  $$| $$$$$$$$"
		)
	);
	console.log(
		chalk.red(
			"| $$__      | $$  | $$___\\$$| $$__| $$  | $$  | $$$\\| $$| $$ __\\$$      | $$ __\\$$| $$__| $$| $$$\\ /  $$$| $$__    "
		)
	);
	console.log(
		chalk.white(
			"| $$  \\     | $$   \\$$    \\ | $$    $$  | $$  | $$$$\\ $$| $$|    \\      | $$|    \\| $$    $$| $$$$\\  $$$$| $$  \\   "
		)
	);
	console.log(
		chalk.blue(
			"| $$$$$     | $$   _\\$$$$$$\\| $$$$$$$$  | $$  | $$\\$$ $$| $$ \\$$$$      | $$ \\$$$$| $$$$$$$$| $$\\$$ $$ $$| $$$$$   "
		)
	);
	console.log(
		chalk.red(
			"| $$       _| $$_ |  \\__| $$| $$  | $$ _| $$_ | $$ \\$$$$| $$__| $$      | $$__| $$| $$  | $$| $$ \\$$$| $$| $$_____ "
		)
	);
	console.log(
		chalk.white(
			"| $$      |   $$ \\ \\$$    $$| $$  | $$|   $$ \\| $$  \\$$$ \\$$    $$       \\$$    $$| $$  | $$| $$  \\$ | $$| $$     \\ "
		)
	);
	console.log(
		chalk.blue(
			" \\$$       \\$$$$$$  \\$$$$$$  \\$$   \\$$ \\$$$$$$ \\$$   \\$$  \\$$$$$$         \\$$$$$$  \\$$   \\$$ \\$$      \\$$ \\$$$$$$$$"
		)
	);
	console.log("");
	console.log("");
	// Display the random fish from our function ===============================
	console.log(genFish);
	console.log("");
	// Decisions, Decisions ====================================================
	console.log(
		chalk.yellow.bold("           Do you want to (c)atch or (r)elease? ")
	);
	console.log("");
	// Make a decision already! ================================================
	userInput = prompt(chalk.red("                  > "));
	console.log("");
	// What did you decide to do? We will find out. ============================
	if (userInput === "c") {
		// Actually adds the entire fish data to the keptFish array ============
		keptFish.push(fish);
		// Its a string! Make it not a string! =================================
		weight += parseFloat(fish.weight);
		value += parseFloat(fish.value);
		// Add 1 to the fish counter ===========================================
		count++;
		// As long as you haven't exceed the weight parameter, here's what you got ====================================================================
		if (weight < 10) {
			console.log(chalk.blue("           You kept a: ", fish.name));
		}
		// If you did exceed the weight, let it go, let it go ==================
	} else {
		console.log(chalk.red(`           You have released a ${fish.name}!`));
	}
}
// Sets a stopping point if the weight will exceed 10 lbs with a catch =========
if (weight >= 10) {
	console.log(
		chalk.bgRed(`This fish would put you over 10lbs, so you release it.`)
	);
	console.log("");
	console.log(
		chalk.underline.yellow(
			`                           You caught ${count} fish:                                            `
		)
	);
	console.log("");
	// Create variable to hold weight and value totals =========================
	let weightTotal = 0;
	let valueTotal = 0;
	for (i = 0; i < keptFish.length - 1; i++) {
		let fishObject = keptFish[i];
		// When game ends, display all caught fish, weight, and value ==========
		console.log(
			chalk.cyan.bold.italic(
				`           **  ${fishObject.name}, ${fishObject.weight}, ${Number(
					fishObject.value
				)}`
			)
		);
		console.log("");
		// Track running total of weight and value for later output ============
		weightTotal += Number(fishObject.weight);
		valueTotal += Number(fishObject.value);
	}
	console.log("");
	console.log("");
	// Display the users total caught fish, combined weight, and their value ===
	console.log(
		chalk.red(
			`             The total weight caught was: ${weightTotal.toFixed(2)} lbs.`
		)
	);
	console.log("");
	// Create a variable to add dubloon value to the total value ===============
	valueTotal = dubloonCount * 50 + valueTotal;
	console.log(
		chalk.red(
			`             The total value caught was: $${valueTotal.toFixed(2)}.`
		)
	);
	console.log("");
	console.log(
		chalk.red(
			`             You found a total of ${dubloonCount} dubloons adding $${
				dubloonCount * 50
			} to your total.`
		)
	);
	console.log("");
	console.log("");
	console.log("");
	console.log(prompt(chalk.yellow(`Press [enter] to end`)));
}
// Sets a stopping point if the time reaches 12 ================================
if (time === 12) {
	console.log("");
	console.log(
		chalk.magenta.bold.underline(
			`                      The time is 12:00pm. Times up!                                   `
		)
	);
	console.log("");
	// How many fish did I catch? 1 fish, 2 fish, red fish, blue fish ==========
	console.log(
		chalk.underline.yellow(
			`                           You caught ${count} fish:                                            `
		)
	);
	console.log("");
	// Create variable to hold weight and value totals =========================
	let weightTotal = 0;
	let valueTotal = 0;
	for (i = 0; i < keptFish.length; i++) {
		let fishObject = keptFish[i];
		// When game ends, display all caught fish, weight, and value ==========
		console.log(
			chalk.cyan.bold.italic(
				`           **  ${fishObject.name}, ${fishObject.weight}, ${Number(
					fishObject.value
				)}`
			)
		);
		// Track running total of weight and value for later output ============
		weightTotal += Number(fishObject.weight);
		valueTotal += Number(fishObject.value);
	}
	console.log("");
	console.log("");
	// Display the users total caught fish, combined weight, and their value ===
	console.log(
		chalk.red(
			`             The total weight caught was: ${weightTotal.toFixed(2)} lbs.`
		)
	);
	console.log("");
	// Create a variable to add dubloon value to the total value ===============
	valueTotal = dubloonCount * 50 + valueTotal;
	console.log(
		chalk.red(
			`             The total value caught was: $${valueTotal.toFixed(2)}.`
		)
	);
	console.log("");
	console.log(
		chalk.red(
			`             You found a total of ${dubloonCount} dubloons adding $${
				dubloonCount * 50
			} to your total.`
		)
	);
	console.log("");
	console.log("");
	console.log("");
	console.log(prompt(chalk.yellow(`Press [enter] to end`)));
}
