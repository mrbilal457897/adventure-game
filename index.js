#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    name: "name",
    message: "Please Enter your name",
    type: "input",
});
let opponent = await inquirer.prompt({
    name: "select",
    message: "Select your opponent",
    type: "list",
    choices: ["Ghost", "Zombie", "Devil"],
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
if (opponent.select == "Witch") {
    let ask = await inquirer.prompt({
        name: "opt",
        message: "What would you like to do",
        type: "list",
        choices: ["Action", "Drink portion", "Run for your life"],
    });
}
do {
    // Ghost
    if (opponent.select == "Ghost") {
        let ask = await inquirer.prompt({
            name: "opt",
            message: "What would you like to do",
            type: "list",
            choices: ["Action", "Drink portion", "Run for your life"],
        });
        if (ask.opt == "Action") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.redBright.italic(chalk.bold.italic.redBright("You lose, Better luck next time")));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.greenBright.bold.italic("Congratulations, You win"));
                    process.exit();
                }
            }
            ;
        }
        if (ask.opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink fuel portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("You lose, Better luck next time");
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            name: "opt",
            message: "What would you like to do",
            type: "list",
            choices: ["Action", "Drink portion", "Run for your life"],
        });
        if (ask.opt == "Action") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.redBright.italic(chalk.bold.italic.redBright("You lose, Better luck next time")));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.greenBright(chalk.greenBright.bold.italic("Congratulations, You win")));
                    process.exit();
                }
            }
            ;
        }
        if (ask.opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink fuel portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.bold.italic.redBright("You lose, Better luck next time"));
            process.exit();
        }
    }
    // Devil  
    if (opponent.select == "Devil") {
        let ask = await inquirer.prompt({
            name: "opt",
            message: "What would you like to do",
            type: "list",
            choices: ["Action", "Drink portion", "Run for your life"],
        });
        if (ask.opt == "Action") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright.bold.italic("You lose, Better luck next time"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.greenBright("Congratulations, You win"));
                    process.exit();
                }
            }
            ;
        }
        if (ask.opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink fuel portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.bold.redBright.italic("You lose, Better luck next time"));
            process.exit();
        }
    }
} while (true);
