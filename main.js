// Gone Fishing Game ===========================================================

const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");
console.clear();
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
let minutes = 0;
const keptFish = [];
let count = 0;
let value = 0;
let weight = 0;
let dubloonCount = 0;

// userInput = "";

// Start a loop to continue until the game is complete =========================

while (time < 12 && weight < 10) {
	const display = `    The time is ${time}:${minutes}am. So far you've caught: ${count} fish, weighing a total of ${weight.toFixed(
		2
	)} lbs, with a value of $${value.toFixed(2)}`;
	const fish = {};
	// Create a function to call random fish when needed ===========================
	function generateRandomFish() {
		// Empty array to store the fish information ===================================
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

		// Create objects to store fish weight and value with random integers ==

		// Create object to contain weights ====================================
		// const fishWeightsArray = [];
		fishWeights = ((Math.random() * 1000) / 100).toFixed(2);

		// Create object to contain values =====================================
		// const fishValuesArray = [];
		let fishValues = ((Math.random() * 1000) / 100).toFixed(2);

		// Create random integers for pulling random items from arrays =========
		let randomFish = Math.floor(Math.random() * 13);

		// Create random number for golden dubloon =============================
		let dubloon = Math.floor(Math.random() * 10);

		// Create a random time increment between 15 mins and 1.5 hour =========
		function randomInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// Create an empty string to store each of the fish adjectives =========
		let string = "";
		string += fishColors[randomFish];
		string += fishDescriptor[randomFish];
		string += fishNames[randomFish];

		// Push the string into fish object ====================================
		fish.name = string;
		fish.weight = fishWeights;
		fish.value = fishValues;
		randomTime = randomInteger(15, 45);

		if (minutes + randomTime >= 60) {
			time = time + 1;
			minutes = 60 - minutes;
		} else {
			minutes += randomTime;
		}
		if (dubloon === 3) {
			console.log("");
			console.log(
				chalk.red("           You have found a golden dubloon worth $50!!!")
			);
			dubloonCount++;
		}
		return chalk.magenta(
			`      You caught a ${string} fish, weighing ${fishWeights} lbs and valued at $${fishValues}`
		);
	}

	const genFish = generateRandomFish();
	console.log("");
	console.log(chalk.yellow(display));
	console.log("");
	userInput = prompt(
		chalk.yellow.bold("                  Hit [Enter] to fish ")
	);
	console.clear();
	console.log("");
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
	console.log(genFish);
	console.log("");
	console.log(
		chalk.yellow.bold("           Do you want to (c)atch or (r)elease? ")
	);
	console.log("");
	userInput = prompt(chalk.red("                  > "));
	console.log("");
	if (userInput === "c") {
		keptFish.push(fish);
		weight += parseFloat(fish.weight);
		value += parseFloat(fish.value);
		count++;
		if (weight < 10) {
			console.log(chalk.blue("           You kept a: ", fish.name));
		}
	} else {
		console.log(chalk.red(`           You have released a ${fish.name}!`));
	}
}
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
	let weightTotal = 0;
	let valueTotal = 0;
	for (i = 0; i < keptFish.length - 1; i++) {
		let fishObject = keptFish[i];
		console.log(
			chalk.cyan.bold.italic(
				`           **  ${fishObject.name}, ${fishObject.weight}, ${Number(
					fishObject.value
				)}`
			)
		);
		console.log("");
		weightTotal += Number(fishObject.weight);
		valueTotal += Number(fishObject.value);
	}
	console.log("");
	console.log("");
	console.log(
		chalk.red(
			`             The total weight caught was: ${weightTotal.toFixed(2)} lbs.`
		)
	);
	console.log("");
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
if (time === 12) {
	console.log("");
	console.log(
		chalk.magenta.bold.underline(
			`                      The time is 12:00pm. Times up!                                   `
		)
	);
	console.log("");
	console.log(
		chalk.underline.yellow(
			`                           You caught ${count} fish:                                            `
		)
	);
	console.log("");
	let weightTotal = 0;
	let valueTotal = 0;
	for (i = 0; i < keptFish.length; i++) {
		let fishObject = keptFish[i];
		console.log(
			chalk.cyan.bold.italic(
				`           **  ${fishObject.name}, ${fishObject.weight}, ${Number(
					fishObject.value
				)}`
			)
		);
		weightTotal += Number(fishObject.weight);
		valueTotal += Number(fishObject.value);
	}
	console.log("");
	console.log("");
	console.log(
		chalk.red(
			`             The total weight caught was: ${weightTotal.toFixed(2)} lbs.`
		)
	);
	console.log("");
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
// Limit the total weight of caught fish to 10lbs ==============================

// Display the users total caught fish, combined weight, and their value =======

// When game ends, display all caught fish, weight, and value ==================
