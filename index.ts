#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

console.log(chalk.bold.italic.redBright("**********************************************************"));
console.log(chalk.bold.italic.yellow ("!!!! WELCOME TO CURRENCY CONVERTOR Using Typescript !!!!!"));
console.log(chalk.bold.italic.redBright("**********************************************************"));




let currency: any = {
    "PKR":{
        "USD": 0.0036,
        "GBP": 0.028,
        "PKR": 1,
    },
    "GBP" :{
        "USD": 1.26,
        "GBP": 1,
        "PKR": 350.76,
    },
    "USD":{
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.54,
    },
};

const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: chalk.greenBright.bold("Select Your Currency"),
        choices: ["PKR", "GBP", "USD"]
    },
    {
        type: "list",
        name: "to",
        message: chalk.yellow.bold("Select Your Conversation rate"),
        choices: ["PKR", "GBP", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: chalk.greenBright.bold(" Please enter the amount to wish you convert")
    }
]);

const { from, to, amount } = answer;

if (from  && to  && amount) {
    let result = currency[from][to] * amount;
    console.log(chalk.bgYellow.bold.italic(`Your conversion from ${from} to ${to} is ${result}`)); 
} else {
    console.log(chalk.redBright.bold("Please enter valid conversion"));
}
